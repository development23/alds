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
            src={require("@/assets/images/banner/s4.jpg")}
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

                <h2 className={` ${styles.titlemain} `}> Web Application Development</h2>
              </div>

              <p>
              Similar to website development, our web application development services provide cutting-edge web solutions that drive business transformation by building dynamic web apps. We utilize the most advanced frameworks, best programming practices, and adhere to the standard coding guidelines to make sure that your business brings in better conversion, optimized, and outcome focussed. The robust technology we use adds value to the client&#39;s business and our end-to-end digital solutions provide the best results in the long run.
              </p>
              <p>
              Right from designing eye-catching UI to research, we have adopted some of the best industry practices that are necessary to kick start your business for providing you with the desired growth. The web app provides the best experience for the website and native applications with advanced features like push notification, fast loading speed, exceptional performance on any browser and device. The web applications are user-friendly and our web experts are good at technologies such as HTML, CSS, and Javascript.
              </p>              
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}
