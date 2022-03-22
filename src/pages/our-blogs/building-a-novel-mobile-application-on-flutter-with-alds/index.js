import React from "react";
import Image from "next/dist/client/image";
import Sidebar from "components/sidebar";
import styles from "../innerstyles.module.css";

export default function blog4() {
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
            src={require("@/assets/images/blogs/banner/blog4.jpg")}
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
                <p className={` ${styles.titlesub} `}> 22 Mar 2021 </p>

                <h2 className={` ${styles.titlemain} `}>
                  Building a Novel Mobile Application on Flutter with ALDS
                </h2>
              </div>
              <p>
                <strong>Knowing Flutter</strong>
              </p>

              <p>
                A free and open-source mobile UI framework created by Google
                permitting for creation of a native mobile application with a
                single codebase. This means that you can use single programming
                language and codebase to create two different apps that is for
                iOS and Android. It is a cross platform app.
              </p>

              <p>
                <strong>Flutter consists of two significant parts:</strong>
              </p>

              <ul className="list-disc px-4">
                <li>
                  An SDK (Software Development Kit): A collection of tools that
                  helps to develop applications. This includes tools to compile
                  your code into native machine code.
                </li>{" "}
                <li>
                  A Framework (UI Library based on widgets): A collection of
                  reusable UI elements (buttons, text inputs etc.) that you can
                  personalize aligning with your own needs.
                </li>{" "}
              </ul>
              <p>
                Developing Flutter would require knowledge of the programming
                language known as Dart. It put emphasis on front-end development
                which can be used to create novel mobile applications. It is
                similar to JavaScript.{" "}
              </p>

              <p>
                <strong>WHY TO USE FLUTTER? </strong>:{" "}
              </p>

              <ul className="list-disc px-4">
                <li>
                  {" "}
                  Simple to learn and use -Flutter is different from other
                  technologies like React Native, Java, Swift as it is easy to
                  create a real native application without a bunch of code.
                </li>{" "}
                <li>
                  {" "}
                  Maximum Productivity-Real-Time Changing of code and results
                  are displayed in a short time. It is called Hot-Reload.
                </li>{" "}
                <li>
                  {" "}
                  If a business organization wants to show its products to
                  investors in a short duration of time, then flutter is a good
                  choice as it is cheaper to develop a mobile application with
                  Flutter because it is cross platform.
                </li>{" "}
                <li>
                  {" "}
                  Its performant as you cannot notice difference between a
                  native application and a Flutter app.
                </li>{" "}
                <li>
                  {" "}
                  One can easily use widgets provided by Flutter and personalize
                  it to create a valuable UI for your clients.
                </li>
              </ul>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-4 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <p>
                <strong>
                  FLUTTER MOBILE APP DEVELOPMENT SOLUTIONS OFFERED BY ALDS{" "}
                </strong>
              </p>
              <p>
                ALDS offer flutter mobile app development solutions through a
                team of professionals who are well skilled and certified for the
                following needs-{" "}
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Mobile and Desktop Development{" "}
                </p>
              </div>
              <p>
                We offer our clients bespoke mobile app solutions according to
                their needs.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> App Deployment </p>
              </div>
              <p>
                We assist in the entire Play Store and App Store submission
                process which includes listing, description, ASO.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Maintenance & Support{" "}
                </p>
              </div>
              <p>
                We offer maintenance and support services in addition to app
                development services and helps to manage updates and new
                releases.
              </p>

              <p className="mt-10">
                <strong>CHOOSING ALDS FOR FLUTTER DEVELOPMENT: -</strong>
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Timely Delivery</p>
              </div>
              <p>
                We possess a consistent track record of delivering projects on
                time according to client requirements.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Transparency</p>
              </div>
              <p>
                We keep clients updated about every aspect, including status and
                resources deployed which makes the whole process transparent.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Skilled Team</p>
              </div>
              <p>
                Our certified and experienced Flutter app solutions developers
                provide you with the best solutions to your business problems
                (existing and foreseen).
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Technical Support</p>
              </div>
              <p>
                Our highly cooperative support team provides you with all the
                answers to your technical queries.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
