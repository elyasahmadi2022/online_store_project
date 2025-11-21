import React from "react";
import styles from "./Footer.module.css";
import FooterCompanySection from "./FooterCompanySection";
import FooterCategoriesSection from "./FooterCategoriesSection";
import FooterCustomerServiceSection from "./FooterCustomerServiceSection";
import FooterContactSection from "./FooterContactSection";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterCompanySection />
        <FooterCategoriesSection />
        <FooterCustomerServiceSection />
        <FooterContactSection />
      </div>
      <FooterBottom />
    </footer>
  );
}

export default Footer;
