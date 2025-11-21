import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function FooterCategoriesSection() {
  return (
    <div className={styles.section}>
      <h4 className={styles.subtitle}>دسته بندی ها</h4>
      <ul className={styles.list}>
        <li>
          <NavLink to="#" className={styles.link}>
            سوپر مارکت
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.link}>
            طلای دیجتال
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.link}>
            پر فروش ترینها
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.link}>
            شگفت انگیز ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterCategoriesSection;
