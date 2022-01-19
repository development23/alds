import React from "react";
import Image from "next/image";
import Style from "./styles.module.css";
import Doctor from "../../../public/about/doctor.png";
import Patients from "../../../public/about/patients.png";
import Admin from "../../../public/about/admin.png";

export default function Productsfeatures() {
  return (
    <div>
      <div className="bg-gray-100 sm:py-20 md:py-20 lg:py-20 xl:py-20 sm:px-20 md:px-20 lg:px-20 xl:px-20 px-2 py-10">
        <div className="flex flex-wrap overflow-hidden">
          <div
            className="w-full overflow-hidden wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <h2
              className={`${Style.titleheading1} text-center md:text-4xl text-2xl mb-8 md:mb-16 font-extrabold`}
            >
              Our Telemedicine Panels
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden items-center">
          <div className="my-1 px-2 w-full  overflow-hidden">
            <div
              className="flex justify-start mb-10 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div>
                <Image
                  src={Doctor}
                  alt="Aladinn Health"
                  width={216}
                  height={216}
                  className={` ${Style.imgsize} `}
                />
              </div>
              <div
                className={`bg-white shadow-lg sm:px-8 md:px-8 lg:px-8 xl:px-8 px-2 py-4 rounded md:rounded-lg sm:ml-44 md:ml-44 lg:ml-44 xl:ml-44 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 ${Style.pabsolute}`}
              >
                <p className="text-blue-900  text-md md:text-4xl mb-2 font-extrabold">
                  Telemedicine Doctor Panel
                </p>
                <p className="text-gray-600  text-md md:text-lg pl-2 font-normal">
                  Doctor’s profile management, appointment scheduling, checking
                  medical history of patients,
                  <br />
                  managing appointments, digital prescriptions, and much more.
                </p>
              </div>
            </div>
            <div
              className="flex justify-end mb-10 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8 m-auto wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div>
                <Image
                  src={Patients}
                  alt="Aladinn Health"
                  width={216}
                  height={216}
                  className={` ${Style.imgsize} `}
                />
              </div>
              <div
                className={`bg-white shadow-lg rounded md:rounded-lg sm:px-8 md:px-8 lg:px-8 xl:px-8 px-2 py-4 sm:mr-44 md:mr-44 lg:mr-44 xl:mr-44 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 ${Style.pabsolute}`}
              >
                <p className="text-blue-900  text-md md:text-4xl  mb-2 font-extrabold">
                  Telemedicine Patients Panel
                </p>
                <p className="text-gray-600 text-md md:text-lg pl-2 font-normal">
                  Patient profile management, appointment booking, video
                  conferencing, payment gateway,
                  <br />
                  push notifications, geo-location, and other features.
                </p>
              </div>
            </div>
            <div
              className="flex justify-start mb-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div>
                <Image
                  src={Admin}
                  alt="Aladinn Health"
                  width={216}
                  height={216}
                  className={` ${Style.imgsize} `}
                />
              </div>
              <div
                className={`bg-white shadow-lg rounded md:rounded-lg sm:px-8 md:px-8 lg:px-8 xl:px-8 px-2 py-4 sm:ml-44 md:ml-44 lg:ml-44 xl:ml-44 sm:mt-14 md:mt-14 lg:mt-14 xl:mt-14 ${Style.pabsolute}`}
              >
                <p className="text-blue-900 text-md md:text-4xl mb-2 font-extrabold">
                  Telemedicine Admin Panel
                </p>
                <p className="text-gray-600 text-md md:text-lg pl-2 font-normal">
                  Doctor and Patient profile management, access to analytics,
                  notification management,
                  <br />
                  UI/ UX implementation, back-end infrastructure, and much more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
