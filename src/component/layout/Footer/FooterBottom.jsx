import React from "react";
import styles from "./Footer.module.css";

function FooterBottom() {
  return (
    <div className={styles.bottom}>
      <p className={styles.copyright}>
        © 2023 فررشگاه آنلاین. تمامی حقوق محفوظ است.
      </p>
    </div>
  );
}

export default FooterBottom;
