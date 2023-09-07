import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Image
        className={styles.heroImage}
        src="/images/hero2.jpg"
        placeholder="blur"
        blurDataURL="/images/hero2.jpg"
        alt="hero image"
        fill
        priority
      />
      <div className={styles.Content}>
        <h1>
          Quality service from <br /> an experienced team <br />
          you can trust
        </h1>
        <p>
          Expand Your Knowledge and skills with our online learning platform.
        </p>
        <button className={styles.btn}>Start Now</button>
      </div>
    </section>
  );
};

export default Hero;
