import React from "react";
import sampleProducts from "../data/sampleProducts";
import ProductCard from "../component/ProductCard";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <h1>محصولات ما</h1>
      <div className={styles.coursesGrid}>
        <ProductCard products={sampleProducts} />
      </div>
    </div>
  );
};

export default Home;
