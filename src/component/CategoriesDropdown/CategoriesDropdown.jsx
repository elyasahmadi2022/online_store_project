import React from "react";
import styles from "./CategoriesDropdown.module.css";

function CategoriesDropdown({ show }) {
  return (
    <div className={`${styles.dropdown} ${show ? styles.show : ""}`}>
      <div className={styles.container}>
        <div className={styles.left_column}>
          <div className={styles.category}>
            <h4>الکترونیک</h4>
            <ul>
              <li>گوشی موبایل</li>
              <li>لپ تاپ</li>
              <li>تبلت</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>مد و پوشاک</h4>
            <ul>
              <li>لباس مردانه</li>
              <li>لباس زنانه</li>
              <li>کفش</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>خانه و آشپزخانه</h4>
            <ul>
              <li>لوازم خانگی</li>
              <li>ابزار آشپزخانه</li>
              <li>مبلمان</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>ورزش و سفر</h4>
            <ul>
              <li>لوازم ورزشی</li>
              <li>کیف و چمدان</li>
              <li>کمپینگ</li>
            </ul>
          </div>
        </div>
        <div className={styles.right_column}>
          <h4>Selected Items</h4>
          <p>No items selected</p>
        </div>
      </div>
    </div>
  );
}

export default CategoriesDropdown;
