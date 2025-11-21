import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import styles from "./AppLayout.module.css";
import Footer from "./Footer/Footer";
function AppLayout() {
  return (
    <section>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default AppLayout;
