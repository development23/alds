import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { allBanner } from "@/config/bannerConfig";
import InnerBanner from "ui/innerbanner";

import Sidebar from "components/sidebar";

import Link from "next/link";

export default function Technologies() {
  const [imageIndex, setImageIndex] = useState(0);
  const technologyRef = useRef(null);

  const [technologyContent, settechnologyContent] = useState([]);

  const handleEvents = (action) => {
    setEvents(action);
  };

  return (
    <div>
      <div className="flex flex-wrap overflow-hidden ">
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div
          className={`  ${styles.btp} w-full overflow-hidden   xl:px-3 xl:w-4/5 `}
        >
          <Image
            src={require("@/assets/images/home/BANNER.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden ">
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-full">
          <p> HYE </p>
        </div>
      </div>
    </div>
  );
}
