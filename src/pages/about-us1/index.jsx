import React from "react";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/About-us.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:pr-28 md:pt-10 ">
          <div className="flex items-center  flex-wrap md:px-38  overflow-hidden ">
            <div className="my-1 px-1 w-1/2 text-center overflow-hidden">
              <Image
                src={require("@/assets/images/about/about.png")}
                alt="Aladinn Tech"
                layout="fill"
                layout="responsive"
              />
            </div>

            <div className="my-1 px-1 w-1/2 overflow-hidden">
              <div className={` ${styles.innerpagecon}`}>
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> About Us </p>

                  <h2 className={` ${styles.titlemain} `}> About Us </h2>
                </div>

                <p>
                  We are a growth-centered progressive digital marketing company
                  that develops online marketing strategies for clients tailored
                  as per the unique requirements of the target audience. Thereby
                  helping clients to mark their digital presence by fulfilling
                  brand goals and managing diverse digital marketing challenges.
                  Adopting the right marketing approach benefits the client in
                  terms of better user engagement, enhanced conversion rate, and
                  boosting the overall ROI. Be it SEO paid media strategy, brand
                  creation we have nailed it all with our unmatched skills and
                  talent.
                </p>
                <p>
                  Our exemplary web solutions reflect our technical competence
                  and therefore, customized websites, web applications, mobile
                  apps, chatbots are built to impart the desired growth and
                  success to your business. Optimizing every touchpoint that
                  highlights your digital presence and communication with the
                  customer is the key philosophy that drives us to serve you in
                  the best possible way. We blend imagination with technology to
                  come up with outcomes that will not only improve your brand
                  presence but also fulfill your broad marketing objectives.
                </p>

                <p>
                  At ALDS, we offer 360-degree digital marketing services right
                  from website designing, web development, SEO, content
                  marketing to complete online brand reputation management for
                  the client. Our dedicated team of digital marketing experts,
                  as well as technical professionals, focus on specific tasks to
                  ensure guaranteed results and improvements in the online
                  business. Our immense experience and skills help us build a
                  brand and carve a niche among the top digital marketing and
                  technology companies. Solving complex business problems, we
                  help businesses to achieve great opportunities through the
                  online market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-28 md:pt-10 md:pb-10 bg-gray-100">
          <div className="flex flex-wrap overflow-hidden ">
            <div className={` ${styles.innerpagecon}`}>
              <div className={`pt-6 ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> features </p>

                <h2 className={` ${styles.titlesubmain} `}>
                  Our key features{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap pb-8 overflow-hidden ">
            <div className={`w-full  overflow-hidden md:w-1/2 `}>
              <div className="h-64 bg-white mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div className={`overflow-hidden text-center md:w-1/2 `}>
                      <Image
                        src={require("@/assets/images/about/performance-tracking.png")}
                        alt="Aladinn Tech"
                        width="200"
                        height="147"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-1/2 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Proper Performance Tracking
                      </h6>
                      <p>
                        Performance Tracking is done on a daily, weekly, and
                        monthly basis to ensure tasks planned are done as per
                        the schedule and further planning for future activities
                        can be done effectively.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/2 `}>
              <div className="h-64 bg-white mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div className={`overflow-hidden text-center md:w-1/2 `}>
                      <Image
                        src={require("@/assets/images/about/team-member.jpg")}
                        alt="Aladinn Tech"
                        width="200"
                        height="147"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-1/2 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Dedicated team and Project Manager{" "}
                      </h6>
                      <p>
                        During the development phase and when we run social
                        media campaigns, our dedicated team works to provide the
                        best results. To make the communication more transparent
                        and coordination much better, our Project Manager
                        remains in constant touch with the client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/2 `}>
              <div className="mx-2 bg-white my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div className={`overflow-hidden text-center md:w-1/2 `}>
                      <Image
                        src={require("@/assets/images/about/crm.jpg")}
                        alt="Aladinn Tech"
                        width="200"
                        height="147"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-1/2 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Top-notch CRM Tools{" "}
                      </h6>
                      <p>
                        Good client relationships are the key to success and
                        with the best CRM tools, we improve our communication
                        and update clients regularly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/2 `}>
              <div className="mx-2 bg-white my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div className={`overflow-hidden text-center md:w-1/2 `}>
                      <Image
                        src={require("@/assets/images/about/measure.png")}
                        alt="Aladinn Tech"
                        width="200"
                        height="147"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-1/2 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Measurable Results{" "}
                      </h6>
                      <p>
                        Be it any of our digital marketing services, we provide
                        results that are measurable and can be easily observed.
                        Thus, you can be satisfied that we have made the most
                        effective use of every penny.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
