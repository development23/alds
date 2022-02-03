
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
            src={require("@/assets/images/banner/website-ui-ux.jpg")}
            alt="Aladinn Tech Website User Interface (UI) / User Experience (UX)"
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
                 <h2>Website User Interface (UI) / User Experience (UX)</h2>
              </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14`}>
            <p className="text-gray-600 text-base mb-3 mt-2"> 
            The controls visitors use to interact with a website, such as button displays and gesture controls, are the website UI. On the other hand, UX is focused on the user&#39;s behaviour and feelings when using the website. The core components of UX/UI include:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Information Architecture (IA) - </strong> IA is concerned with achieving the business goals by designing the site&#39;s information structure.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Interaction Design (ID) -  </strong> ID is concerned with creating the conceptual design using which the visitors interact with the website.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Usability -  </strong> Its objective is to ensure the visitors find the website easier to navigate and get the information they need faster.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Wireframing - </strong> It is about creating a sample of the website to test the features, look, and usability before it is launched.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Visual Design - </strong> It focuses on selecting the best visual elements, e.g., images, colours, icons, fonts, and identifying how the appearance of a website impacts the interaction of its visitors.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            ALDS offers UI/UX design solutions through its skilled and dedicated designers for your following needs:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Wireframe and Prototyping - </strong> Our design team creates wireframes & prototypes using the best tools and methods for faster deployments.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Mobile First and Responsive Design -</strong> Our skilled team of designers create websites that work across devices.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	UX Design -  </strong> We deliver designs that engage, improve interactions and retain.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Usability Audits - </strong> Our designers help evaluate your website&#39;s or app&#39;s UI evaluation.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Choosing UI/UX design best practices provides these advantages to your projects:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Customer Acquisition & Retention - </strong> Well-designed UX/UI helps gain customers&#39; trust and increases the odds of acquiring and retaining them.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Reduces development time and cost -</strong> Efficient UX/UI reduces clutter and avoids usability issues.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Increased productivity -  </strong> A good UX/UI increases the productivity of customers and employees, thereby reducing wasted time and bounce rates.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	More user engagement - </strong> Interactions like Call-to-action are increased due to better user engagements offered by efficient UX/UI.</li>
            </ul>
            <p className="text-gray-600 text-lg mb-3 mt-6"> 
            Leading companies choose ALDS for their Design needs for the following reasons:
            </p> 
            <ul className="list-disc pl-4">
              <li className="text-gray-600 text-base mb-2"><strong>	Fast Delivery: </strong> We have a consistent track record of delivering on-time designs as per client specifications.</li>
              <li className="text-gray-600 text-base mb-2"><strong>	Honesty and Transparency: </strong> We keep our clients best informed about every aspect, including status and resources deployed, making the whole process transparent.</li>
              <li className="text-gray-600 text-base mb-2"><strong> Skilled Team: </strong> Our certified and experienced designers provide clients with the best designs to suit their business needs. </li>
              <li className="text-gray-600 text-base mb-2"><strong> Best Technical Support: </strong> Our support team promptly provides you with the best solutions to your Design/UX problems.</li>
            </ul>
            </div>            
          </div>          
        </div>                           
      </div>
    </div>
  );
}
