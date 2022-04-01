import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import Sidebar from "components/sidebar";

import Link from "next/link";

export default function Casestudies() {
  const [value, setValue] = React.useState(0);
  const casestudy = [
    {
      id: 0,
      image: require("@/assets/images/home/case/1.jpg"),
      title: "My Fm",
      loc: "New Delhi",
      content:
        "We have developed a landing page for the My FM, Delhi to promote their online property exhibition “My Virtual Real Estate Fair”. We have also developed a lead capturing.",
      connect: "casestudies/my-fm",
      cases: true,
    },
    {
      id: 1,
      image: require("@/assets/images/home/case/2.jpg"),
      title: "Roodraksh",
      loc: "Assam",
      content:
        "ALDS has developed the website & CRM for Roodraksh on Laravel. Our developers have designed a user-friendly website to deliver the complete crisp of information.",
      connect: "casestudies/roodraksh",
      cases: true,
    },
    {
      id: 2,
      image: require("@/assets/images/home/case/3.jpg"),
      title: "Orville Business Port",
      loc: "Pune",
      content:
        "A great experience of a company derive with CodeIgniter. We have designed the Orville Business Port website on CodeIgniter for a good experience.",
      connect: "casestudies/orville-business-port",
      cases: true,
    },
    {
      id: 3,
      image: require("@/assets/images/home/case/4.jpg"),
      title: "Surya Residency",
      loc: "Jaipur",
      content:
        "A website with multiple features and easy to find everything increases the chances of good results. We have designed the website with refer & earn program.",
      connect: "casestudies/surya-residency",
      cases: true,
    },
    {
      id: 4,
      image: require("@/assets/images/home/case/5.jpg"),
      title: "Mahima Group",
      loc: "Jaipur",
      content:
        "A refer & earn program gives the best result to a company. A customer-centric approach of our company has given us an idea to design an app on Laravel.",
      connect: "casestudies/mahima-group",
      cases: false,
    },
    {
      id: 5,
      image: require("@/assets/images/home/case/6.jpg"),
      title: "Avalon Networks",
      loc: "Dubai",
      content:
        "We have developed an E-commerce website on Magento for our Dubai- based client. Our goal was to provide the best result with an easy-to-use acronym.",
      connect: "casestudies/avalon-networks",
      cases: true,
    },

    {
      id: 6,
      image: require("@/assets/images/home/case/8.png"),
      title: "Apex Hospitals",
      loc: "Jaipur",
      content:
        " We have developed a telemedicine application as well as a website for one of our top healthcare clients. The app was highly useful for a virtual consultation, particularly during pandemic times. ",
      cases: true,
    },

    {
      id: 7,
      image: require("@/assets/images/home/case/9.png"),
      title: "Niflux",
      loc: "India",
      content:
        " We have created a dynamic mobile app on both Android and iOS platforms for the complete tracking of employees, particularly for sales force tracking. We have also developed their website. ",
      cases: true,
    },

    {
      id: 8,
      image: require("@/assets/images/home/case/10.png"),
      title: "Floret ",
      loc: "Jaipur",
      content:
        "We developed an E-Commerce website as well as a mobile application on both Android and iOS platforms for one of our B2B clients and engaged in the wholesale supply of construction materials and interior products.",
      cases: true,
    },

    {
      id: 9,
      image: require("@/assets/images/home/case/7.png"),
      title: "Property Check Karo",
      loc: "Jaipur",
      content:
        "We developed a property check portal where multiple builders’ properties can be listed and buyers can make proper comparisons between properties by choosing various filters per their convenience. ",
      cases: true,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            src={require("@/assets/images/banner/cs.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>
      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28 md:pt-10 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  How we manage our ups & down{" "}
                </p>

                <h2 className={` ${styles.titlemain} `}> Case Studies </h2>
              </div>
            </div>

            <div className="flex flex-wrap pb-8 -mx-3 overflow-hidden">
              {casestudy.reverse().map(
                (item, index) =>
                  item.cases && (
                    <div
                      key={index}
                      className="my-3 px-3 w-full pt-4 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
                    >
                      <div
                        className={` md:w-full text-center   xl:px-6   overflow-hidden `}
                      >
                        <div className={` ${styles.casehg}`}>
                          <Image src={item.image} alt="alds" />
                          <div className={` ${styles.case}`}>
                            <h3> {item.title} </h3>
                            <h6> {item.loc} </h6>
                            <p> {item.content} </p>
                          </div>
                        </div>

                        {/* <div className={` ${styles.caseview}`}>
                          <Link href={item.connect}>
                            <a> Read More </a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
