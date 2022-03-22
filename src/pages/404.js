import React from "react";

import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "../pages/about-us/styles.module.css";

export default function Custom404() {
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
            src={require("@/assets/images/banner/404.png")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28  ">
          <div className="flex flex-wrap md:px-38  overflow-hidden "></div>
        </div>
      </div>
    </div>
  );
}
