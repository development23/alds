
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Androiddevelopment() { 
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
            src={require("@/assets/images/banner/android-development.jpg")}
            alt="Aladinn Tech Android Development"
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
                 <h2> Android Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Android is the number one mobile operating system and powers 70% of new devices worldwide. Given the broad reach of the Android Platform, it is the preferred choice for app development, and it has the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Free and Open Source - </strong> Android is open-source, allowing developers greater access to hardware, components, and file systems.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Multitasking -  </strong> Android enables users to multitask, i.e. switching between apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Accessibility -  </strong> Android offers more inclusiveness and greater accessibility to its app distribution platform.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Play Store - </strong> It provides easy, reliable, and secure distribution of apps with Google Play managing payment processing.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers custom Android development solutions for your following needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Native and Cross-Platform Android Development - </strong> We offer our clients bespoke Android app solutions to suit their present and future needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Deployment -</strong> We take care of the entire Play Store submission process, including listing, description, and ASO.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration -  </strong> We integrate the Google services like Google Pay, Google Assistant, Android Auto and In-App Purchases.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance & Support - </strong> We offer maintenance and support services in addition to our Android development services, helping you manage updates and new releases.  </li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why should you develop apps for the Android Platform? 
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Cost-Effective - </strong> Google provides easy access to Android Platform development tools to developers like Android Studio, SDK etc., and less expensive devices and hardware.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Customisation - </strong> Android being open source offers developers more access to system internals and best customisation features.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Large Customer Base - </strong> Android runs on more than 3 billion devices worldwide, providing broader markets.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Stability and Security - </strong> Android runs on a custom Linux kernel, inheriting its secure and stable code.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose us for your Android development needs?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of on-time delivery of android apps as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients best informed about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified and experienced Android developer team provides you with the best solutions to take care of unique business needs. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries before and after app deployment.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
