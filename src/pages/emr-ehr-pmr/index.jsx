
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Emrehr() { 
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
            src={require("@/assets/images/banner/emr-ehr-pmr.jpg")}
            alt="Aladinn Tech EMR/EHR/PMR"
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
                 <h2>EMR/EHR/PMR</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Electronic Medical Records (EMR) and Electronic Health Records (EHR) are digital patient data used by healthcare providers to improve patient outcomes, quality of care and reduce costs. While EMRs are kept for internal organizational systems, EHRs are, on the other hand, kept for inter-organizational systems, and they contain data from multiple health providers. The concept of an online system known as Personal Health Records (PHR) has come up to allow patients to self-manage medical records.
            </p> 
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Electronic Health Records have the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Patient Data - </strong> EHRs contain patients&#39; medical history, diagnoses, allergies, medications, treatment plans, immunization dates, radiology images, radiology, and laboratory test results.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Workflow Improvement -  </strong> EHRs automate and streamline providers&#39; workflow removing bottlenecks reducing idle time and cost.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Report Generation -  </strong> EHRs allow providers to access digital data and generate detailed reports that provide useful insights for decision making.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Data-Driven - </strong> EHRs allow access to AI-based models and tools that providers can use to make patient care decisions.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers solutions for your following Electronic Health Records needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Electronic Health Records System - </strong> We design and develop custom EHR solutions with advanced features, dashboards, visualization tools, etc., that suit your organization&#39;s needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Turnkey Electronic Health Records System - </strong> Our deployment team assists you in setting up and deploying our Turnkey Electronic Health Record solution in a matter of a few clicks.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Electronic Health Records Integration - </strong> Our development team allows you to integrate our Electronic Health Records solution into your organization-specific system or other third-party tools.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance and Upgrade - </strong> We keep your Electronic Health Records system up and running at peak loads and eliminate downtimes. We also offer continuing updates and upgrades for your Electronic Health Record solution.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Electronic Health Records applications provide the following advantages to your organization:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Instantaneous Retrieval - </strong> EHRs provide 24x7, instantaneous information retrieval of patients&#39; data, which is correct, up-to-date, and full; which improves patient outcomes and saves precious time for doctors.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Data Generation and Sharing - </strong> EHRs allow for quick sharing of patient information with doctors, multiple health providers, and patients, as well as logging other relevant data for better planning of resources by providers.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Improved Compliance  - </strong> EHRs facilitate better legal and regulatory compliance in terms of improved data security and superior patient confidentiality through access control.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Decreased Overheads - </strong> EHRs reduce costs associated with supplies, time, and effort needed to maintain paper files, transcription costs, and the costs relating to the physical retrieval of charts.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Electronic Health Records needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Data security : </strong> Our company ensures that our EHRs solutions comply with the strict laws and regulations that ensure clinical information privacy.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Skilled Team : </strong> Our seasoned and well-experienced team offers you the best and most customizable EHR solutions with an intuitive User Experience.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Affordable & Time-saving : </strong> We allow your organization to save time and money with our Turnkey EHR solution that is quick to deploy and cost-effective.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	24x7 Technical Support : </strong> Our EHR support team promptly provides you with all the answers to employee queries and guides them to address all technical issues.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
