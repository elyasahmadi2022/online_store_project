import React from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ placeholder = "جستجو کنید", id, onChange }) {
  return (
    <div className={styles.search_wrappers}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.search_input_field}
        id={id}
        onChange={onChange}
      />

      <svg
        className={styles.search_bar_icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </div>
  );
}

export default SearchBar;
