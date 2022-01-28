
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
            src={require("@/assets/images/banner/web-app.jpg")}
            alt="Aladinn Tech Web App"
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
                 <h2> Web App</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            A web application (or web app) is application software that operates on a web server, e.g., webmail, online banking, shopping websites, and the like. A web app has the following features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> Client-Server Architecture - </strong> Web apps run on client-server architecture, distributing the workload between client and server.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Connectivity -  </strong> Web Apps require an active internet connection to work correctly and synchronize states between client and server.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Responsive -  </strong> Web apps need to be responsive to adapt to various devices, viewport sizes, orientations.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Centralization - </strong> Web apps allow for centralizing resources from storage to processing, which suits enterprise needs.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Our team employs various stacks to provide the following solutions, among others, for your business: 
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> Custom Web App Development - </strong> We use the best-suited technologies to build rich and engaging frontends, and high-performance back ends of your web applications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> E-Commerce Solutions -</strong> We provide you with scalable and robust e-commerce web applications which help you gain and retain an edge over your competition.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Content Management System -  </strong> Our unique and reliable CMS systems assist you in delivering easily scalable, quick, and efficient solutions.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Support and Maintenance - </strong> Our team helps you modify, update, upgrade and maintain your web application for the high availability of your application.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Web apps are way better than traditional apps in the following ways:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-Platform Support: </strong> Web apps are compatible across a myriad of platforms and devices.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Always Up-to-Date: </strong> Web apps are always running the latest version on the server, and no updates are needed on the client-side.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Security: </strong> Web apps store data on servers residing on server farms that are secured physically and through software.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Accessibility: </strong> Web apps are device-independent and can be accessed from anywhere on any device.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Web apps projects?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of web apps as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients fully informed about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified Web Apps team is competent and has years of experience in frontend development. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
