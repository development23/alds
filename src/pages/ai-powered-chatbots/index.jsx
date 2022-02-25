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
            src={require("@/assets/images/banner/s5.jpg")}
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

                <h2 className={` ${styles.titlemain} `}> AI-Powered Chatbots</h2>
              </div>

              <p>
              As a Chatbot development company, we are engaged in building secure and scalable AI-powered chatbots that are essential for your business. Keeping in mind the unique requirements of the particular business and services, our chatbot development services are designed to communicate with the visitors of your website in the best possible way. One of the best parts about the chatbots that we create is that they are equipped with advanced AI tools and loaded with machine learning abilities to enhance the overall performance.
              </p>
              <p>
              In addition to this, scalability can be achieved by enhancing the scope of operations and adding more functionalities to the already existing chatbots. Chatbots for websites have become the primary requirement for any website in the present scenario. This is of utmost benefit to the users as they can access important information on the website without any hassles and by providing enough support and assistance. The chatbot enhances the user experience as they find relevant information within minutes on the website.
              </p>              
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}
