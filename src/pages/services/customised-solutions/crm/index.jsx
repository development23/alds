
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Eductionsector() { 
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
            src={require("@/assets/images/banner/crm.jpg")}
            alt="Aladinn Tech CRM"
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
                 <h2>Customer relationship management (CRM)</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            CRM is a tool to manage all of a company&#39;s customers and potential customer relationships and interactions. The goal is to improve business interactions and learn customers&#39; behavior and buying traits. CRM aids companies in maintaining contact with customers, streamlining processes, and thereby maximizing revenue. CRM has the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Reporting and Dashboards - </strong> Executives can view engaging statistics in a rich and visual presentation using customized dashboards and reports, thereby gaining business insights.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Lead Management -  </strong> LM enables a company to identify the best clients to follow up with based on demographic and psychographic criteria.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Sales Analytics -  </strong> Employees analyze using AI and use logged past campaign data to create better sales campaigns in the future.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Contact Management - </strong> Contact management allows users to categorize contacts into groups to organize and better care of them.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers custom solutions for your following CRM needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom CRM Development - </strong> We design CRM solutions with advanced features that provide complete operations automation and analytics.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	CRM Module Development - </strong> Our experienced CRM software developers have proven competence at designing, developing, and integrating discrete CRM modules.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	CRM System Integration - </strong> Our skilled CRM experts are competent at integrating our CRM application into your company-specific systems or other third-party tools.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance and Upgrade - </strong> We keep your CRM running at peak loads and eliminate downtimes. We offer continuing updates and upgrades for your custom CRM software.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            CRM applications provide the following advantages to your organization:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Automation - </strong> CRM provides automation across processes, like reducing the time it takes to respond to customer queries, handling basic queries using bots, analyzing leads using AI, etc., leading to higher productivity.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Collaboration - </strong> CRM platforms provide collaboration tools that allow multiple employees to work on data simultaneously, which speeds up internal communication.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Better customer service - </strong> CRM ensures that your employees have every customer record at their fingertips and can serve customers better and provide a better experience.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Increased sales - </strong> CRM apps help your company streamline the sales process, create a sales pipeline, automate tasks and quickly analyze sales data, thereby increasing sales.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your CRM needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Well-Established Team : </strong> Our seasoned and well-established team offers you the best custom and turnkey CRM solutions for your business.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	On-time Delivery : </strong> We have a history of consistent on-time development and deployment of CRM solutions as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Data security : </strong> Our experts know that data security and integrity are the cornerstone of every CRM and provide you with defense-grade security and encryption. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	24x7 Technical Support : </strong> Our CRM support team promptly provides you with all the answers to employee queries and guides them to address all technical issues.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
