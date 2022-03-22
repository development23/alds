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
            src={require("@/assets/images/blogs/banner/blog3.jpg")}
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
                  React Native of ALDS
                </h2>
              </div>

              <p>
                React Native of ALDS was launched with the aim of making app
                development process smoother than ever. The framework being an
                open-source platform presents the React Native app developers
                with an all-time access to a super large community of the React
                world. Besides, there are some enhancement aspects which need to
                be emphasized upon:
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  <strong> React Native fabric </strong> :{" "}
                  <span className="normal-case">
                    {" "}
                    This is a re-designed architecture user interface layer.{" "}
                  </span>
                </p>
              </div>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  <strong> Lean Core </strong>:{" "}
                  <span className="normal-case">
                    {" "}
                    It assists in reducing the size of the mobile app.
                  </span>
                </p>
              </div>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  <strong> Turbo Modules </strong>:{" "}
                  <span className="normal-case">
                    {" "}
                    It is used to enhance the handling of other native modules.
                  </span>
                </p>
              </div>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <p>
                <strong>Some Facts about React Native</strong>
              </p>

              <ul className="list-disc px-4">
                <li>
                  {" "}
                  Mobile app development with React Native is done by using the
                  same fundamental blocks. These UI blocks are the same for both
                  Android and iOS apps.
                </li>{" "}
                <li>
                  {" "}
                  The widgets in React Native are analogous to the ones in
                  Flutter.
                </li>{" "}
                <li>
                  {" "}
                  Apps in react native look exactly same in both iOS and
                  android.
                </li>{" "}
                <li>
                  {" "}
                  The core logic of the react native can be shared between
                  mobile app, web app and desktop app.
                </li>
              </ul>

              <p className="mt-6">
                <strong>Why React Native? </strong>
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Ensures Stability </p>
              </div>
              <p>
                The realm of mobile app development is highly dynamic and
                unstable. One of the greatest benefits of using React Native is
                that it ensures a stable growth. This is because the components
                of the framework know how to display an app on a popular
                platform.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Faster and Efficient </p>
              </div>
              <p>
                React Native have a set of pre-developed components. It’s
                open-source library, written in Java Script, which makes it
                easier for developers to write codes in advance and enabling
                them to use these pre-written codes as and when required.{" "}
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Easy Solutions</p>
              </div>
              <p>
                React Native has a myriad of ready-made solutions that help in
                enhancing the mobile app development process. As for instance,
                the framework has a testing library that enables the developers
                to write bug-free code. Flawless coding helps in enhancing the
                credibility of the end product.{" "}
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Cost Effective </p>
              </div>
              <p>
                There are multiple ways how it makes headway to tons of savings
                for startups. From reusable codebase to minimizing the need to
                hire React Native programmers, this mobile development solution
                is a sign to seek.{" "}
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Flexible </p>
              </div>
              <p>
                React Native features cross-platform apps which can function on
                different operating systems like android, iOS etc. And they are
                easily accessible across various devices.{" "}
              </p>

              <p className="mt-6">
                <strong>
                  ALDS offers React Native solutions through a team of skilled
                  and certified developers for your app requirements which has
                  some unique features:
                </strong>
              </p>
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Faster development with high code-sharing capabilities{" "}
                </p>
              </div>
              <p>
                Our React Native Developers are proficient in hybrid app
                designing. Based on our clients’ requirements, we build a
                feature-rich cross-platform app in shortest time possible.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Increased Developer Velocity{" "}
                </p>
              </div>
              <p>
                We do not wait for app recompilation every time our client makes
                a change in the requirement. Hot reloading makes code upgrade
                much faster than other frameworks.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Benefit to Social Media{" "}
                </p>
              </div>
              <p>
                Indigenous development of the social media giant witnessed
                significant improvements in our designed mobile apps. The app
                runs faster, its content loads quickly and users enjoy using the
                app with its near-native UI animations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
