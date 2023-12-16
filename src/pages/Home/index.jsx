import BackgroundImage from "../../components/BackgroundImage";
import Section from "../../components/Section";
import Product from "../../components/Product";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <BackgroundImage />
      <Section>
        <div className={styles.productContainer}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`}>
              <Product
                image={product.imageUrl}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                key={product.id}
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
