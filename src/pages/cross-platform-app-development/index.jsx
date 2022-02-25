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
            src={require("@/assets/images/banner/s1.jpg")}
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

                <h2 className={` ${styles.titlemain} `}> Cross-Platform App Development</h2>
              </div>

              <p>
              Cross-Platform applications avoid the need for choosing between different platforms and it is cost-effective also as it uses a single codebase for developing applications using Android, iOS, and Web. The approach is highly effective for business as it significantly reduces the development time and it is easy to maintain and update the version. Our mobile app developers resolve the various challenges and ensure that the app design provides a smooth and consistent experience across various platforms. Thus, we adopt the most suitable technology after taking into account the client&#39;s requirements.
              </p>
              <p>
              The major benefit of cross-platform apps is that a single app supports different devices code can be easily reused between different platforms. This speeds up the development process. Whether to build a native or cross-platform app, it is important to decide between the right technology as it potentially influences the success of the business. Although cross-platform apps are far better than native apps and offer many benefits, to run these apps smoothly, it is required to manage the various technical issues to make the app user-friendly and achieve stable performance. To attain this, our professional mobile app developers develop intuitive and enhanced User Interfaces.
              </p>              
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}
