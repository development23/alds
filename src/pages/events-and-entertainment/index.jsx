
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Mediaent() { 
  return (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden xl:w-4/5 `}>
        <Image
            src={require("@/assets/images/banner/media-and-entertainment.jpg")}
            alt="Aladinn Tech Event & Entertainment"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
      <div className="md:px-28 md:pt-10 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> Our Solutions </p>

                <h2 className={` ${styles.titlemain} `}> Event & Entertainment</h2>
              </div>             
              <p className="text-gray-600 text-base">Developing interactive and end-to-end solutions for Media and Entertainment App business. </p>
            </div>
          </div>
        </div>
      <div
          className={`md:px-28 pt-0 pb-10 ${styles.bggrayimg}`}
        > 
        <div className="flex flex-wrap items-center overflow-hidden md:py-10 py-4">            
            <div className={`w-full overflow-hidden px-2 md:text-left md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6> <span>Portal</span> for online ticketing</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            With our e-ticketing portal, we make online ticket booking easy without hassels and avoids lengthy booking processes.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/automation.png")}
                  alt="Easy check for seat availabilit"
                />
                <p className="font-bold text-sm mt-4 mb-4">	Easy check for seat availabilit</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-44">
            <Image
                  src={require("@/assets/images/icons/live-communication.png")}
                  alt="Manages complete booking details"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Manages complete booking details</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-44">
            <Image
                  src={require("@/assets/images/icons/team-management.png")}
                  alt="Thoughtfully planned interface"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Thoughtfully planned interface</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/global-network.png")}
                  alt="Payment management"
                />
                <p className="font-bold text-sm mt-4 mb-4">Payment management </p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/global-network.png")}
                  alt="Enhanced visibility"
                />
                <p className="font-bold text-sm mt-4 mb-4">Enhanced visibility</p>
              </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/media/1.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>  
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/media/3.png")}
                  alt="Aladinn Tech"
                />
            </div>           
            <div className={`w-full overflow-hidden px-2 md:text-left md:px-8 md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Software</span> for Real-Time Tracking & Reporting</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our web solutions are integrated in a way which allows organizations to maintain a complete track record of individuals who entered or left the premises.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/organize-communication.png")}
                  alt=" Improves decision making ability "
                />
                <p className="font-bold text-sm mt-4 mb-4"> Improves decision making ability </p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/rent-posting.png")}
                  alt="Reduces the manual labour"
                />
            <p className="font-bold text-sm mt-4 mb-4">Reduces the manual labour </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/modifications-document.png")}
                  alt="Speed up client meetings"
                />
            <p className="font-bold text-sm mt-4 mb-4">Speed up client meetings </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Intermediaries can be avoided"
                />
                <p className="font-bold text-sm mt-4 mb-4">Intermediaries can be avoided</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Highly effective in multi-department set up"
                />
                <p className="font-bold text-sm mt-4 mb-4">Highly effective in multi-department set up</p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Trust & work transparency can be subsequently impr"
                />
                <p className="font-bold text-sm mt-4 mb-4">Trust & work transparency</p>
              </article>
            </li> 
            </ul>
            </div>
          </div>  
          <div className="flex flex-wrap items-center py-4 md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Software</span> for Ticket Management </h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our solutions help you manage the better integration of the Ticket Management System with the web portal which makes designing and ticket generation easy for events.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/onboarding-customers.png")}
                  alt="Complete customization as per demand"
                />
                <p className="font-bold text-sm mt-4 mb-4">Complete customization as per demand</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-48">
            <Image
                  src={require("@/assets/images/icons/database-listings.png")}
                  alt="Creation of customized ticket pages"
                />
            <p className="font-bold text-sm mt-4 mb-4">Creation of customized ticket pages</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-48">
            <Image
                  src={require("@/assets/images/icons/sorting.png")}
                  alt="Manages entire information related to students "
                />
            <p className="font-bold text-sm mt-4 mb-4">Manages entire information related to students </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Travel product innovative services"
                />
                <p className="font-bold text-sm mt-4 mb-4">Multilingual support </p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Better team management "
                />
                <p className="font-bold text-sm mt-4 mb-4">Better team management </p>
              </article>
            </li>  
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-44">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Access via multiple channels"
                />
                <p className="font-bold text-sm mt-4 mb-4">Access via multiple channels</p>
              </article>
            </li>           
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/media/7.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>   
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/media/4.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Retail</span> Billing & POS software</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our POS software solutions help manage diverse business operations effectively, for example, sales, organizing and inventory management. 
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/login.png")}
                  alt="Managing and improves customer relations"
                />
                <p className="font-bold text-sm mt-4 mb-4">Managing and improves customer relations </p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-48">
            <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Efficient tracking, monitoring and sales reporting"
                />
            <p className="font-bold text-sm mt-4 mb-4">Efficient tracking, monitoring and sales reporting</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-48">
            <Image
                  src={require("@/assets/images/icons/various-images.png")}
                  alt="Processing of orders as well as billing details"
                />
            <p className="font-bold text-sm mt-4 mb-4">Processing of orders as well as billing details</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/real-time-system.png")}
                  alt="Complete management of employee data"
                />
                <p className="font-bold text-sm mt-4 mb-4">Complete management of employee data</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Inventory management"
                />
                <p className="font-bold text-sm mt-4 mb-4">Inventory management</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Manages the cross channel returns"
                />
                <p className="font-bold text-sm mt-4 mb-4">Manages the cross channel returns</p>
              </article>
            </li>          
            </ul>
            </div>
          </div>  
          <div className="flex flex-wrap items-center py-4 md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Custom</span> CRM Solutions</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            You can scale your business with our custom CRM Solutions which are easy to use & can be implemented within a short span of time.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-52">
              <Image
                  src={require("@/assets/images/icons/filtering.png")}
                  alt="Management of customer contact details"
                />
                <p className="font-bold text-sm mt-4 mb-4">Management of customer contact details</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-52">
            <Image
                  src={require("@/assets/images/icons/filter-price.png")}
                  alt="Enhanced functionality through mail integration"
                />
            <p className="font-bold text-sm mt-4 mb-4">Enhanced functionality through mail integration</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4  h-auto md:h-52">
            <Image
                  src={require("@/assets/images/icons/filter-amenities.png")}
                  alt="Quick access to customer database"
                />
            <p className="font-bold text-sm mt-4 mb-4">Quick access to customer database </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Management of business proposals"
                />
                <p className="font-bold text-sm mt-4 mb-4">Management of business proposals</p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Efficient Lead Management"
                />
                <p className="font-bold text-sm mt-4 mb-4">Efficient Lead Management</p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4  h-auto md:h-48">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Advanced automation features"
                />
                <p className="font-bold text-sm mt-4 mb-4">Advanced automation features</p>
              </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center pt-10 md:w-2/5">
                <Image
                  src={require("@/assets/images/media/5.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>        
          
          
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/media/6.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Web</span> apps & websites for online registration</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our web solutions make online registration possible with the ease of payment and also saves your time.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/notifications.png")}
                  alt="On-spot confirmation"
                />
                <p className="font-bold text-sm mt-4 mb-4">On-spot confirmation</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calculator.png")}
                  alt="Secured payment"
                />
            <p className="font-bold text-sm mt-4 mb-4">Secured payment </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calling-direct-messaging.png")}
                  alt="Real-time update of registrations"
                />
            <p className="font-bold text-sm mt-4 mb-4">Real-time update of registrations</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Time saving & quick"
                />
                <p className="font-bold text-sm mt-4 mb-4"> Time saving & quick</p>
              </article>
            </li>          
            </ul>
            </div>
          </div>
        </div>
        <div className={`md:px-28  py-10 md:py-20 ${styles.bggray}`}>
        <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>  Challenges </p>

                <h2 className={` ${styles.titlemain} `}>Event & Entertainment</h2>
              </div>             
              <p className="text-gray-600 text-base">With the influx of technology, the expectations of the public from the media industry has greatly shifted. Video on demand and OTT Development solutions have provided access to live and on-demand coverage. Not just TV, audiences are now consuming media and information on all devices and diverse platforms. Thus, the major challenge for the media industry is to provide on-demand content quickly and effortlessly to enhance the viewership. </p>
            </div>
          </div>
          <div className="flex flex-wrap md:pt-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/lead.png")}
                  alt="Enhancing User Experience "
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Enhancing User Experience </h4>  
                <h5 className="text-gray-600 text-sm">In the media industry, the user experience depends on a number of factors such as color theme, navigation, the extent of responsiveness, transition as well as other functional properties. Thus, achieving a fine balance among all of these is a real challenge.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                <Image
                  src={require("@/assets/images/icons/input-costs.png")}
                  alt="Content monitization"
                />
                </figure> 
                <figcaption className="w-full">               
                <h4 className="font-bold text-lg mb-2 text-gray-600">Content monitization</h4>  
                <h5 className="text-gray-600 text-sm">Making the content visible and to receive the needed response from the audience, pitching the right services is of great importance. Converting these responses into qualified leads is also a major challenge faced by the events & entertainment industry. </h5>
                </figcaption> 
              </article>
            </li>   
           <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/volatility-market.png")}
                  alt="Copyright issues "
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Copyright issues </h4>  
                <h5 className="text-gray-600 text-sm">Plagiarism is one of the key challenges that impact the industry. With greater digitisation, multiple users can use the same account for viewing content using the password. Piracy and spoofing have become common and users use the existing content to create new one & upload it for generating more revenue.</h5>
                </figcaption> 
              </article>
            </li>                            
                 
            </ul>
            </div>
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
               <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/innovations-in-technology.png")}
                    alt="Growing Competition"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2  text-gray-600">Growing Competition</h4>  
                  <h5 className="text-gray-600 text-sm">With the rise in Video on Demand & OTT Development, OTT platforms have received immense fame and popularity. Thus, providing high quality video with uninterrupted content at a reasonable price poses a major challenge for the service providers.</h5>
                  </figcaption> 
                </article>
              </li>           
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/informed-buyers.png")}
                  alt="Multi Platform Integration"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Multi Platform Integration</h4>  
                <h5 className="text-gray-600 text-sm">Media consumers in the present times do not devote themselves to a single platform. They constantly switch platforms to experience new options and diversified choices. As different platforms have different coding structures, developing solutions that work with multi-platforms is a significant challenge.</h5>
                </figcaption> 
              </article>
            </li>  
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto md:h-52">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/lack-trust.png")}
                    alt="Customer Retention"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Customer Retention</h4>  
                  <h5 className="text-gray-600 text-sm">Introducing new innovative media not only helps in retaining customers but also fosters their relationship with the brand. But converting the first-time customers into loyal ones is something which requires serious efforts. </h5>
                  </figcaption> 
                </article>
              </li>            
              
            </ul>
            </div>
          </div>  
        </div>
        <div
          className={`md:px-28  py-10 md:py-20 ${styles.bggrayimg1}`}
        >                
          <div className={`flex flex-wrap items-center overflow-hidden  ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden md:w-2/5">
              <div className={` ${styles.counter} `}>
                <Image
                  src={require("@/assets/images/about/differentiates.png")}
                  alt="Aladinn Tech"
                />
              </div>
            </div>
          <div className={`w-full overflow-hidden md:py-0 py-4 px-2 md:px-14  md:w-3/5 `}>
            <div className="flex flex-wrap md:px-38  overflow-hidden ">
              <div
                className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
              >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>  What Value We Deliver </p>

                <h2 className={` ${styles.titlemain} `}>Event & Entertainment</h2>
              </div> 
            </div>
          </div>  
              <ul>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>1</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>A Customized Experience</h5>
                    <p>
                    We craft value propositions that provide exceptional, individualized experiences that meet the needs and expectations of our customers. Rather than just personalizing a segment of the journey, we create solutions that customize the whole journey. 
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>2</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Offering insights</h5>
                    <p>
                    By leveraging the big data generated online, businesses can gain a competitive advantage. It is our job to create a web/mobile solution that allows customers to see the same seamless booking, check-in, and travelling experience across multiple devices with the same performance. 
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>3</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Simplifying bookings
                    </h5>
                    <p>
                    ALDS develops interactive booking engines providing customers with the greatest convenience and thus, promoting reliability and security.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>4</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Simplifying Destination Search
                    </h5>
                    <p>
                    With a wide range of web and mobile applications, we make it easy for you to find your destination using a variety of mapping and navigation solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>                     
      </div>
    </div>
  );
}
