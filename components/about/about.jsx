import React from "react";
import Image from "next/image";
import Styles from "./about.module.css";

const About = () => {
  return (
    <section className={Styles.container}>
      <Image
        className={Styles.aboutImage}
        src="/images/about.jpg"
        width={1800}
        height={600}
      />
      <div className={Styles.content}>
        <h2>About us</h2>
        <p>
          Learning is a leading online platform based in Nigeria. Our mission is
          to provide accessible and affordable education to everyone, regardless
          of their location or background.
          <br /> <br />
          We offer a wide range of courses from basic skills to advanced topics,
          all taught by experienced professionals in their respective fields.
          Our platform is user-friendly and easy to navigate, making learning a
          seamless experience for our students. Join us today and start your
          journey towards a brighter future with Learning.
        </p>
        <br />
        <button className={Styles.btn}>Contact</button>
      </div>
    </section>
  );
};

export default About;
