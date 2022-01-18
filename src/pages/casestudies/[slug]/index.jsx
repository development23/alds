import React from "react";
import { casestudies } from "@/config/casestudiesConfig";
import Custom404 from "pages/404";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";

export async function getServerSideProps({ params }) {
  const casestudy = casestudies.filter((item) => item.slug === params.slug);
  if (casestudy.length === 0) {
    return {
      props: {
        department: "404",
      },
    };
  }
  return {
    props: {
      casestudy: casestudy[0],
    },
  };
}

export default function Casestudy({ casestudy }) {
  return casestudies != "404" ? (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden    xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/" + casestudy.banner)}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white pb-8`}>
        <div className="md:px-28 md:pt-10 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> {casestudy.subtitle} </p>

                <h2 className={` ${styles.titlemain} `}>{casestudy.title}</h2>
              </div>

              <p>{casestudy.description}</p>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Challenges </p>
              </div>

              <p>{casestudy.descriptionin1}</p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Opportunities </p>
              </div>

              <p>{casestudy.descriptionin2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Custom404 />
  );
}
