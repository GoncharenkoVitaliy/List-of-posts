import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <Link to={"/"}>О Сайте</Link>
        <Link to={"/posts"}>Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
