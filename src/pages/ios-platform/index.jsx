
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Iosdev() { 
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
            src={require("@/assets/images/banner/ios-development.jpg")}
            alt="Aladinn Tech iOS Development"
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
                 <h2> iOS Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            iOS is number two in the market share of mobile operating systems and powers Apple&#39;s iPhone. Even though iOS&#39;s share is less than 30%, it takes a sizable chunk of revenues given its popularity in high-income countries. iOS platform offers below enumerated key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Consistent and straightforward - </strong> iOS offers a simple and remarkably consistent user interface across devices like iPhone, iPad and iPods.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Multitasking -  </strong> iOS enables devices to multitask, i.e. allows switching between apps instantly.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	iCloud -  </strong> Apple&#39;s iCloud service is tightly integrated with iOS and offers users secure cloud-based storage.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Store - </strong> It provides easy, reliable, and secure distribution of apps with Apple handling worldwide payment processing.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers robust iOS development solutions for your following needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Native and Cross-Platform iOS Development - </strong> We offer our clients bespoke iOS app solutions to suit their present and future needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Deployment -</strong> We take care of the entire App Store submission process, including listing, description, ASO.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration -  </strong> We provide integration of Apple services like Apple Pay, Siri, iCloud, CarPlay and In-App Purchases.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance & Support - </strong> We offer maintenance and support services in addition to our iOS development services, helping you manage updates and new releases.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why should you invest in developing apps for the iOS Platform?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Security - </strong> In addition to security capabilities like encryption, data protection in OS, Apple&#39;s devices have hardware security features.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Better App Revenue - </strong> Consumers spent around 73 billion USD in 2020 on subscriptions, in-app purchases and apps in the App Store.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Large Customer Base - </strong> iOS runs on more than 1.5 billion devices worldwide, with the majority in high-income countries like Japan and USA.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Low Fragmentation and Ease of Testing - </strong> iOS has very few device types, and these are regularly updated, reducing app deployment and testing costs. </li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose us for your iOS development needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of projects as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We communicate and inform clients about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Excellent Skilled Team: </strong> Our certified and experienced iOS developer team provides you with the best solutions to take care of unique business needs. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries before and after delivery.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
