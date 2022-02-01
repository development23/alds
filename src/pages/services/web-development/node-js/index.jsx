
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
            src={require("@/assets/images/banner/node-js.jpg")}
            alt="Aladinn Tech Node JS Development"
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
                 <h2> Node JS Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Node.js is a cross-platform server-side JavaScript runtime environment that employs Google&#39;s V8 engine to execute JavaScript code outside of a web client. Node.js promotes a &#34;JavaScript everywhere&#34; philosophy and has the following features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Platform Independent - </strong> NodeJS projects are platform-independent and easily portable to other platforms.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	OpenSource -  </strong> NodeJS is Free and Open-Source, and there are no proprietary ecosystem costs and lock-ins.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Asynchronous and Event-Driven -  </strong> All of the APIs of the Node.js library are non-blocking and event-driven for snappy performance.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Single-threaded and Highly Scalable - </strong> Node.js uses a single-threaded architecture with event looping, making it very fast and scalable.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ADLS proudly provides you with the following Nodejs solutions and services:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Custom Backend Development - </strong> Our technically well-heeled programmers provide you with custom solutions running on Nodejs employing frameworks like Express and Nest.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Android/iOS/Windows App Development -</strong> We provide cross-platform app development using React Native, Ionic, and Flutter to provide you with a client-facing application UI for your Nodejs backend application.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	E-Commerce Solutions -  </strong> We provide you with scalable and robust e-commerce applications which help you build and retain a loyal customer base and gain an edge over your competition.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	API Development - </strong> Our team has years of experience in delivering custom REST API solutions for your enterprise needs.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Using Node.js for your server-side needs gives you the following benefits and advantages.
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Scalability - </strong> Node.js helps you scale vertically, adding new capabilities to your core application and scale horizontally, adding new resources to existing infrastructure.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Performance - </strong> Its input-output operations are non-blocking, making Node.js one of the quickest server-side technologies available.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Single programming language - </strong> Node uses javascript and easily ties up with the rest of the full-stack development. It speeds up the development process.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Fast-to-market - </strong> Node.js has an extensive package management library that includes predesigned tools and templates and helps reduce your time to market and cut your budget as well.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose us for your Node.js projects?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of projects as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients fully informed about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified Node.js team is competent and has years of experience in server-side development. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
