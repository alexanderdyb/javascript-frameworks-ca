import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className={styles.searchIcon}></div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.map((value, key) => {
            return (
              <Link to={`/product/${value.id}`} className={styles.dataItem}>
                <p>{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
