
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
            src={require("@/assets/images/banner/laravel.jpg")}
            alt="Aladinn Tech Laravel"
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
                 <h2> Laravel</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Laravel is a back-end web framework written in PHP. Laravel, based on Symphony, is designed to make web applications faster and boasts hosts of features like:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	MVC Architecture - </strong> Laravel separates code into three components allowing faster server-side development, which is also easy to maintain.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Open-Source and Free -  </strong> Laravel is open-source and free and does not require any license fees for its use.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Practical Object–Relational Mapping -  </strong> Laravel&#39;s inbuilt ORM enables the developers to query the database without writing any SQL code.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Migration System - </strong> Laravel provides migrations that act like version control of the database allowing quick changes and rollbacks.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS provides the following solutions, which are built upon Laravel back-end framework:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Backend Development - </strong> Our technically qualified programmers provide you with custom solutions running on Laravel on the back-end.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	API Development - </strong> Our team has years of experience delivering custom Laravel REST API solutions suitable for your enterprise needs.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            These benefits make Laravel the most popular among the PHP frameworks:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Feature Packed - </strong> Laravel has tons of inbuilt features and provides out-of-the-box templating, authentication, and automated testing support using PHPUnit.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Free and Open Source - </strong> Laravel is open source and freely customizable, providing a foundation for need-based custom development.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Broad community Support - </strong> Laravel is one of the most active frameworks backed by thousands of contributors due to its immense popularity among developers.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Security - </strong> Laravel is a secure platform that secures web applications from the most common security risks such as SQL injection, CSRF, and XSS.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Choosing ALDS for your Laravel projects will offer you the following benefits:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a history of on-time project delivery as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients fully informed about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified Laravel team is competent and has years of experience in back-end development.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
