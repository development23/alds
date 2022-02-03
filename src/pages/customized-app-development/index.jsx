import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "../about-us/styles.module.css";


export default function Webappdev() {
  
  return (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden    xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/s2.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28 md:pt-10 md:pb-28 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Services </p>

                <h2 className={` ${styles.titlemain} `}> Customized Application Development</h2>
              </div>

              <p>
              Our custom application development services involve designing mobile applications for a particular user or group of users in an organization. We strive to develop mobile application solutions that are a combination of high-quality coding and well-structured system architecture. Our team of experienced mobile app developers recommends the most appropriate and widely used technologies to speed up the mobile application development process and make sure that users receive an outstanding experience while using the application.
              </p>
              <p>
              The successful development of customized mobile apps involves analyzing and meeting the users’ requirements by continuously improving the product or service.The technology is changing at a fast pace and thus, the devices on which the mobile apps run also need to be updated to meet the needs and preferences of customers. Thus, we not only develop custom applications but also provide regular updates for the same for better user experience. Thus, our mobile app developers use the best methodologies and the best tools to enhance the user experience and fulfill the mobile solution requirements.
              </p>              
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}
