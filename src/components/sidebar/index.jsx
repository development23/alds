import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function sidebar() {
  return (
    <div className={` ${styles.mhide}   `}>
      <ul className={` ${styles.uline}  `}>
        <li>
          <a href="web-design-development">Website Design &amp; Development</a>
        </li>
        <li>
          <a href="web-application-development">Web Application Development</a>
        </li>
        <li>
          <a href="cross-platform-app-development"> Cross Platform Apps</a>
        </li>

        <li>
          <a href="customized-app-development">
            Customized Application Development
          </a>
        </li>

        <li>
          <a href="ai-powered-chatbots"> AI Powered Chatbots </a>
        </li>
      </ul>
      <h3 className={` ${styles.sideh3} `}> ALDS </h3>
      <p className={` ${styles.sidep} `}>
        LEVERAGING THE NEXT-GEN WEB & MOBILE APP DEVELOPMENT TECHNOLOGY.
      </p>

      <a href="contact-us" className={` ${styles.sidea} `}>
        {" "}
        Get In Touch{" "}
      </a>
    </div>
  );
}
