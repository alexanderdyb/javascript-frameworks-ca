import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../Layout";
import Section from "../../components/Section";
import styles from "./ProductPage.module.css";
import Button from "../../components/Button";
import Price from "../../components/Price";
import Reviews from "../../components/Reviews";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let { id } = useParams();
  const { dispatch } = useContext(ThemeContext);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const json = await response.json();

        setData(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  function onAddToCart() {
    setIsModal(true);
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.wrapper}>
          <Loading />
        </div>
      ) : isError ? (
        <div className={styles.wrapper}>
          {errorMessage} Error fetching data. Please try again later.
        </div>
      ) : (
        <Section>
          <div className={styles.productDetails}>
            <div>
              <img src={data.imageUrl} alt={data.title} />
            </div>
            <div className={styles.infoWrapper}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <Price
                price={data.price}
                discountedPrice={data.discountedPrice}
              />
              <Button
                title={"Add to Cart"}
                onClick={() => {
                  dispatch({ type: "addProduct", payload: data });
                  onAddToCart();
                }}
              />
            </div>
            {isModal && (
              <div className={styles.modalWrapper}>
                <Modal />
              </div>
            )}
          </div>
          <div className={styles.reviews}>
            <h2>Reviews</h2>
            <Reviews reviews={data.reviews} />
          </div>
        </Section>
      )}
    </>
  );
}
