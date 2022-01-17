import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";
import GroupsIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InstallMobileIcon from "@material-ui/icons/MobileFriendly";
import ComputerIcon from "@material-ui/icons/Computer";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";


//Tabs
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function AboutUs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 useEffect(() => {
    new WOW().init();
  }, []);
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
            src={require("@/assets/images/banner/About-us.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28 md:pt-10 md:pb-28 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> About Us </p>

                <h2 className={` ${styles.titlemain} `}> About Us </h2>
              </div>

              <p>
                We are a growth-centered progressive digital marketing company
                that develops online marketing strategies for clients tailored
                as per the unique requirements of the target audience. Thereby
                helping clients to mark their digital presence by fulfilling
                brand goals and managing diverse digital marketing challenges.
                Adopting the right marketing approach benefits the client in
                terms of better user engagement, enhanced conversion rate, and
                boosting the overall ROI. Be it SEO paid media strategy, brand
                creation we have nailed it all with our unmatched skills and
                talent.
              </p>
              <p>
                Our exemplary web solutions reflect our technical competence and
                therefore, customized websites, web applications, mobile apps,
                chatbots are built to impart the desired growth and success to
                your business. Optimizing every touchpoint that highlights your
                digital presence and communication with the customer is the key
                philosophy that drives us to serve you in the best possible way.
                We blend imagination with technology to come up with outcomes
                that will not only improve your brand presence but also fulfill
                your broad marketing objectives.
              </p>

              <p>
                At ALDS, we offer 360-degree digital marketing services right
                from website designing, web development, SEO, content marketing
                to complete online brand reputation management for the client.
                Our dedicated team of digital marketing experts, as well as
                technical professionals, focus on specific tasks to ensure
                guaranteed results and improvements in the online business. Our
                immense experience and skills help us build a brand and carve a
                niche among the top digital marketing and technology companies.
                Solving complex business problems, we help businesses to achieve
                great opportunities through the online market.
              </p>

              <div className={`pt-6 ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> features </p>

                <h2 className={` ${styles.titlesubmain} `}>
                  Our key features{" "}
                </h2>
              </div>

              <div className="flex flex-wrap pb-8 overflow-hidden ">
                <div className={`w-full  pt-6  overflow-hidden md:w-1/2 `}>
                  <h6> Proper Performance Tracking</h6>
                  <p>
                    Performance Tracking is done on a daily, weekly, and monthly
                    basis to ensure tasks planned are done as per the schedule
                    and further planning for future activities can be done
                    effectively.{" "}
                  </p>

                  <h6> Dedicated team and Project Manager </h6>
                  <p>
                    During the development phase and when we run social media
                    campaigns, our dedicated team works to provide the best
                    results. To make the communication more transparent and
                    coordination much better, our Project Manager remains in
                    constant touch with the client.
                  </p>
                </div>
                <div
                  className={`w-full  pt-6 md:pl-8 pr-6 overflow-hidden md:w-1/2 `}
                >
                  <h6> Measurable Results </h6>
                  <p>
                    Be it any of our digital marketing services, we provide
                    results that are measurable and can be easily observed.
                    Thus, you can be satisfied that we have made the most
                    effective use of every penny.
                  </p>

                  <h6> Top-notch CRM tools </h6>
                  <p>
                    Good client relationships are the key to success and with
                    the best CRM tools, we improve our communication and update
                    clients regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap px-4 py-4 md:py-20 overflow-hidden `}>
          <div
            className={`w-full flex justify-center items-center overflow-hidden`}
          >
            <div className="absolute md:mt-20 mt-36">
              <Image
                src={require("@/assets/images/about/about.png")}
                alt="Aladinn Tech"
                width="600"
                height="482"
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles.bgcounter} flex flex-wrap px-4 pt-64 pb-20 md:pt-64 md:pb-20 overflow-hidden `}
        >
          <div
            className={`w-full flex justify-center items-center overflow-hidden md:w-1/5`}
          >
            <div className={` ${styles.boxborder} text-white  text-center `}>
            <div className={` ${styles.iconboxbg} border-2 flex rounded-full m-auto h-24 w-24`}>
              <GroupsIcon  style={{ color: "#ffff", fontSize: 50 }}  className="m-auto" />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 10+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Year of Exprience </h6>
            </div>
          </div>

          <div
            className={`w-full flex justify-center items-center overflow-hidden md:w-1/5`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
            <div className={` ${styles.iconboxbg} border-2 flex rounded-full m-auto h-24 w-24`}>
               <WorkIcon  style={{ color: "#ffff", fontSize: 50 }} className="m-auto" />
               </div>
              <h6 className="text-4xl py-2 text-gray-600"> 210+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Projects Deliver </h6>
            </div>
          </div>

          <div
            className={`w-full flex justify-center items-center overflow-hidden md:w-1/5`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
            <div className={` ${styles.iconboxbg} border-2 flex rounded-full h-24 w-24`}>
                <WorkIcon  style={{ color: "#ffff", fontSize: 50 }}  className="m-auto"  />
               </div>
              <h6 className="text-4xl py-2 text-gray-600"> 198+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Happy Clients </h6>
            </div>
          </div>

          <div
            className={`w-full flex justify-center items-center overflow-hidden md:w-1/5`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
            <div className={` ${styles.iconboxbg} border-2 flex rounded-full h-24 w-24`}>
                <WorkIcon  style={{ color: "#ffff", fontSize: 50 }}  className="m-auto"  />
                </div>
              <h6 className="text-4xl py-2 text-gray-600"> 4+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Offices </h6>
            </div>
          </div>

          <div
            className={`w-full flex justify-center items-center overflow-hidden md:w-1/5`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
            <div className={` ${styles.iconboxbg} border-2 flex rounded-full m-auto h-24 w-24`}>
                <WorkIcon  style={{ color: "#ffff", fontSize: 50 }}  className="m-auto"  />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 18+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Top-notch CRM tools </h6>
            </div> 
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden ">
          <div
            className={` ${styles.innerpagecon} w-full overflow-hidden md:w-full `}
          >
            <div className="flex flex-wrap overflow-hidden ">
              <div
                className={`w-full md:pr-6 overflow-hidden md:w-1/2  ${styles.visionbg} `}
              ></div>
              <div className={`w-full bg-gray-100 md:pl-10 pl-8 pr-6 pt-16 md:pr-28 items-center  md:py-24 overflow-hidden md:w-1/2 `}>
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>
                    Our Vision{" "}
                  </h2>
                </div>
                <p>
                  Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively. Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap overflow-hidden ">
            <div className={`w-full bg-gray-100 md:pl-28 pl-8 pt-10 pb-10 pr-6 md:pr-10 items-center md:py-24 overflow-hidden md:w-1/2 `}>
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>
                    Our Mission{" "}
                  </h2>
                </div>
              <p>
                  Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively. Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively.
                </p>                
              </div>
              <div
                className={`w-full pr-6 overflow-hidden md:w-1/2  ${styles.missionbg} `}
              ></div>              
            </div>
          </div>
        </div>
        <div className={` ${styles.bggray100} flex px-2 md:px-28 md:py-24 flex-wrap overflow-hidden `}>
          <div
            className={` ${styles.innerpagecon} w-full overflow-hidden md:w-full `}
          >
            <div className="flex flex-wrap items-center overflow-hidden ">
            <div
                className="w-full md:pr-6 overflow-hidden md:w-1/2">
                  <div className={` ${styles.counter} `}>
                      <Image
                        src={require("@/assets/images/about/core-value.png")}
                        alt="Aladinn Tech"
                        layout="fill"
                        layout="responsive"
                      />
                      <div className={`items-center flex ${styles.counterimg} `}>
                          <div className="m-auto">                      
                            <Image
                              src={require("@/assets/images/logo/logo.png")}
                              alt="Aladinn Tech"
                            />
                          </div>
                      </div>
                  </div>
                </div>
             <div className={`w-full md:px-6 pt-16 m-auto overflow-hidden md:w-1/2 `}>
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>
                    Core Value{" "}
                  </h2>
                </div>
                <p>
                  Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively. Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively.
                </p>
              <div className="flex flex-wrap overflow-hidden ">
                <div className={`w-full overflow-hidden md:w-1/2 `}>
                <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp;Cost effective
                  </p>
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp;Business consistency
                  </p>
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Increase efficiency
                  </p>
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Extended access & usage
                  </p>
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Remote Monitoring
                  </p>
                </div>
                
                <div className={`w-full overflow-hidden md:w-1/2 `}>
                <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp;Cost effective
                  </p>
                  
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp;Business consistency
                  </p>                  
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Increase efficiency
                  </p>                  
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Extended access & usage
                  </p>                  
                  <p
                    className="flex text-base font-medium text-gray-600 mb-2"
                  >
                    <CheckCircleIcon
                      className="fill-current stroke-2 text-gray-600"
                    />
                    &nbsp; Remote Monitoring
                  </p>                  
                </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden md:py-24 md:px-28">
          <div
            className={` ${styles.innerpagecon} w-full overflow-hidden md:w-full `}
          >
            <div className="flex flex-wrap overflow-hidden ">
              <div
                className="w-full overflow-hidden md:w-1/2">
                    <Image
                    src={require("@/assets/images/about/team.jpg")}
                    alt="Aladinn Tech"
                    layout="fill"
                    layout="responsive"
                  />
              </div>
              <div className={`w-full md:pl-10 pl-8 pr-6 pt-16 m-auto items-center overflow-hidden md:w-1/2 `}>
              <div className={` ${styles.teambox} `}>
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>
                  <h2 className={` ${styles.titlesubmain} ${styles.teamtitlesubmain}`}>
                    Our Team
                  </h2>
                </div>
                <div className={` ${styles.teamboxcontent} `}>
                <p>
                  Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively. Performance Tracking is done on a daily, weekly, and monthly
                  basis to ensure tasks planned are done as per the schedule and
                  further planning for future activities can be done
                  effectively.
                </p>
                </div>
                <div className={` ${styles.discover} `}>
                  <a href="/">Discover the project</a>
                  <span className={`${styles.discoverspan} `}></span>
                </div>
              </div>
              </div>              
            </div>
            <div className="flex md:pt-20 flex-wrap overflow-hidden ">
              <div className="my-1 px-2 text-center w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden">
                <div
                  className="w-full overflow-hidden md:mb-4 wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <Image
                    src={require("@/assets/images/teams/1.jpg")}
                    alt="Aladinn Tech"
                    width="300"
                    height="300"
                  />
                  <h5 className="font-bold text-center text-gray-600 text-xl my-2">
                  Mr. Ravi Kumar
                  </h5>                  
                  <h5 className="font-normal text-center italic text-base my-2">
                   Sr. Developer
                  </h5>
                </div>                
              </div>
              <div className="my-1 px-2 text-center w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden">
                <div
                  className="w-full overflow-hidden md:mb-4 wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <Image
                    src={require("@/assets/images/teams/2.jpg")}
                    alt="Aladinn Tech"
                    layout="fill"
                    layout="responsive"
                  />
                  <h5 className="font-bold text-center text-gray-600 text-xl my-2">
                    Mr. Vishal Singh
                  </h5>                  
                  <h5 className="font-normal text-center italic  text-base my-2">
                   Sr. Developer
                  </h5>
                </div>                
              </div>
              <div className="my-1 px-2 text-center w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden">
                <div
                  className="w-full overflow-hidden md:mb-4 wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <Image
                    src={require("@/assets/images/teams/1.jpg")}
                    alt="Aladinn Tech"
                    layout="fill"
                    layout="responsive"
                  />
                  <h5 className="font-bold text-center text-gray-600 text-xl my-2">
                  Mr. Ravi Kumar
                  </h5>                  
                  <h5 className="font-normal text-center italic  text-base my-2">
                   Sr. Developer
                  </h5>
                </div>                
              </div>

              <div className="my-1 px-2 text-center w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden">
                <div
                  className="w-full overflow-hidden md:mb-4 wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <Image
                    src={require("@/assets/images/teams/2.jpg")}
                    alt="Aladinn Tech"
                    layout="fill"
                    layout="responsive"
                  />
                  <h5 className="font-bold text-center text-xl text-gray-600 my-2">
                    Mr. Vishal Singh
                  </h5>                  
                  <h5 className="font-normal text-center italic  text-base my-2">
                   Sr. Developer
                  </h5>
                </div>
              </div>
              </div>            
          </div>
        </div>
        <div className={`md:px-28 md:pt-10 md:pb-10 ${styles.bglightblue}`}>
          <div className="flex flex-wrap overflow-hidden ">
          <h2 className={`text-center ${styles.titleheading1} `}>
            What ALDS Does for you?
          </h2>
          </div>
          <div className="flex flex-wrap items-center pb-8 overflow-hidden ">
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div className=" hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">                    
                    <div className={`overflow-hidden text-right md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Idea & Analysis
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                    <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">                    
                    <div className={`overflow-hidden text-right md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Designing{" "}
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                    <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center text-right overflow-hidden">                    
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        SEO Marketing
                        </h6>
                        <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                    <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div className="mx-2 my-4 px-4 py-2 wow fadeInUp" data-wow-delay="0.2s">
                <div className={` ${styles.scaletransform} `}>
                  <Image
                    src={require("@/assets/images/about/alds-mid.png")}
                    alt="Aladinn Tech"
                    layout="fill"
                    layout="responsive"
                  />
                  </div>  
              </div>              
            </div>
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div className="mx-2 hover:bg-white hover:shadow-lg my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                  <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>                        
                        Development
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                  <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Lunching
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                  <div className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}>
                    <GroupsIcon  style={{ color: "#1f2471", fontSize: 50 }}  className="m-auto" />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        {" "}
                        Research
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                      Praesent tincidunt congue est ut hendrerit ellentesque eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
        
        <div className="flex flex-wrap overflow-hidden ">           
            <div className={`w-full md:px-28 md:py-10 px-2 items-center overflow-hidden`}>
            <h2 className={`text-center ${styles.titleheading1} `}>
              ALDS Technologies
            </h2>
                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 120,
                  }}
                >
                <Tabs
                  orientation="horizontal"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="horizontal tabs example"
                  className={`${styles.appbardesign}`}
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab
                  icon={<InstallMobileIcon style={{ fontSize: 30 }} />}
                    label="MOBILE DEVELOPMENT"
                    {...a11yProps(0)}
                    className={` ${styles.depbord}`}
                    style={{
                      backgroundColor:
                        value === 0 ? "#efefef " : "transparent",
                    }}
                  />
                  <Tab
                  icon={<ComputerIcon style={{ fontSize: 30 }} />}
                    label="WEB DEVELOPMENT"
                    {...a11yProps(1)}
                    className={` ${styles.depbord}`}
                    style={{
                      backgroundColor:
                        value === 1 ? "#efefef " : "transparent",
                    }}
                  />
                  <Tab
                  icon={<ViewCompactIcon style={{ fontSize: 30 }} />}
                    label="CMS DEVELOPMENT"
                    {...a11yProps(2)}
                    className={` ${styles.depbord}`}
                    style={{
                      backgroundColor:
                        value === 2 ? "#efefef " : "transparent",
                    }}
                  />
                  <Tab
                  icon={<ViewComfyIcon style={{ fontSize: 30 }} />}
                    label="CUSTOMISED SOLUTIONS"
                    {...a11yProps(3)}
                    className={` ${styles.depbord}`}
                    style={{
                      backgroundColor:
                        value === 3 ? "#efefef " : "transparent",
                    }}
                  />
                </Tabs>
              </Box> 
              <div className="w-full overflow-hidden">
                  <TabPanel value={value} index={0}>
                  <div className="flex flex-wrap items-center overflow-hidden ">                      
                      <div className={`w-full overflow-hidden px-4  md:w-3/5 `}>
                          <div className={` ${styles.titlesubcontainer} `}>                            
                            <h2 className={` ${styles.titlesubmain} `}>
                            Mobile Development
                            </h2>
                          </div>
                          <p>
                            Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively. Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively.
                          </p>
                          <div className="flex flex-wrap overflow-hidden ">
                            <div className={`w-full overflow-hidden`}>
                            <p
                              className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                              data-wow-delay="0.7s"
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Cost effective:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Business consistency
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp; Increase efficiency:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            
                          </div>                         
                          </div>
                        </div>   
                        <div className="w-full overflow-hidden md:w-2/5">
                            <div className={` ${styles.counter} `}>
                                <Image
                                  src={require("@/assets/images/about/digital-experience.png")}
                                  alt="Aladinn Tech"
                                  width="490"
                                  height="465"
                                />
                            </div>
                        </div>           
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <div className="flex flex-wrap items-center overflow-hidden ">                      
                      <div className={`w-full overflow-hidden px-4  md:w-3/5 `}>
                          <div className={` ${styles.titlesubcontainer} `}>                            
                            <h2 className={` ${styles.titlesubmain} `}>
                            Web Development
                            </h2>
                          </div>
                          <p>
                            Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively. Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively.
                          </p>
                          <div className="flex flex-wrap overflow-hidden ">
                            <div className={`w-full overflow-hidden`}>
                            <p
                              className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                              data-wow-delay="0.7s"
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Cost effective:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Business consistency
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp; Increase efficiency:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            
                          </div>                       
                          </div>
                        </div>   
                        <div className="w-full overflow-hidden md:w-2/5">
                            <div className={` ${styles.counter} `}>
                                <Image
                                  src={require("@/assets/images/about/digital-experience.png")}
                                  alt="Aladinn Tech"
                                  width="490"
                                  height="465"
                                />
                            </div>
                        </div>           
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  <div className="flex flex-wrap items-center overflow-hidden ">                      
                      <div className={`w-full overflow-hidden px-4  md:w-3/5 `}>
                          <div className={` ${styles.titlesubcontainer} `}>                            
                            <h2 className={` ${styles.titlesubmain} `}>
                            CMS Development
                            </h2>
                          </div>
                          <p>
                            Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively. Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively.
                          </p>
                          <div className="flex flex-wrap overflow-hidden ">
                            <div className={`w-full overflow-hidden`}>
                            <p
                              className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                              data-wow-delay="0.7s"
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Cost effective:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Business consistency
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp; Increase efficiency:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            
                          </div>                         
                          </div>
                        </div>   
                        <div className="w-full overflow-hidden md:w-2/5">
                            <div className={` ${styles.counter} `}>
                                <Image
                                  src={require("@/assets/images/about/digital-experience.png")}
                                  alt="Aladinn Tech"
                                  width="490"
                                  height="465"
                                />
                            </div>
                        </div>           
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  <div className="flex flex-wrap items-center overflow-hidden ">                      
                      <div className={`w-full overflow-hidden px-4  md:w-3/5 `}>
                          <div className={` ${styles.titlesubcontainer} `}>                            
                            <h2 className={` ${styles.titlesubmain} `}>
                               Customised Solutions
                            </h2>
                          </div>
                          <p>
                            Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively. Performance Tracking is done on a daily, weekly, and monthly
                            basis to ensure tasks planned are done as per the schedule and
                            further planning for future activities can be done
                            effectively.
                          </p>
                          <div className="flex flex-wrap overflow-hidden ">
                            <div className={`w-full overflow-hidden`}>
                            <p
                              className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                              data-wow-delay="0.7s"
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Cost effective:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp;Business consistency
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            <p
                              className="flex text-xl font-medium text-blue-900 mb-2 "
                            >
                              <CheckCircleIcon
                                className="fill-current stroke-2 text-blue-900" style={{ fontSize: 30 }}
                              />
                              &nbsp; Increase efficiency:
                            </p>
                            <p className="text-base font-normal mb-4 text-gray-600 pl-8">Electronic data storage, remote analysis &amp; monitoring services and simplification of complex operations increase efficiency and significantly reduce healthcare service costs.</p>
                            
                          </div>                        
                          </div>
                        </div>   
                        <div className="w-full overflow-hidden md:w-2/5">
                            <div className={` ${styles.counter} `}>
                                <Image
                                  src={require("@/assets/images/about/digital-experience.png")}
                                  alt="Aladinn Tech"
                                  width="490"
                                  height="465"
                                />
                            </div>
                        </div>           
                    </div>
                  </TabPanel>
                </div>            
              </div>            
            </div>
          </div>        
        </div>
  );
}
