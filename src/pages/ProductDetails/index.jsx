import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Section from "../../components/Section";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

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
    <Section>
      <div>
        <div>
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <div>
          <h1>{data.title}</h1>
        </div>
      </div>
    </Section>
  );
}
