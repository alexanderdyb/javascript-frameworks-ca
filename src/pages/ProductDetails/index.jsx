import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, useReducer } from "react";
import { ThemeContext } from "../../Layout";
import Section from "../../components/Section";
import styles from "./ProductDetails.module.css";
import Button from "../../components/Button";
import Price from "../../components/Price";
import PriceTag from "../../components/PriceTag";
import Reviews from "../../components/Reviews";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  const { state, dispatch } = useContext(ThemeContext);
  useEffect(() => {
    console.log("Cart updated:", state);
  }, [state.cart]);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
      <Section>
        <div className={styles.productDetails}>
          <div className={styles.productDetailsImage}>
            <img src={data.imageUrl} alt={data.title} />
            <PriceTag
              price={data.price}
              discountedPrice={data.discountedPrice}
            />
          </div>
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Price price={data.price} discountedPrice={data.discountedPrice} />
            <Button
              title={"Add to Cart"}
              onClick={() => {
                dispatch({ type: "addProduct", payload: data });
              }}
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles.reviews}>
          <h2>Reviews</h2>
          <Reviews reviews={data.reviews} />
        </div>
      </Section>
    </>
  );
}
