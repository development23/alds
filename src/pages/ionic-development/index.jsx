
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Ionicdev() { 
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
            src={require("@/assets/images/banner/ionic-development.jpg")}
            alt="Aladinn Tech Ionic Development"
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
                 <h2>Ionic Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Ionic app is one of the popular cross-platform app frameworks. Ionic developments focus on creating hybrid apps using HTML5 as the primary development language along with CSS and Sass. Ionic has the following key features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Standard Web - </strong> The Ionic platform is based on standard web technologies like HTML5</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Frontend Agnostic -  </strong> Ionic can be used with every frontend development framework like Angular, React, etc., and even can be used with vanilla Javascript.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-Platform -  </strong> Ionic allows the same codebase to develop both iOS and Android Apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	NPM - </strong> The Ionic uses the famous and straightforward Node Package Manager for initial setup.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers Ionic solutions through a team of skilled and certified developers for your following app needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Mobile App Development - </strong> We offer our clients bespoke and elegant mobile app solutions to suit their requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Development - </strong> We take care of the entire Play Store and App Store submission process, including listing, description, ASO.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration - </strong> We provide integration of Android and iOS services like Apple Pay, Google Pay, Voice Search, iCloud, CarPlay, Android Auto, and In-App Purchases.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance & Support  - </strong> We offer maintenance and support services in addition to our app development services and help you manage updates and new releases.  </li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Ionic provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Faster Development  - </strong> Code reusability reduces the time between conception and deployment.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Updates - </strong> Maintenance and updates of ionic apps can be done quickly and easily. Even hotfixes are deployed promptly without app store approvals.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Developer Friendly - </strong> Web developers can use Ionic to build standard web technologies to build cross-platform apps.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cost-effective  - </strong> The Ionic cuts development costs by using a single code base and standard web technologies.</li>
            </ul>
            
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Ionic Development?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	On-time Delivery - </strong> We have a consistent track record of delivering projects on time as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Skilled Technical Team - </strong> Our certified and experienced Ionic developers provide you with the best solutions to your business problems.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Creative Design Team - </strong> Our team of UI and graphic designers provide your app with intuitive and functional UX. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Technical Support - </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
