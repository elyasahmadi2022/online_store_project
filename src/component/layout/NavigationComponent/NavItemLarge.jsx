import React from "react";
import styles from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

function NavItemLarge({ tabName, icon, path }) {
  return (
    <NavLink to={path} className={`${styles.tabs_item} ${styles.nav__menu}`}>
      {icon}
      <span>{tabName}</span>
    </NavLink>
  );
}

export default NavItemLarge;
