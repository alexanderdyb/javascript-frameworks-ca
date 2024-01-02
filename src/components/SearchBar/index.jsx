import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

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
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.resultsContainer}>
          {filteredData.map((value, key) => {
            return (
              <Link to={`/product/${value.id}`} className={styles.resultItem}>
                <p>{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
