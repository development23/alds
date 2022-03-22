
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Flutterdevelopment() { 
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
            src={require("@/assets/images/banner/flutter-development.jpg")}
            alt="Aladinn Tech Flutter Development"
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
                 <h2>Flutter Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Flutter is an open-source development framework made by Google for building elegant, natively compiled, multi-platform apps. Flutter allows sharing of a single code base across platforms, and it has the following prominent features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Native and JS compiling - </strong> Flutter code compiles into native code for iOS and Android, while for web, it gets compiled into Javascript.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Hot Reload -  </strong> This option allows developers to view the impact of code change without restarting the app.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Simplified Initial Setup -  </strong> The flutter setup does not require complex dependencies and configurations.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Dart Language - </strong> All of the development work in the Flutter framework is done using Dart Language created by Google.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers Flutter solutions through a team of skilled and certified developers for your following app needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Mobile and Desktop Development - </strong> We offer our clients bespoke and elegant mobile app solutions to suit their needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Deployment -</strong> We take care of the entire Play Store and App Store submission process, including listing, description, ASO.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration -  </strong> We provide integration of Android and iOS services like Apple Pay, Google Pay, Siri, iCloud, CarPlay, Android Auto and In-App Purchases.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance & Support - </strong> We offer maintenance and support services in addition to our app development services and help you manage updates and new releases.  </li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Flutter provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Speed - </strong> Apps created by Flutter are fast and almost run at native speed.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-platform Support - </strong> Flutter offers cross-platform support for major platforms, i.e., iOS, Android, and Web.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Open Source and Active Community - </strong> Flutter is free and open-source with no fees or licensing costs and boasts broad community support.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Faster and cost-effective  - </strong> The flutter framework uses a single programming language which cuts development costs.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose ALDS for your Flutter Development?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We have a consistent track record of delivering projects on time as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients updated about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified and experienced Flutter developers provide you with the best solutions to your business problems</li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
