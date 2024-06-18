import React from "react";
import clsx from "clsx";

import hero from "./../../assets/hero.svg";
import styles from './Footer.module.css';
import ContactUS from './ContactUs';
import FooterText from "./FooterText";

export default function Footer() {
  return (
    <>
      <section>
        <div
          className={clsx(styles.gridVariant1, "bg-black")}
        >
          <div className={clsx(styles.mobBot, "mt-auto md:pt-4")}>
            <img
              src={hero}
              alt=""
              className="mdm:mx-auto h-3/4 w-3/4"
              draggable="false"
            />
          </div>
          <FooterText />
          <ContactUS />
        </div>
      </section>
    </>
  );
}
