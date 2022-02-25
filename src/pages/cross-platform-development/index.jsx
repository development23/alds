
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Crossplatform() { 
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
            src={require("@/assets/images/banner/cross-platform-development.jpg")}
            alt="Aladinn Tech Cross Platform Development"
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
                 <h2>Cross-Platform Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Cross-platform mobile development produces apps with a truly native look and feel on any platform and are made from a single codebase. Cross-platform apps fall somewhere in between Native and Cross-Platform apps have benefits similar to Cross-Platform but with the same UI as Native. Key features of Cross-Platform Development include:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Native UI - </strong> The Cross-Platform Apps offer the look and feel of Native Apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Performance -  </strong> Cross-Platform Apps provide application performance similar to that of Native Apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Multi-Platform -  </strong> Cross-Platform Apps run on multi-platforms using a single codebase.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Code Reusability - </strong> Cross-Platform Apps development allows reuse of most of the codebase.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers Cross-Platform app solutions for your following needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	App Design - </strong> Our design experts create intuitive interfaces to engage users and improve app usability.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Development - </strong> We create rich, dynamic, and responsive Cross Platform apps using the agile approach.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Integration - </strong> We integrate advanced features like payments, in-app purchases, etc., into your existing apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Maintenance - </strong> We analyze and maintain your apps to optimize app performance and reduce downtimes.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Cross-Platform Apps provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Rapid Development - </strong> Code reusability reduces the time to deployment of Cross-Platform Apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Multi-Platform Support - </strong> Cross-Platform Apps offer multi-platform support for major mobile OS, like iOS and Android.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cost-effective - </strong> The Cross-Platform Apps use a single codebase across platforms cutting development costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Ease of Maintenance - </strong> As Cross-Platform Apps share a single codebase across platforms, they are easier to maintain.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Cross-Platform Development?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Seasoned Team - </strong> Our certified and experienced Cross-Platform App developers provide you with the best solutions to your business problems.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cutting Edge Technologies - </strong> We employ best practices and innovative technologies to create Cross-Platform apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Customer satisfaction - </strong> We focus on the customer requirements and expectations for providing total customer satisfaction.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	On-time Delivery - </strong> We have a consistent track record of delivering projects on time as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Transparency - </strong> We keep our clients updated about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Technical Support - </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
