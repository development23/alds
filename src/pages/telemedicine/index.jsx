
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Telemedicine() { 
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
            src={require("@/assets/images/banner/telemedicine.jpg")}
            alt="Aladinn Tech Telemedicine"
          /> 
        </div>
      </div> 

      <div className={` ${styles.mtsin} relative bg-white `}>
         <div className={`md:px-28 mt-20  md:mt-0 md:pt-10 md:pb-20 ${styles.bggrayimg}`}>
            <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
               <div className="w-full text-center pl-2  overflow-hidden">
                 <Image
                    src={require("@/assets/images/bg/pat1.png")}
                    alt="Aladinn Tech"
                  />
                 <h2>Telemedicine</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Telemedicine uses telecommunications technology that allows health care professionals to evaluate, diagnose and treat patients at a distance. Although it has existed for decades, it has gone mainstream due to the Covid-19 pandemic and has become an increasingly important tool for the healthcare industry. Telemedicine has the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Video Conferencing - </strong> Telemedicine systems enable video and audio conferencing to allow practitioners to diagnose patients using visual and audio clues in addition to symptoms disclosed.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Document Generation -  </strong> Telemedicine systems allow for automating the generation and storage of logs, records, and transcripts of the patient-physician interaction.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Remote Scheduling and Appointments -  </strong> Telemedicine systems provide online appointments, scheduling, and payment of fees.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Patient History Management and Analysis - </strong> Telemedicine systems also manage their historical data helping physicians to make a better diagnosis.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers solutions for your following Telemedicine needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Telemedicine Solutions - </strong> We design and develop custom Telemedicine solutions with advanced features that provide complete automation and analytics.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Turnkey Telemedicine Solutions - </strong> Our deployment team assists you in setup and deploying our turnkey Telemedicine solutions in a matter of a few clicks.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Telemedicine Integration - </strong> Our development team allows you to integrate our telemedicine solution into your hospital-specific system or other third-party tools.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance and Upgrade - </strong> We keep your Telemedicine up and running at peak loads and eliminate downtimes. We also offer continuing updates and upgrades for your Telemedicine solution.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Telemedicine applications provide the following advantages to your clinic/hospital:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Productivity - </strong> Telemedicine provides automation across processes from appointment booking, scheduling, handling basic queries using bots, payments, etc., leading to higher staff productivity.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Increased Revenues - </strong> Telemedicine allows providers to operate remotely beyond their physical service areas and provide super specialty consultations to unserved areas like rural neighborhoods.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Decreased Overheads - </strong> Telemedicine reduces administrative overheads by allowing providers to cut and rationalize staff due to automation of processes like booking, scheduling, support, payments, etc.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Scheduling Flexibility - </strong> Telemedicine software can be used anytime and anywhere, allowing providers the option of offering service at odd hours or on holidays without even being open physically.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Telemedicine needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Data security : </strong> Our experts know that data security and integrity are the cornerstones of every Telemedicine solution. We provide you with impeccable security and safeguards. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Skilled Team : </strong> Our seasoned and experienced team offers you the best and most customizable Telemedicine solutions.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Affordable & Time-saving : </strong> We allow you to save time and money with turnkey telemedicine solutions that are affordable.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	24x7 Technical Support : </strong> Our CRM support team promptly provides you with all the answers to employee queries and guides them to address all technical issues.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
