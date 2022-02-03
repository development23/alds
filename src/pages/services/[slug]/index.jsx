import React from "react";
import { services } from "@/config/servicesConfig";
import Custom404 from "pages/404";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";

export async function getServerSideProps({ params }) {
  const service = services.filter((item) => item.slug === params.slug);
  if (service.length === 0) {
    return {
      props: {
        department: "404",
      },
    };
  }
  return {
    props: {
      service: service[0],
    },
  };
}

export default function Service({ service }) {
  return services != "404" ? (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden    xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/" + service.banner)}
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
                <p className={` ${styles.titlesub} `}> {service.subtitle} </p>

                <h2 className={` ${styles.titlemain} `}>{service.title}</h2>
              </div>

              <p>{service.description}</p>
              <p>{service.description1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Custom404 />
  );
}
