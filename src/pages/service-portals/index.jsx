
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Serviceportal() { 
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
            src={require("@/assets/images/banner/service-portals.jpg")}
            alt="Aladinn Tech Service Portals"
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
                 <h2>Service Portals</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            A service portal or self-service portal is a web-based platform that lets users seek information, send requests, schedule services, and resolve issues. The most common service portals are Customer self-service portals, employee self-service portals, and government service portals. Service Portals have the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Knowledge Base - </strong> Self-service portals allow users to access information from a collection of FAQs, articles, videos, diagrams, how-to guides, and more.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Password Reset -  </strong> Self-service portals also allow customers to reset their service access passwords.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Service Requests -  </strong> Service portals allow users to request, cancel, re-activate services; place, track or cancel orders; request a replacement, make appointments, and more.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Community Forums - </strong> Collaborative forums enable customers to share their knowledge and provide helpful tips regarding services and products.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers solutions for your following Service Portals needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Service Portals - </strong> We design and develop custom solutions with advanced features like AI-powered bots, dashboards, etc., that suit your organization&#39;s needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Turnkey Service Portals - </strong> Our deployment team assists you in setup and deploying our Turnkey Service Portal solution in a matter of a few clicks.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Service Portals Integration - </strong> Our development team allows you to integrate our Service Portals solution into your organization-specific system or other third-party tools.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance and Upgrade - </strong> We keep your Service Portals up and running at peak loads and eliminate downtimes. We also offer continuing updates and upgrades for your Service Portal solution.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Service Portals applications provide the following advantages to your organization:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Productivity - </strong> Service Portals provide solutions to the majority of repetitive and routine queries, allowing your support employees to focus on complex queries and problems, leading to higher staff productivity and satisfaction.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Data generation - </strong> Service Portals allow providers to log consumer data, gain insights into their behavior, and modify your product and services. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Decreased Overheads  - </strong> As Service Portals reduce common queries to support agents through the use of Knowledge Base, forums, etc., allowing organizations to cut or rationalize staff.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	24x7 Availability - </strong> Service Portals help customers even at odd hours or on holidays allowing customers to access info anytime.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Service Portals needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Data security : </strong> Our experts know that data security and integrity are the top priority of every organization. We provide your organization&#39;s portal with world-class security and safeguards.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Skilled Team : </strong> Our seasoned and well-experienced team offers you the best and most customizable Service Portals solutions with an intuitive User Experience.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Affordable & Time-saving : </strong> We allow your organization to save time and money with our Turnkey Service Portal solution that is quick to deploy and cost-effective.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	24x7 Technical Support : </strong> Our Service Portal support team promptly provides you with all the answers to employee queries and guides them to address all technical issues.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
