import React from "react";
import Image from "next/dist/client/image";
import Sidebar from "components/sidebar";
import styles from "../innerstyles.module.css";

export default function blog3() {
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
            src={require("@/assets/images/blogs/banner/blog6.jpg")}
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
                <p className={` ${styles.titlesub} `}> 25 Mar 2021 </p>

                <h2 className={` ${styles.titlemain} `}>
                  Telemedicine App for Apex Hospital
                </h2>
              </div>

              <p>
                In recent times, telemedicine has become important, due to
                increased deployment and development of digital technologies.
                During COVID-19 pandemic, mandatory social distancing and lack
                of effective treatments made telemedicine the safest interactive
                system between patients, both infected and uninfected, and
                clinicians. ALDS in collaboration with Apex Hospitals has
                designed a secure and safe telemedicine app for web and mobile
                phones which has gained immense popularity in these times.
              </p>

              <p>
                The telemedicine platform, which is accessible on both web and
                mobile,consists of some standard modules and services like
                Appointment scheduling, Digital prescriptions, Online Audio
                andVideo Consultations, profile management, back end
                infrastructure etc. Additionally, the app consists of some
                customized (specialized) modules like:
              </p>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Weight loss Module </p>
              </div>
              <p>
                which consists of a comprehensive Module of Diet for Weight loss
                as suggested by dietician and nutritionists, weight loss tracker
                and a separate module for noting your designed diet plan.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  A feedback system module{" "}
                </p>
              </div>
              <p>
                which allows patients to share their feedbacks for the services
                offered by the hospital and also rates the experience as being
                bad, average or excellent.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Apex Health card Module{" "}
                </p>
              </div>
              <p>which allows patients to avail many discount benefits.</p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Apex Telemedicine App{" "}
                </p>
              </div>
              <p>
                has been integrated with a third party service provider
                application, which is a customized feature as well permitting
                for paying EMIs in easy monthly installments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
