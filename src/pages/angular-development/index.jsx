
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Angulardev() { 
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
            src={require("@/assets/images/banner/angular-development.jpg")}
            alt="Aladinn Tech angular-development"
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
                 <h2> Angular Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Angular is a Google-funded front-end framework for building scalable and highly dynamic single-page client applications using HTML and TypeScript. Angular is one of the most widely used and has the following features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Two-Way Data Binding - </strong> Angular allows the View layer to represent the Model layer exactly, staying in perfect synchronization.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	MVC Architecture -  </strong> Angular separates code into three components, allowing painless and faster development. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-Platform -  </strong> Angular can be used to develop web apps, progressive web applications (PWA), or native apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Free and Open Source - </strong> Angular is open-source and free and does not require any license fees for its use.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS helps you accomplish business objectives by providing you with a vast array of Angular development services, including:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Frontend Development - </strong> We provide a fully customized app front-end coupled with server-side frameworks like Laravel, Nest.js, Express, and Node.js.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-Platform App Development - </strong> We leverage Angular to develop rich and highly dynamic client-facing UI to power your apps.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Development with Angular provides organizations with a wide range of fundamental advantages like:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Performance and speed - </strong> Web apps made with Angular deliver an app-like experience with reduced bandwidth consumption.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Quality - </strong> Angular uses a strongly typed superscript of javascript, which reduces the number of bugs and makes code more readable and easier to maintain.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Vast Community Support - </strong> With the backing of Google and the community, Angular provides extensive tools, libraries, support, and technical documentation.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Modularity - </strong> Angular is modular and hence provides a mechanism of dividing code into reusable chunks which are easy to understand, replace and maintain.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Angular projects?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of projects as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients fully informed about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified Angular team is competent and has years of experience in front-end development.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
