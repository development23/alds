import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "../about-us/styles.module.css";


export default function Websitedesign() {
  
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
            src={require("@/assets/images/banner/s3.jpg")}
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

                <h2 className={` ${styles.titlemain} `}> Website Design &amp; Development</h2>
              </div>

              <p>
              Having an impressive and responsive web design is necessary not only to reach your potential customers but to build your corporate reputation. From logo design to graphics design, we make every effort to identify your brand from other competitors. Times have gone when you just visit the website to see a boring page full of text information. An attractive web page is the need of the hour with a strong UI/UX design that has compatibility with different devices like smartphones, tablets, PC, desktops.
              </p>
              <p>
              Our skilled web designers understand the role of visuals and illustrations in the design and how such designs help users in interacting with the website. Thus, visually appealing designs with unmatched content can provide an awesome look to your website that is potentially engaging and lowers the bounce rate of your website. A powerful, user-friendly, and interactive web design ensures great outcomes and enables your brand to remain connected with your customers.
              </p>              
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}
