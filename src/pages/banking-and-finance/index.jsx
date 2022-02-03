
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Bankingfinance() { 
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
            src={require("@/assets/images/banner/finance-and-banking.jpg")}
            alt="Aladinn Tech finance-and-banking"
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

                <h2 className={` ${styles.titlemain} `}> Finance and Banking</h2>
              </div>             
              <p className="text-gray-600 text-base">Through the development of advanced digital and data management solutions, we make sure that our clients are using technology effectively for their success. From improving workflow, reducing costs, and streamlining their operations - your institution can benefit from our solutions as well.</p>
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
            <h6> <span>Finance</span> Management Software</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            With the help of advanced Finance management software development, you can easily access customer information and transaction records.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/automation.png")}
                  alt="Customized as per the requirements"
                />
                <p className="font-bold text-sm mt-4 mb-4">	Customized as per the requirements</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/live-communication.png")}
                  alt="Multi-lingual software"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Multi-lingual software</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/team-management.png")}
                  alt="Data Information Management"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Data Information Management</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/global-network.png")}
                  alt="Interactive Dashboard"
                />
                <p className="font-bold text-sm mt-4 mb-4">Interactive Dashboard</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/automation-technology.png")}
                  alt="Cash Management System"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Cash Management System</p>
            </article>
            </li>          
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/management-information.png")}
                  alt="Comprehensive Reporting"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Comprehensive Reporting</p>
            </article>
            </li>
                       
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/automation-technology.png")}
                  alt="Chatbots for Bank"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Chatbots for Bank</p>
            </article>
            </li>          
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/management-information.png")}
                  alt="Digital Payment Solution"
                />
            <p className="font-bold text-sm mt-4 mb-4">	Digital Payment Solution</p>
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
            <h6><span>Solutions</span> for Customer Management</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Improve your customer relationship and get a deeper understanding of your customers with advanced and effective customer management solutions.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/organize-communication.png")}
                  alt="Enterprise Software Development"
                />
                <p className="font-bold text-sm mt-4 mb-4">Enterprise Software Development</p>
              </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/modifications-document.png")}
                  alt="Customer Information and Data Management"
                />
            <p className="font-bold text-sm mt-4 mb-4">Customer Information and Data Management</p>
            </article>
            </li>          
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/rent-posting.png")}
                  alt="Maintenance & Support"
                />
            <p className="font-bold text-sm mt-4 mb-4">Maintenance & Support</p>
            </article>
            </li>
            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/checklists.png")}
                  alt="Quality Assurance"
                />
                <p className="font-bold text-sm mt-4 mb-4">Quality Assurance</p>
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
            <h6><span>eWallet/Mobile</span> Wallet Applications</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            EWallet apps are powerful apps which allow users to switch to a cashless society. Our mobile banking apps ensure security, agility and interactivity.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/onboarding-customers.png")}
                  alt="Easy Registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Easy Registration</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/database-listings.png")}
                  alt="Brand Integration"
                />
            <p className="font-bold text-sm mt-4 mb-4">Brand Integration</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/sorting.png")}
                  alt="Payment Gateway"
                />
            <p className="font-bold text-sm mt-4 mb-4">Payment Gateway</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/descriptions-properties.png")}
                  alt="Assured Security"
                />
                <p className="font-bold text-sm mt-4 mb-4">Assured Security</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/lead-management.png")}
                  alt="Digital Payment Solution"
                />
            <p className="font-bold text-sm mt-4 mb-4">Digital Payment Solution</p>
            </article>
            </li> 
                       
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/lead-management.png")}
                  alt="Information and Data Management"
                />
            <p className="font-bold text-sm mt-4 mb-4">Information and Data Management</p>
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
            <h6><span>Mobile</span> Banking App Development</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            You can now be in the pocket of your customers, not just with currency but with a mobile application. We design rock-solid apps for Android and iOS as well.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/login.png")}
                  alt="Easy Registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Easy Registration</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Brand Integration"
                />
            <p className="font-bold text-sm mt-4 mb-4">Brand Integration</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/various-images.png")}
                  alt="Payment Gateway"
                />
            <p className="font-bold text-sm mt-4 mb-4">Payment Gateway</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/real-time-system.png")}
                  alt="Assured Security"
                />
                <p className="font-bold text-sm mt-4 mb-4">Assured Security</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Reporting/Data Analysis"
                />
                <p className="font-bold text-sm mt-4 mb-4">Reporting/Data Analysis</p>
              </article>
            </li> 
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/favorite.png")}
                  alt="Investment Management Solution"
                />
                <p className="font-bold text-sm mt-4 mb-4">Investment Management Solution</p>
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
            <h6><span>Portal</span> for Net Banking</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Your customers should be able to access their accounts through a sophisticated portal. We develop highly-secure and technology-enabled online banking portals for your customers.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/filtering.png")}
                  alt="Customer Panel"
                />
                <p className="font-bold text-sm mt-4 mb-4">Customer Panel</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-price.png")}
                  alt="e-Bill Platform"
                />
            <p className="font-bold text-sm mt-4 mb-4">e-Bill Platform</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-40 min-h-full">
            <Image
                  src={require("@/assets/images/icons/filter-amenities.png")}
                  alt="Online Enquiry"
                />
            <p className="font-bold text-sm mt-4 mb-4">Online Enquiry</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-40 min-h-full">
              <Image
                  src={require("@/assets/images/icons/listing.png")}
                  alt="Fund Transfer"
                />
                <p className="font-bold text-sm mt-4 mb-4">Fund Transfer</p>
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
            <h6><span>Insurance</span> Management Portal</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Insurance companies use our portal to manage everything. Our portal gives you access to customer data and insurance plans.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/notifications.png")}
                  alt="Customer Registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Customer Registration</p>
              </article>
            </li>            
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calculator.png")}
                  alt="Online Enquiry"
                />
            <p className="font-bold text-sm mt-4 mb-4">Online Enquiry</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/calling-direct-messaging.png")}
                  alt="Banking Transaction"
                />
            <p className="font-bold text-sm mt-4 mb-4">Banking Transaction</p>
            </article>
            </li>
            <li className="w-1/2 overflow-hidden md:w-44 bg-white rounded-xl md:mr-4 mb-6 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/virtual-reality.png")}
                  alt="Consumer Data Analysis"
                />
                <p className="font-bold text-sm mt-4 mb-4">Consumer Data Analysis</p>
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

                <h2 className={` ${styles.titlemain} `}>Finance and Banking</h2>
              </div>             
              <p className="text-gray-600 text-base">Innovative solutions and strategies are capable of delivering massive benefits for the finance industry. This industry, however, faces great challenges due to the unprecedented advancement and ever-growing market demands. As a team of proficient software developers, business strategists, and tech experts, we overcome these challenges and deliver robust solutions.</p>
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
                  alt="Managing data"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Managing data</h4>  
                <h5 className="text-gray-600 text-sm">There is no permanent solution to manage the increasing hype of data and its safeguarding with the technology that exists today.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/lead.png")}
                  alt="Regulatory framework"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Regulatory framework</h4>  
                <h5 className="text-gray-600 text-sm">International and national rules and regulations are hardwired into the banking and finance industry; they work under strict guidelines which reduces their agility.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto md:h-44">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/input-costs.png")}
                    alt="Managing Technology risks"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Managing Technology risks</h4>  
                  <h5 className="text-gray-600 text-sm">In spite of the fact that the finance industry is equipped with the technical tools, it is still prone to cyber attacks, which cause data loss and other losses.</h5>
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
                    src={require("@/assets/images/icons/lack-trust.png")}
                    alt="Lack of trust"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2 text-gray-600">Service to Customers</h4>  
                  <h5 className="text-gray-600 text-sm">Banks and other financial institutions can benefit immensely from improving something as simple as customer experience.</h5>
                  </figcaption> 
                </article>
              </li> 
           <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                 <Image
                  src={require("@/assets/images/icons/informed-buyers.png")}
                  alt="Pricing Challenge"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2 text-gray-600">Pricing Challenge</h4>  
                <h5 className="text-gray-600 text-sm">There is a lot of market volatility as well as competition out there, so banks have to dramatically lower prices to attract new customers.</h5>
                </figcaption> 
              </article>
            </li> 
             
              
              
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto md:h-44">
                <figure className="w-24 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-100 ">
                  <Image
                    src={require("@/assets/images/icons/innovations-in-technology.png")}
                    alt="Information Intelligence"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2  text-gray-600">Information Intelligence</h4>  
                  <h5 className="text-gray-600 text-sm">By maintaining data and utilizing it properly to enhance customer experience, you will be able to increase client interaction and your business.</h5>
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

                <h2 className={` ${styles.titlemain} `}>Finance and Banking</h2>
              </div> 
            </div>
          </div>  
              <ul>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>1</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Increasing business efficiency</h5>
                    <p>
                    Automation of business processes can be achieved by using custom software solutions. The use of a well-designed software suite could eliminate human errors and increase productivity.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>2</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Complete Security</h5>
                    <p>
                    In the financial services industry, security remains a top concern for both customers and business owners. By implementing the right Fintech development solution, you can eliminate security concerns and focus on your core business.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>3</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Ensure transparency
                    </h5>
                    <p>
                    Customers should be empowered to make business transactions in a way that suits them. Scaling up transparency means becoming more tech-dependent. Certainly, trust from customers is an important asset.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>4</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Improve decision-making
                    </h5>
                    <p>
                    You can find effective solutions to business problems with the insights and analysis provided by data analytics & BI solutions. Get desired results by using data-driven decision-making.
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
