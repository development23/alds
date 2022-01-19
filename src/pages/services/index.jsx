import React from "react";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
export default function AboutUs() {
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
            src={require("@/assets/images/banner/About-us.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28 md:pt-10 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            {/* <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> services we offered </p>

                <h2 className={` ${styles.titlemain} `}> Our Services </h2>
              </div>
            </div> */}

            <div className={` ${styles.services}`}>
              <div
                className={`container mx-auto flex flex-wrap overflow-hidden`}
              >
                <div className="w-full text-center pl-2  overflow-hidden">
                  <Image
                    src={require("@/assets/images/bg/pat1.png")}
                    alt="Aladinn Tech"
                  />
                  <h2> OUR SERVICES </h2>
                </div>
              </div>

              <div
                className={`container md:px-20 mx-auto flex flex-wrap overflow-hidden`}
              >
                <div
                  className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
                >
                  <Image
                    src={require("@/assets/images/bg/pat2.png")}
                    alt="Aladinn Tech"
                  />
                  <Link href="">
                    <h3>
                      <span>Customized</span> <br />
                      Application Development
                    </h3>
                  </Link>
                  <p>
                    We build customized native and hybrid mobile apps that are
                    impactful and can be used for a variety of devices. We
                    follow a comprehensive designing process with agile
                    development, testing, and post-launch support.
                  </p>
                </div>
                <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
                  <Image
                    src={require("@/assets/images/home/services/s1.png")}
                    alt="Aladinn Tech"
                  />
                </div>
              </div>

              <div
                className={`container md:px-20 pt-16 mx-auto flex flex-wrap overflow-hidden`}
              >
                <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
                  <Image
                    src={require("@/assets/images/home/services/s2.png")}
                    alt="Aladinn Tech"
                  />
                  <Image
                    src={require("@/assets/images/bg/pat2.png")}
                    alt="Aladinn Tech"
                  />
                </div>

                <div
                  className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
                >
                  <Link href="">
                    <h3>
                      <span>Website</span> <br />
                      Design & Development
                    </h3>
                  </Link>
                  <p>
                    Creating a perfect user interface design, we deliver the
                    best user experience with responsive and mobile-friendly
                    websites. Having expertise in E-Commerce web solutions, our
                    web development services are equipped with continuous
                    support and maintenance
                  </p>
                </div>
              </div>

              <div
                className={`container md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
              >
                <div
                  className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
                >
                  <Link href="">
                    <h3>
                      <span>Web Application</span> <br />
                      Development
                    </h3>
                  </Link>
                  <p>
                    Create flexible and secured web apps that impart you the
                    freedom to run your business from any device. After
                    analyzing the objectives, our developers adopt the right
                    approach, technologies, and platforms within your budget.
                  </p>
                </div>

                <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
                  <Image
                    src={require("@/assets/images/home/services/s3.png")}
                    alt="Aladinn Tech"
                  />
                </div>
              </div>

              <div
                className={`container md:px-20 pt-16  mx-auto flex flex-wrap overflow-hidden`}
              >
                <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
                  <Image
                    src={require("@/assets/images/home/services/s4.png")}
                    alt="Aladinn Tech"
                  />
                  <Image
                    src={require("@/assets/images/bg/pat2.png")}
                    alt="Aladinn Tech"
                  />
                </div>

                <div
                  className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
                >
                  <Link href="">
                    <h3>
                      <span>Cross Platform </span> <br />
                      Apps
                    </h3>
                  </Link>
                  <p>
                    With unified design and functionality, we develop cross-
                    platform apps that can perform across both iOS and Android
                    platforms. Adapting to your time and budget constraints, the
                    single app offers greater scalability.
                  </p>
                </div>
              </div>

              <div
                className={`container md:px-20 pt-16 mx-auto flex flex-wrap overflow-hidden`}
              >
                <div
                  className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
                >
                  <Link href="">
                    <h3>
                      <span>AI</span> <br />
                      Powered Chatbots
                    </h3>
                  </Link>
                  <p>
                    The highly functional and customized chatbot development
                    services streamline your business interactions and offer a
                    pleasing user experience. Our developers design interactive
                    interfaces that involve the best UI elements after
                    understanding the client’s requirements.
                  </p>
                </div>

                <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
                  <Image
                    src={require("@/assets/images/home/services/s5.png")}
                    alt="Aladinn Tech"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
