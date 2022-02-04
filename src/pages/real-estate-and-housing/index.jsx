
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Realestate() { 
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
            src={require("@/assets/images/banner/real-estate.jpg")}
            alt="Aladinn Tech real-estate"
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

                <h2 className={` ${styles.titlemain} `}> Real Estate and Housing</h2>
              </div>             
              <p className="text-gray-600 text-base">For your real estate enterprise, we offer fully authenticated and user-friendly solutions. Our responsibility is to keep you updated on every step of development, from design to deployment. By utilizing trending technology, ALDS pushes the boundaries of apps and websites.</p>
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
            <h6> <span>Solutions</span> for CRM and ERP</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            By taking advantage of ALDS&#39;s CRM and ERP solutions, you can increase customer relationships and productivity.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/automation.png")}
                  alt="Automation of marketing"
                />
                <p className="font-bold text-sm mt-4 mb-4">	Automation of marketing</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/live-communication.png")}
                  alt="Live communication"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Live communication</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/team-management.png")}
                  alt="Management of contracts and deals"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Management of contracts and deals</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/global-network.png")}
                  alt="Sales across multiple channels"
                />
                <p className="font-bold text-sm mt-4 mb-4">	Sales across multiple channels</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/automation-technology.png")}
                  alt="Flow automation of documents"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Flow automation of documents</p>
            </article>
            </li>          
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/management-information.png")}
                  alt="Management of contact information"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Management of contact information</p>
            </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/7.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>  
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/8.png")}
                  alt="Aladinn Tech"
                />
            </div>           
            <div className={`w-full overflow-hidden px-2 md:text-left md:px-8 md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Solutions</span> for Tenant Management</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            With a centralized, easy-to-use portal, you can manage your tenants, rents, and agreements effortlessly.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/organize-communication.png")}
                  alt="Organize communication"
                />
                <p className="font-bold text-sm mt-4 mb-4">Organize communication</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/rent-posting.png")}
                  alt="Rent posting made easy"
                />
            <p className="font-bold text-sm mt-4 mb-4">Rent posting made easy</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/modifications-document.png")}
                  alt="Modifications to document properties"
                />
            <p className="font-bold text-sm mt-4 mb-4">Modifications to document properties</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Checklists and Help Lists every month"
                />
                <p className="font-bold text-sm mt-4 mb-4">Checklists and Help Lists every month</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/features-detail.png")}
                  alt="Features Described in Detail"
                />
            <p className="font-bold text-sm mt-4 mb-4">Features Described in Detail</p>
            </article>
            </li>          
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/mobile-payment.png")}
                  alt="Payments to Vendors of any type"
                />
            <p className="font-bold text-sm mt-4 mb-4">Payments to Vendors of any type</p>
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
            <h6><span>Developing</span> and maintaining applications</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Real Estate Industry transformation driven by powerful applications. Maintaining your existing apps is also a priority for us.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/onboarding-customers.png")}
                  alt="Onboarding new customers"
                />
                <p className="font-bold text-sm mt-4 mb-4">Onboarding new customers</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/database-listings.png")}
                  alt="Database and listings"
                />
            <p className="font-bold text-sm mt-4 mb-4">Database and listings</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/sorting.png")}
                  alt="Sorting and Filtering"
                />
            <p className="font-bold text-sm mt-4 mb-4">Sorting and Filtering</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Descriptions of properties"
                />
                <p className="font-bold text-sm mt-4 mb-4">Descriptions of properties</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/lead-management.png")}
                  alt="Interface for Lead Management"
                />
            <p className="font-bold text-sm mt-4 mb-4">Interface for Lead Management</p>
            </article>
            </li>           
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/9.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>   
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/10.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Application</span> Frameworks / Portals</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Take complete control of your portal / web application by using a powerful and sophisticated portal / web application.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/login.png")}
                  alt="Access log-in"
                />
                <p className="font-bold text-sm mt-4 mb-4">Access log-in</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Listings"
                />
            <p className="font-bold text-sm mt-4 mb-4">Listings</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/various-images.png")}
                  alt="Various images"
                />
            <p className="font-bold text-sm mt-4 mb-4">Various images</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/real-time-system.png")}
                  alt="A real-time messaging system"
                />
                <p className="font-bold text-sm mt-4 mb-4">A real-time messaging system</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="List of favorites"
                />
                <p className="font-bold text-sm mt-4 mb-4">List of favorites</p>
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
            <h6><span>Online</span> Auctions / Property Portals</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our company creates easy-to-use auction websites and property portals that facilitate property searches, comparisons, bookings, and purchases/rentals online.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/filtering.png")}
                  alt="Filtering by Property Type"
                />
                <p className="font-bold text-sm mt-4 mb-4">Filtering by Property Type</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-price.png")}
                  alt="Filter for custom price ranges"
                />
            <p className="font-bold text-sm mt-4 mb-4">Filter for custom price ranges</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-amenities.png")}
                  alt="Feature Filter: Amenities"
                />
            <p className="font-bold text-sm mt-4 mb-4">Feature Filter: Amenities</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Listing"
                />
                <p className="font-bold text-sm mt-4 mb-4">Listing</p>
              </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center pt-10 md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/11.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>        
          
          
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/industries/12.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Property</span> booking online</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            You can book properties online or with a mobile app that has advanced features and cutting-edge technology.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/notifications.png")}
                  alt="Push Notifications"
                />
                <p className="font-bold text-sm mt-4 mb-4">Push Notifications</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calculator.png")}
                  alt="Real Estate Cost Calculators"
                />
            <p className="font-bold text-sm mt-4 mb-4">Real Estate Cost Calculators</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calling-direct-messaging.png")}
                  alt="Calling or Direct Messaging"
                />
            <p className="font-bold text-sm mt-4 mb-4">Calling or Direct Messaging</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Tour via virtual reality"
                />
                <p className="font-bold text-sm mt-4 mb-4">Tour via virtual reality</p>
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

                <h2 className={` ${styles.titlemain} `}>Real Estate and Housing</h2>
              </div>             
              <p className="text-gray-600 text-base">Online learning has minimized barriers, both for learners and for trainers, by allowing them to learn by themselves or with an instructor remotely. Students can take the course on their own time, place, and device and learn at their own pace. Nevertheless, there are some challenging obstacles that must be met thoroughly with feasible solutions- and we specialise in offering assistance in this regard.</p>
            </div>
          </div>
          <div className="flex flex-wrap md:pt-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/volatility-market.png")}
                  alt="Volatility in the market"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Volatility in the market</h4>  
                <h5 className="text-gray-600 text-sm">Numerous factors affect the real estate market, causing it to fluctuate. Property values are impacted by these factors heavily.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/lead.png")}
                  alt="lead"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Lead</h4>  
                <h5 className="text-gray-600 text-sm">The number of agents outnumbers the number of buyers, causing the leads to be centralized. You can increase lead generation by working with Real Estate App Development Company.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto md:h-44">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/input-costs.png")}
                    alt="Input Costs"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Input Costs</h4>  
                  <h5 className="text-gray-600 text-sm">As a result of high business setup costs, real estate organizations have difficulty adapting to new technologies.<br></br></h5><br></br><br></br>
                  </figcaption> 
                </article>
              </li>                      
                    
            </ul>
            </div>
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/informed-buyers.png")}
                  alt="More Informed Buyers"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">More Informed Buyers</h4>  
                <h5 className="text-gray-600 text-sm">In the real estate industry, everyone wants a quick selling process and less stressful experience with top-tier results.</h5>
                </figcaption> 
              </article>
            </li> 
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/lack-trust.png")}
                    alt="Lack of trust"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Lack of trust</h4>  
                  <h5 className="text-gray-600 text-sm">Online real estate markets have fewer qualified buyers, so customers do not have the confidence and assurance that they will receive their dream property online.</h5>
                  </figcaption> 
                </article>
              </li> 
              
              
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto md:h-44">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/innovations-in-technology.png")}
                    alt="online registration"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2  text-gray-600">Innovations in technology</h4>  
                  <h5 className="text-gray-600 text-sm">Today, customers want to have a realistic experience of the properties they see online. In addition to demographic shifts and preferences, technological advances are affecting online real estate.</h5>
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

                <h2 className={` ${styles.titlemain} `}>Real Estate and Housing</h2>
              </div> 
            </div>
          </div>  
              <ul>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>1</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>An integrated approach</h5>
                    <p>
                    Building compelling web and mobile application solutions for real estate companies with multiple offices, including wholly owned subsidiaries, licensees, and franchisees, we help them achieve greater results locally. Using a holistic approach to real estate site design, we help them achieve greater results.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>2</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Leading-edge technology</h5>
                    <p>
                    Utilizing the technology of virtual reality and 3D, we create websites with advanced views of properties for sale. We provide your company with all the required tools and expertise for a successful online real estate business.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>3</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    The Agile methodology
                    </h5>
                    <p>
                    We integrate agile methodologies into our real estate application development. As a result, we can deliver high-end, custom-made applications on time.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>4</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Support for location-based services
                    </h5>
                    <p>
                    We add value to your real estate business by integrating advanced features like geolocation. In addition to making it easy for dealers to search for their properties, it also gives them accurate information about those properties.
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
