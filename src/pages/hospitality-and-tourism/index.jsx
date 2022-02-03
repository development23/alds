
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
            src={require("@/assets/images/banner/travel-and-hospitality.jpg")}
            alt="Aladinn Tech travel and hospitality"
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

                <h2 className={` ${styles.titlemain} `}> Travel and Hospitality</h2>
              </div>             
              <p className="text-gray-600 text-base">With innovative solutions and cutting-edge technology, ALDS addresses your enterprise&#39;s industry-specific needs. Taking into account diverse clients&#39; needs, we provide comprehensive and result-oriented IT solutions to operate, analyze, manage, and operate an effective travel distribution system through various channels.</p>
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
            <h6> <span>Developing</span> web applications</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Development of powerful and feature-rich web applications that allow businesses to reach a wider audience.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/automation.png")}
                  alt="Travel Portals"
                />
                <p className="font-bold text-sm mt-4 mb-4">	Travel Portals</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/live-communication.png")}
                  alt="E-reservation"
                />
            <p className="font-bold text-sm mt-4 mb-4">	E-reservation</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/team-management.png")}
                  alt="Web Check-in"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Web Check-in</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/global-network.png")}
                  alt="Virtual Tour Websites"
                />
                <p className="font-bold text-sm mt-4 mb-4">Virtual Tour Websites</p>
              </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>  
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>           
            <div className={`w-full overflow-hidden px-2 md:text-left md:px-8 md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Mobile</span> Application Development</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Develop applications that make successful customer engagements with the user, while providing user guides through various features and functions.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/organize-communication.png")}
                  alt="Travel Booking Apps"
                />
                <p className="font-bold text-sm mt-4 mb-4">Travel Booking Apps</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/rent-posting.png")}
                  alt="Taxi Apps"
                />
            <p className="font-bold text-sm mt-4 mb-4">Taxi Apps</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/modifications-document.png")}
                  alt="Hospitality Apps"
                />
            <p className="font-bold text-sm mt-4 mb-4">Hospitality Apps</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Virtual Tour Apps"
                />
                <p className="font-bold text-sm mt-4 mb-4">Virtual Tour Apps</p>
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
            <h6><span>Apps</span> for booking and e-ticketing</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Reducing the inconvenience caused by long queues for your customers is now possible. Get all the information you need about flights, trains, buses, and reservations on your mobile device.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/onboarding-customers.png")}
                  alt="E-reservation"
                />
                <p className="font-bold text-sm mt-4 mb-4">E-reservation</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/database-listings.png")}
                  alt="Secured Payment "
                />
            <p className="font-bold text-sm mt-4 mb-4">Secured Payment </p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/sorting.png")}
                  alt="Offer Listing"
                />
            <p className="font-bold text-sm mt-4 mb-4">Offer Listing</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Travel product innovative services"
                />
                <p className="font-bold text-sm mt-4 mb-4">Travel product innovative services</p>
              </article>
            </li>           
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>   
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Applications</span> for hotel booking</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Take advantage of the wide range of hotels and their services to enhance your travel experience. At ALDS we develop mobile apps that offer a wide range of unique features.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/login.png")}
                  alt="E-reservation"
                />
                <p className="font-bold text-sm mt-4 mb-4">E-reservation</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Web Check-in"
                />
            <p className="font-bold text-sm mt-4 mb-4">Web Check-in</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/various-images.png")}
                  alt="Best Price"
                />
            <p className="font-bold text-sm mt-4 mb-4">Best Price</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/real-time-system.png")}
                  alt="Search Console"
                />
                <p className="font-bold text-sm mt-4 mb-4">Search Console</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Easy Refund/Zero Cancellation"
                />
                <p className="font-bold text-sm mt-4 mb-4">Easy Refund/Zero Cancellation</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Reviews and Rewards"
                />
                <p className="font-bold text-sm mt-4 mb-4">Reviews and Rewards</p>
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
            <h6><span>Comparative</span> Portals</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            In order to ensure that you land at the right place, we allow you to differentiate between hotels and resorts.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/filtering.png")}
                  alt="Predictive Analysis"
                />
                <p className="font-bold text-sm mt-4 mb-4">Predictive Analysis</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-price.png")}
                  alt="Customer Tracking"
                />
            <p className="font-bold text-sm mt-4 mb-4">Customer Tracking</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-amenities.png")}
                  alt="Feature Comparison"
                />
            <p className="font-bold text-sm mt-4 mb-4">Feature Comparison</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Price Comparison"
                />
                <p className="font-bold text-sm mt-4 mb-4">Price Comparison</p>
              </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center pt-10 md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>        
          
          
          <div className={`flex flex-wrap items-center overflow-hidden py-4 md:py-10 ${styles.flexdirection}`}>
            <div className="w-full overflow-hidden text-center pb-6 md:pt-0 md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden md:text-left px-2 md:px-8  md:w-3/5 `}>
            <Image
                src={require("@/assets/images/bg/pat3.png")}
                alt="Aladinn Tech"
              /> 
            <h6><span>Car</span> Rental Solutions</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            We provide you with the authenticated, standardized and secured rental car solutions that guarantee you a painless trip regardless of where you wish to go.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/notifications.png")}
                  alt="Signup/Login"
                />
                <p className="font-bold text-sm mt-4 mb-4">Signup/Login</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calculator.png")}
                  alt="Driver Dashboard"
                />
            <p className="font-bold text-sm mt-4 mb-4">Driver Dashboard</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calling-direct-messaging.png")}
                  alt="Admin Dashboard"
                />
            <p className="font-bold text-sm mt-4 mb-4">Admin Dashboard</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Navigational System"
                />
                <p className="font-bold text-sm mt-4 mb-4">Navigational System</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Real-time tracking"
                />
                <p className="font-bold text-sm mt-4 mb-4">Real-time tracking</p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Simplified Registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Simplified Registration</p>
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

                <h2 className={` ${styles.titlemain} `}>Travel and Hospitality</h2>
              </div>             
              <p className="text-gray-600 text-base">For delivering personalized customer service, travel and tourism businesses are embracing digital transformation. Travel and hospitality businesses face many challenges, though. By leveraging our solutions, you can overcome these challenges while aligning your business to evolving customer expectations and business models.</p>
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
                  alt="Changing consumer habits"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Changing consumer habits</h4>  
                <h5 className="text-gray-600 text-sm">As a result of digital transformation, consumers have evolved from traditional methods of searching and researching, which has forced businesses to change the way they market, promote, and provide services.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/lead.png")}
                  alt="Information Management"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Information Management</h4>  
                <h5 className="text-gray-600 text-sm">It is essential to have access to consumer data in order to provide relevant and more precise services. However, digitalisation has also generated a great deal of data, making it difficult to manage.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/informed-buyers.png")}
                  alt="Generating revenue"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Generating revenue</h4>  
                <h5 className="text-gray-600 text-sm">Continuous economic fluctuation makes it difficult for businesses to maintain economic symmetry, reducing their chances of surviving in a competitive and harsh economy.</h5>
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
                  src={require("@/assets/images/icons/input-costs.png")}
                  alt="Competitive Landscape"
                />
                </figure> 
                <figcaption className="w-full">               
                <h4 className="font-bold text-lg mb-2 text-gray-600">Competitive Landscape</h4>  
                <h5 className="text-gray-600 text-sm">There are new websites and apps appearing in the market every day, making it difficult for businesses to survive. Therefore, in order to compete against the cut throat competition, it becomes very important to offer unique and relevant features.</h5>
                </figcaption> 
              </article>
            </li>  
            
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/lack-trust.png")}
                    alt="Cross-platform compatibility"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Cross-platform compatibility</h4>  
                  <h5 className="text-gray-600 text-sm">Due to the growing number of customers, it&#39;s quite imperative to keep pace with all the technological solutions in order to be compatible with multiple platforms.</h5>
                  </figcaption> 
                </article>
              </li> 
              
              
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/innovations-in-technology.png")}
                    alt="Increasing operating costs"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2  text-gray-600">Increasing operating costs</h4>  
                  <h5 className="text-gray-600 text-sm">Hotel and travel costs are rising in response to industrialization, requiring the hospitality companies to raise their operational costs, hindering resource utilization.</h5>
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

                <h2 className={` ${styles.titlemain} `}>Travel and Hospitality</h2>
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
