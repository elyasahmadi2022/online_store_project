import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <section>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
