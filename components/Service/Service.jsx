import Image from "next/image";
import React from "react";
import Styles from "./Service.module.css";

const Services = ({ title, desc, photo }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.imgWrap}>
        <Image className={Styles.cardImg} src={photo} fill priority />
      </div>
      <div className={Styles.cardContent}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className={Styles.cardBtn}>More info</button>
      </div>
    </div>
  );
};

export default Services;
