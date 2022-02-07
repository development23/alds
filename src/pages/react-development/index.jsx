
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Reactdev() { 
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
            src={require("@/assets/images/banner/react-development.jpg")}
            alt="Aladinn Tech React Development"
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
                 <h2> React Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            React (ReactJS) is a Facebook-backed open-source Javascript library used to build User Interfaces (UI), e.g., single-page or mobile applications. React is the most widely used front end library, and it has the following features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	One-Way Data Binding - </strong> React uses a unidirectional data flow, requiring the callback feature to edit components and prevent direct editing.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Declarative UI -  </strong> Declarative UI makes React code more human-readable and makes it easier to fix errors and bugs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Component-Based Architecture -  </strong> The UI of an app developed using React JS is composed of discrete JS components making React modular.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Virtual DOM - </strong> React keeps virtual DOM, i.e., representation of a UI, in memory and syncs it with the &#34;real&#34; DOM through a process called reconciliation.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS provides its clients full spectrum of ReactJS development services which include:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	React Custom Web Development - </strong> Our team develops custom app front-ends to deliver secure applications per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Web Application Development -</strong> Our team builds tailor-made progressive and dynamic web apps using ReactJS.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Interactive UI Development -  </strong> We employ React Library to make a rich and interactive UI to power your application across platforms.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance and Support - </strong> We also offer maintenance and support services for your running react applications.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            React has become the go-to front end solution because of the following benefits it offers:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Code reusability - </strong> React codebase can be easily ported to work across various platforms, thereby cutting cross-platform development costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Single Stack Language - </strong> React, when coupled with javascript backend frameworks like Next, Express offers full-stack single language web development reducing deployment time and costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Speedy Development Cycle - </strong> Availability of off-the-shelf plugins, tools, and modules through a strong community of developers makes React development blazingly fast.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Performance - </strong> React&#39;s features like virtual DOM and server-side rendering help make even large and complex web apps execute at a comparable speed to native apps.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose Aladdin Digital for your React projects?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of projects as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients fully informed about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified React team is competent and has years of experience in client-side development. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
