import BackgroundImage from "../../components/BackgroundImage";
import Section from "../../components/Section";
import Product from "../../components/Product";
import styles from "./Home.module.css";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const json = await response.json();
        setProducts(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <BackgroundImage />
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
          <div className={styles.searchWrapper}>
            <SearchBar placeholder="Enter a product name" data={products} />
          </div>
          <div className={styles.productContainer}>
            {products.map((product) => (
              <Product
                image={product.imageUrl}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                key={product.id}
                id={product.id}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
