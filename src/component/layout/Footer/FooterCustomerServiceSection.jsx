import React from "react";
import styles from "./Footer.module.css";

function FooterCustomerServiceSection() {
  return (
    <div className={styles.section}>
      <h4 className={styles.subtitle}>خدمات مشتریان</h4>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.link}>
            سوالات متداول
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            راهنمای خرید
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            بازگشت کالا
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            تماس با ما
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterCustomerServiceSection;
