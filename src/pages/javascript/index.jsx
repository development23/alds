
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Javascriptdev() { 
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
            src={require("@/assets/images/banner/javascript-development.jpg")}
            alt="Aladinn Tech JavaScript Development"
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
                 <h2>JavaScript Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            JavaScript (JS) is a popular programming language used to build rich and dynamic websites, which powers 97 percent of worldwide websites. Key Javascript language features are:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Light Weight - </strong> It is a lightweight scripting language designed to run on the client-side.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Portable -  </strong> JavaScript applications can run on any platform or browser without any change.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Interpreted -  </strong> Javascript is processed just-in-time, line by line by inbuilt interpreters in browsers or by NodeJS.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Dynamically Typed - </strong> It implies that variables are defined based on the value stored at runtime.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers JavaScript solutions through a large pool of skilled and competent developers for your following project needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Full Stack Web Development - </strong> We employ popular Javascript frameworks and libraries such as React.js, Angular.js, Vue.js, Nest.js, and Express to build beautiful and engaging web apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	E-Commerce Solutions -</strong> We provide you with scalable and robust e-commerce applications which help you gain an edge over your competition.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	CMS -  </strong> Our outstanding and reliable CMS and server-side systems assist you in delivering easily scalable, efficient solutions.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Android/iOS/Windows App Development - </strong> Our developers use React Native, Ionic frameworks to make apps that run on Android and iOS mobile platforms.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why should you choose javascript for your next project?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2">	Javascript is the &#34;lingua franca&#34; of programming, with surveys showing that 70% of professional developers use it regularly.</li>
              <li className="text-gray-600 text-base mb-2">	Every single modern browser supports javascript and has a built-in javascript engine.</li>
              <li className="text-gray-600 text-base mb-2">	Javascript offers excellent community support and is the bedrock of cross-platform app development.</li>
              <li className="text-gray-600 text-base mb-2">	Javascript also beats other competing languages in terms of speed and performance.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose us for your projects?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of projects as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients best informed about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Excellent Skilled Team: </strong> Our certified and experienced Javascript team is competent and provides you with the best solutions to take care of unique business needs. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries before and after delivery.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
