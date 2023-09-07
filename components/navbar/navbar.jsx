import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={styles.container}>
          <h1 className={styles.logo}>Learning</h1>
          <div className={styles.iconsContainer}>
            <BsFacebook className={styles.icons}/>
            <BsInstagram className={styles.icons}/>
            <BsTwitter className={styles.icons}/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
