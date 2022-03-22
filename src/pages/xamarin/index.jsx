
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Xamarindevelopment() { 
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
            src={require("@/assets/images/banner/xamarin-development.jpg")}
            alt="Aladinn Tech Xamarin Development"
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
                 <h2>Xamarin Development</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            Xamarin is an open-source, cross-platform development tool that uses .NET to create modern and efficient iOS, Android, and Windows apps. Xamarin serves as an abstraction layer that handles shared code communication with platform code, and it has the following features:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Complete Binding - </strong> Xamarin features bindings for virtually all underlying platform SDKs for iOS and Android. </li>
              <li className="text-gray-600 text-base mb-2"><strong>	Modern IDE -  </strong> Xamarin uses Visual Studio IDE that provides auto-completion, project template library, integrated source control, and more.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Xamarin Forms -  </strong> Xamarin provides an open-source mobile UI framework for building consistent UI across platforms.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Xamarin Essentials - </strong> Xamarin includes the Essentials library that provides cross-platform APIs for native device features.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers Xamarin solutions through a team of skilled and competent developers for your following needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Mobile and Desktop Development - </strong> We offer our clients custom future proof mobile app solutions to suit their needs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	App Deployment -</strong> We take care of the entire Play Store and App Store submission process, including listing, description, ASO.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Integration -  </strong> We provide integration of Android and iOS services like Apple Pay, Google Pay, Siri, iCloud, CarPlay, Android Auto and In-App Purchases.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Maintenance & Support - </strong> We offer maintenance and support services in addition to our app development services and help you manage updates and new releases.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Xamarin provides the following advantages for your app development:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Cross-platform Support - </strong> Xamarin offers cross-platform support for major platforms, i.e., iOS, Android, and Windows.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Free and Open Source - </strong> Xamarin is free and open-source with no fees or licensing costs.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Active community - </strong> Xamarin has a strong community of contributors from more than 3,700 companies and individual contributors.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Faster and cost-effective  - </strong> Xamarin framework uses a single technological stack and code-sharing, allowing speedier deployment on low budgets.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Why choose us for your Xamarin Development?
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong> On-time Delivery: </strong> We consistently deliver projects on time as per client requirements.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Transparency: </strong> We keep our clients updated about every aspect, including status and resources deployed, making the whole process transparent. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified and experienced Xamarin developers are competent and provide you with the best solutions to take care of unique business needs. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Technical Support: </strong> Our support team promptly provides you with all the answers to your technical queries before and after delivery.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
