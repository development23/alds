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
            src={require("@/assets/images/blogs/banner/blog5.jpg")}
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
                  Telemedicine Solutions By Gridstem
                </h2>
              </div>

              <p>
                Want to have an access to expert doctors online? The
                Telemedicine platform by Gridstem can provide you with effective
                services.
              </p>

              <p>
                In general, Telemedicine makes efficient use of electronic
                communications and software to provide clinical services to
                patients without an in-person visit. Telemedicine technology is
                frequently used for follow-up visits, management of chronic
                conditions, diagnosis management, specialist consultation and
                many other clinical services that can be provided remotely
                through secured video and audio communication.
              </p>

              <p>
                Powered by the latest and most robust technologies, Telemedicine
                by Gridstem includes a broad range of features like HD
                Audio/Video consultation sessions, Digital Prescriptions,
                Patient medical Reports, integration withsoftwares like CRM,
                ERP, HIS, etc.,thorough post-sale services and more to provide
                hassle free patient care and improve the online healthcare
                delivery system.
              </p>
            </div>

            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <p className="mt-6">
                <strong>Reasons for adopting Telemedicine: </strong>
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Increased efficiency </p>
              </div>
              <p>
                Electronic data storage, remote analysis & monitoring services
                and simplification of complex operations increase efficiency and
                significantly reduce healthcare service costs.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Reduces Monopoly </p>
              </div>
              <p>
                - It is the best answer to the competitive threat of retail
                health clinics as there is provision for online Healthcare.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Easy Solutions</p>
              </div>
              <p>
                Electronic data storage, remote analysis & monitoring services
                and simplification of complex operations increase efficiency and
                significantly reduce healthcare service costs.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>Cost Effective </p>
              </div>
              <p>
                It is the best answer to the competitive threat of retail health
                clinics as there is provision for online Healthcare.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Outcome Oriented </p>
              </div>
              <p>
                Better patient follow through, improved health outcomes, fewer
                missed appointments and cancellations.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Cost effective </p>
              </div>
              <p>
                For patients, healthcare is available at a fingertip which
                reduces their travel expenses. Doctors are available throughout
                the day which makes less time away from work.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> No exposure </p>
              </div>
              <p>to other potentially contagious patients</p>

              <p className="mt-6">
                <strong>Features of Telemedicine Platform </strong>
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  HD Video Consultation{" "}
                </p>
              </div>
              <p>
                Permits to carry out a personalized, exclusive and confidential
                monitoring of the patients condition in the same way as when the
                patient attends the in-person consultation.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Appointment Scheduling{" "}
                </p>
              </div>
              <p>
                Allows for the booking and management of appointments with
                Doctors.
              </p>
              <p>
                {" "}
                <strong>Features </strong>{" "}
              </p>
              <ul className="list-disc pl-5">
                <li> Online availability, 24/7 </li>
                <li> Can be integrated with CRM system </li>
                <li>
                  {" "}
                  Ability to monitor the booking statistics via Admin Panel{" "}
                </li>
                <li> Doctors’ schedule management via Admin Panel </li>
                <li>
                  {" "}
                  In-app push notifications and SMS for Doctors and Patients
                </li>
              </ul>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Electronic Health Records{" "}
                </p>
              </div>
              <p>
                Includes systematized collection ofpatients’ electronically
                stored health information likemedical history, medication and
                allergies, laboratory test results, personal statistics like
                age, sex,weight and vitals.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Generation of E-Prescriptions{" "}
                </p>
              </div>
              <p>
                An Electronic or Digital Prescription can be generated by
                Doctors directly on the Telemedicine software, web or mobile
                app, which is then immediately received by the patient.
              </p>
              <p>
                {" "}
                <strong> Benefits </strong>
              </p>
              <ul className="list-disc pl-5">
                <li> Reduction in prescribing and dispensing errors</li>
                <li> Decrease the work needed to execute a prescription</li>
                <li> Creation of a reliable digital record of prescriptions</li>
                <li>
                  {" "}
                  Improve medication compliance by reducing lost prescriptions.
                </li>
              </ul>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Secured Online Payments{" "}
                </p>
              </div>
              <p>
                A highly secure, efficient and widely used Payment Gateway
                system collects payments after appointment booking by the
                patient.
              </p>

              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Cloud-based e-record storage{" "}
                </p>
              </div>
              <p>
                When patients have established their accounts, they get storage
                of e-Medical records that contain their information, including
                medical data and history of communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
