import React from "react";
import styles from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

function NavItemSmaller({ isScrolled, cardSvgClass, path, icon, name }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.card_item} ${styles.active} `
          : `${styles.card_item}`
      }
      style={{
        padding: isScrolled ? "5px 0" : "",
      }}
    >
      <div className={cardSvgClass(isScrolled)}>{icon}</div>
      <span>{name} </span>
    </NavLink>
  );
}

export default NavItemSmaller;
