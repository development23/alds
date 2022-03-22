import React from "react";
import Image from "next/dist/client/image";
import Sidebar from "components/sidebar";
import styles from "../innerstyles.module.css";

export default function blog1() {
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
            src={require("@/assets/images/blogs/banner/blog1.jpg")}
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
                <p className={` ${styles.titlesub} `}> 08 Feb 2021 </p>

                <h2 className={` ${styles.titlemain} `}>
                  {" "}
                  Digital Transformation during Covid 19 Times
                </h2>
              </div>

              <p>
                {" "}
                The notion and application of Digital connectivity in the times
                of COVID-19 have made a massive shift. It is no longer about
                traditional communication and searching for information. It is
                more about appropriate use of data, consumption of vast amounts
                of content available on the internet, and engagement of
                individuals, governments, and businesses in digital applications
                to ensure continuity of economic and social activities amidst
                lockdowns imposed all over the world which has disrupted normal
                human activities, most importantly quality interpersonal
                interactions. The inclusion of digital technologies has brought
                fundamental transformations in almost all the sectors of the
                country, ranging from education, health, government services to
                financial private services.
              </p>
              <p>
                {" "}
                As the top Web and Mobile App Development Company in Jaipur,
                ALDS has developed various web applications and solutions during
                Covid 19.
              </p>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Education Sector</p>
              </div>
              <p>
                {" "}
                The transformation of higher education after the inception of
                Covid 19 is worth a watch. Digitalization of classrooms which
                involves online interaction of teachers and students, use of AI
                Technologies in studies and assessments of education systems,
                including use of real-time big data, dependence on web 2.0 tools
                and technologies for delivering knowledge to students, and
                creation of virtual reality are some of the features of
                transformed education system post-Covid 19.
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Health Sector </p>
              </div>
              <p>
                During the pandemic, one can witness many examples of digital
                health evolving. Companies like Apple and Google came together
                to build a contact- Tracing system for patients. AI-powered
                sensors are helping crowds to identify potentially contagious
                individuals. Robots are monitoring patients and taking over
                higher-risk care tasks such as providing supplies. Physicians
                are using patient-friendly digital tools for routine monitoring
                and diagnosis in multiple diseases. Data mining techniques have
                been employed in studying and assessing diseases of chronic
                nature like pulmonary hypertension. Patient-centric platforms
                have been created to improve the patient recovery journey.
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Financial Sector </p>
              </div>
              <p>
                {" "}
                Post-Covid 19, companies have changed the pattern of working.
                They are leveraging data to provide better customer experiences,
                whether it’s an online shopping site that uses technologies like
                artificial intelligence and machine learning or a retailer that
                uses a mobile app to offer customers contactless payment.
                Automation and machine learning can bring efficiencies in
                routine tasks, while other technologies like augmented reality
                can assist workers in ways not possible earlier. Fueled by the
                concepts like the Internet of Things and Industry 4.0,
                innovations like Digital Twins help companies manage real-time
                data to bring efficiency in operations and encourage innovations
                in the system.{" "}
              </p>
              <p>
                {" "}
                <strong>
                  {" "}
                  ALDS, one of the top Native mobile application development
                  companies, post-Covid 19 has designed solutions with the
                  following features:-{" "}
                </strong>
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  EFFECTIVE PERFORMANCE{" "}
                </p>
              </div>
              <p>
                {" "}
                The mobile app solutions offer an extremely high level of
                performance. Fast and responsive, the app is much more
                efficient. It is user compliant and when the user navigates
                through the mobile app, the contents and visual elements are
                already stored on their phone which means load times are quick.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>MORE SECURE </p>
              </div>
              <p>
                {" "}
                The mobile app provides a great way to guarantee your users
                reliable data protection.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> MORE INTERACTIVE </p>
              </div>
              <p>
                {" "}
                More smooth to use and its advantage amounts to superior user
                experience with a specific operating system. As a result, the
                flow of the app is more natural.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  ACCESS TO FULL FEATURE SET OF DEVICES{" "}
                </p>
              </div>
              <p>
                {" "}
                xDirect and easy access to the hardware of the device such as
                the GPS, camera, microphone, etc. so they are faster in
                execution, which ultimately results in a better user experience.
                Push notifications are an added advantage.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> FEWER BUGS </p>
              </div>
              <p>
                {" "}
                The Native apps have been built with the most recent features.
                Because of this, users have access to new platform features once
                they update the operating system, unlike hybrid app development,
                which amounts to a frustrating user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
