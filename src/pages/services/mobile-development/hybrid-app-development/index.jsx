
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
            src={require("@/assets/images/banner/hybrid-app-development.jpg")}
            alt="Aladinn Tech Hybrid App Development"
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
                 <h2>Hybrid App Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Hybrid mobile apps are apps that combine features of both web apps and native apps. Hybrid Apps work like and share code with Web Apps but are downloaded on mobile devices like Native Apps. Hybrid Apps have the following features which distinguish them from native and web apps:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Work Offline - </strong> The Hybrid Apps can function even when the device is disconnected from the internet.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration -  </strong> Hybrid Apps are integrated with the mobile device&#39;s file system and server-based services. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Multi-Platform -  </strong> Hybrid Apps run on every capable platform using the same codebase without massive modifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Browser Dependency - </strong> Hybrid Apps depend on browsers&#39; performance as they are just web apps running in native app shells.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers Hybrid app solutions for your following app needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	App Design - </strong> Our design experts create intuitive interfaces to engage users and improve app usability.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Development - </strong> We create rich, dynamic, and responsive hybrid apps using an agile approach.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Integration - </strong> We integrate advanced features like payments, in-app purchases, etc., into your existing apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Maintenance - </strong> We analyze and maintain your apps to optimize app performance and reduce downtimes.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Hybrid Apps provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Rapid Development - </strong> Code reusability reduces the time to deployment of Cross-Platform Apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-platform Support  - </strong> Hybrid Apps offer cross-platform support for major platforms, like iOS, Android, and Desktop.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cost-effective - </strong> The Hybrid Apps use a single codebase across platforms cutting development costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Ease of Maintenance - </strong> As Cross-Platform Apps share a single codebase across platforms, they are easier to maintain.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Hybrid Apps provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Rapid Development - </strong> Code reusability reduces the time gap between conception and deployment across platforms.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-platform Support - </strong> Hybrid Apps offer cross-platform support for major platforms, like iOS, Android, and Desktop.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cost-effective - </strong> The Hybrid Apps use a single codebase across platforms cutting development costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Updates - </strong> As the core app resides on the server, the app code can be updated without changing the client-side code.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Hybrid Development?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	On-time Delivery - </strong> We have a consistent track record of delivering projects on time as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cutting Edge Technologies - </strong> We employ best practices and the latest and innovative technologies to create hybrid apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Customer satisfaction - </strong> We focus on the customer requirements and expectations for providing total customer satisfaction.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Transparency - </strong> We keep our clients updated about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Seasoned Team - </strong> Our certified and experienced Hybrid App developers provide you with the best solutions to your business problems.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Technical Support - </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
