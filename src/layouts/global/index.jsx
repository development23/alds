import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import bigLogoImage from "@/assets/images/logo/bigLogo.png";
import logoImage from "@/assets/images/logo/logo.png";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDown";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { motion } from "framer-motion";

//Tabs
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//Icons

import aboutLogo1 from "@/assets/images/logo/logo.png";
import aboutLogo from "@/assets/images/logo/logo.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Layout({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const router = useRouter();
  const list = { initial: { opacity: 0 }, animate: { opacity: 1 } };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBG, setHeaderBG] = useState(0);
  const [headerBGColor, setHeaderBGColor] = useState("#ffffffb3");
  const [logo, setLogo] = useState(bigLogoImage);
  const [linkColor, setLinkColor] = useState("#ffffffb3");
  const item = {
    hidden: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div className="relative">
      <header
        className={styles.header}
        style={{ top: headerBG, backgroundColor: headerBGColor }}
      >
        <nav className=" flex items-center flex-wrap border-b-1 ">
          <div className="md:w-1/5 md:pt-2  xl:px-6 ">
            <Link href="/">
              <a className="md:pl-4">
                <Image src={logoImage} alt="" />
              </a>
            </Link>
          </div>
          <button
            className="inline-flex p-3 mr-4 hover:bg-blue-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${styles.mobilemenu}  ${
              active ? "" : "hidden"
            } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full  flex flex-col lg:h-auto">
              <a href="#">
                <div className="border-b px-2 py-2">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Why ALDS <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <a href="about-us">
                       Company Profile
                      </a>
                      <a href="testimonials">
                       Testimonials
                      </a>

                      <a href="our-blogs">
                        Blogs
                      </a>

                      {/* <a href="">
                        FAQs
                      </a> */}
                    </div>
                  </a>
                </div>
              </a>

              <a href="#">
                <div className="border-b px-2 py-2">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Services
                    <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}  ${styles.serviceheader}`}
                      onClick={() => setActive(false)}
                    >
                      <div className="flex">
                        <div className="w-full overflow-hidden">
                        <a className="text-xl text-gray-600 font-bold">APPLICATION DEVELOPMENT</a>
                        <a className="text-lg text-gray-600 font-bold">CROSS PLATFORM</a>
                        
                        <a href="react-native">
                            React Native
                          </a>
                          <a href="flutter">
                           Flutter
                          </a>

                          <a href="ionic-development">
                           Ionic
                          </a>

                          {/* <a href="ios-platform">
                           iOS Platform
                          </a>
                          <a href="android-platform">
                            Android Platform
                          </a>

                          <a href="xamarin">
                           Xamarin
                          </a>                      

                          <a href="hybrid-app-development">
                            Hybrid 
                          </a>

                          <a href="cross-platform-development">
                            Cross-Platform
                          </a> */}

                          {/* <a href="">
                            IOT (Internet of Things)
                          </a>

                          <a href="">
                           Wearable
                          </a> */}
                          <a className="text-lg text-gray-600 font-bold">NATIVE DEVELOPMENT</a>
                          <a href="android-platform">
                            Android Development
                          </a>
                          <a href="ios-platform">
                           iOS Development
                          </a>                         
                          {/* <a href="mobile-ui-ux">
                            Mobile UI/UX 
                          </a> */}
                          <a className="text-xl text-gray-600 font-bold">FULL STACK / WEB DEVELOPMENT</a>
                          <a className="text-lg text-gray-600 font-bold"> JAVASCRIPT</a>
                          {/*<a href="javascript">
                            JavaScript
                          </a>

                           <a href="">
                           Python
                          </a> */}

                          <a href="angular-development">
                            Angular
                          </a>

                          <a href="node-js">
                            Node.JS
                          </a>

                          <a href="react-development">
                           React.JS
                          </a>

                          {/* <a href="">
                           Vue.JS
                          </a> */}
                          <a className="text-lg text-gray-600 font-bold"> PHP</a>
                          <a href="laravel">
                            Laravel
                          </a>

                          {/* <a href="">
                            CodeIgnitor
                          </a>

                          <a href="">
                           MEAN Stack 
                          </a> 

                          <a href="full-stack">
                            Full Stack
                          </a>

                          <a href="web-app">
                           Web App
                          </a>
                          <a href="mobile-ui-ux">
                            Mobile UI/UX 
                          </a>
                          <a href="website-ui-ux">
                           Website UI/UX
                          </a>

                          {/* <a href="">
                           Shopify 
                          </a>

                          <a href="">
                            Magento
                          </a>

                          <a href="">
                           Joomla 
                          </a>

                          <a href="">
                            WordPress 
                          </a>

                          <a href="">
                           Opencart
                          </a> */}
                          <a className="text-xl text-gray-600 font-bold">WEB DESIGNING</a>
                          <a href="mobile-ui-ux">
                            Mobile UI/UX 
                          </a>
                          <a href="website-ui-ux">
                           Website UI/UX
                          </a>
                          <a className="text-xl text-gray-600 font-bold">CUSTOMISED SOLUTIONS</a>
                          <a href="crm">
                          Customer Relationship Management
                          </a>

                          <a href="emr-ehr-pmr">
                           EMR/EHR/PMR 
                          </a>

                          <a href="telemedicine">
                            Telemedicine
                          </a>

                          {/* <a href="">
                            B2B, B2C Solutions
                          </a> */}

                          <a href="service-portals">
                            Service Portals
                          </a>

                          <a href="ai-based-solutions">
                            AI Based Solutions
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </a>

              <a href="#">
                <div className="border-b px-2 py-2">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Industries <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      {/* <a href="">
                        Healthcare & Fitness
                      </a> */}
                      <a href="banking-and-finance">
                       Banking & Finance
                      </a>

                      <a href="real-estate-and-housing">
                        Real Estate & Housing
                      </a>

                      <a href="education-sector">
                       Education Sector
                      </a>

                      <a href="hospitality-and-tourism">
                        Hospitality & Tourism
                      </a>

                      {/* <a href=" ">
                        Fashion & Lifestyle
                      </a> */}

                      <a href="events-and-entertainment">
                        Events & Entertainment
                      </a>
                    </div>
                  </a>
                </div>
              </a>

              <a href="casestudies">
                <div
                  className="border-b px-2 py-2"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Portfolio
                  </a>
                </div>
              </a>

              <a href="career">
                <div
                  className="border-b px-2 py-2"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Career
                  </a>
                </div>
              </a>

              <a href="contact-us">
                <div
                  className="border-b px-2 py-2"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Get in Touch
                  </a>
                </div>
              </a>

              {/* <a href="#">
                <div className="border-b px-2 py-1">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Contact Us
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <a href="/contact-us">
                        <a>Contact Now</a>
                      </a>
                      <a href="">
                        <a>Start Your Porject</a>
                      </a>
                    </div>
                  </a>
                </div>
              </a> */}
            </div>
          </div>

          <div
            className={` ${styles.bgs} w-full md:pt-6 md:w-4/5 flex flex-wrap overflow-hidden `}
          >
            <div
              className={`${styles.menu} w-full md:w-4/5 xl:px-6 
            ${active ? "" : "hidden"}   lg:inline-flex`}
            >
              <div
                className={` ${styles.mobide} lg:inline-flex list-none lg:flex-row   lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto `}
              >
                {/* <li className={styles.dropdown}>
                  <a href="">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Home
                    </a>
                  </a>
                </li> */}

                <li className={styles.dropdown}>
                  <a
                    className={
                      " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                    }
                  >
                    Why ALDS <ArrowDownIcon />
                  </a>

                  <div
                    className={`${styles.dropdowncontent} ${styles.whydropdowncontent} `}
                  >
                    <div
                      className={`${styles.dropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                    >
                      <div className="md:w-1/2 overflow-hidden">
                        <ul className={styles.bottomside}>
                          <li className="border-b hover:bg-gray-100">
                            <a href="about-us">
                              <a>
                              <ArrowRightIcon />
                                <span> Company Profile </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="testimonials">
                              <a>
                              <ArrowRightIcon />
                                <span>Testimonials </span>
                              </a>
                            </a>
                          </li>

                          <li className="border-b hover:bg-gray-100">
                            <a href="our-blogs">
                              <a>
                              <ArrowRightIcon />
                                <span> Blogs </span>
                              </a>
                            </a>
                          </li>
                          {/* <li className="border-b hover:bg-gray-100">
                            <a href="">
                              <a>
                              <ArrowRightIcon />
                                <span> FAQs </span>
                              </a>
                            </a>
                          </li> */}
                        </ul>
                      </div>
                      <div className="md:w-1/2 overflow-hidden ">
                        <Image
                          src={require("@/assets/images/header/2.jpg")}
                          alt="Aladinn Tech"
                          width="450"
                          height="215"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className={styles.dropdown}>
                  <a
                    className={
                      " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                    }
                  >
                    Services <ArrowDownIcon />
                  </a>

                  <div className={styles.dropdowncontent}>
                    <div
                      className={`${styles.dropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                    >
                      <div className="w-1/2 overflow-hidden">
                        <ul className={styles.bottomside}>
                          <li className="border-b hover:bg-gray-100">
                            <a href="/cross-platform-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Cross Platform App Development </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="/customized-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span>Customized Application Development </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="/web-design-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Website Design & Development </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="/web-application-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Web Application Development </span>
                              </a>
                            </a>
                          </li>
                          <li className="hover:bg-gray-100">
                            <a href="/ai-powered-chatbots">
                              <a>
                                <ArrowRightIcon />
                                <span> AI Powered Chatbots </span>
                              </a>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="w-1/2 overflow-hidden bg-gray-500">
                        <Image
                          src={require("@/assets/images/header/services.gif")}
                          alt="Aladinn Tech"
                          layout="fill"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </li> */}

                <li className={styles.dropdown}>
                  <a
                    className={
                      " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                    }
                  >
                    Services <ArrowDownIcon />
                  </a>

                  <div
                    className={`${styles.dropdowncontent} ${styles.wthdropdowncontent} `}
                  >
                    <div
                      className={`${styles.dropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                    >
                      <div className="w-1/5 overflow-hidden">
                        <Box
                          sx={{
                            flexGrow: 1,
                            bgcolor: "background.paper",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 250,
                          }}
                        >
                          <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={`${styles.appbardesign}`}
                            sx={{ borderRight: 1, borderColor: "divider" }}
                          >
                            <Tab
                              label="APPLICATION DEVELOPMENT"
                              {...a11yProps(0)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 0 ? "#efefef " : "transparent",
                              }}
                            />
                            <Tab
                              label="FULL STACK / WEB DEVELOPMENT"
                              {...a11yProps(1)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 1 ? "#efefef " : "transparent",
                              }}
                            />
                            <Tab
                              label="WEB DESIGNING"
                              {...a11yProps(2)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 2 ? "#efefef " : "transparent",
                              }}
                            /> 
                            <Tab
                              label="CUSTOMISED SOLUTIONS"
                              {...a11yProps(3)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 3 ? "#efefef " : "transparent",
                              }}
                            />
                            {/* <Tab
                              label="AI DEVELOPMENT"
                              {...a11yProps(4)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 4 ? "#efefef " : "transparent",
                              }}
                            /> */}
                          </Tabs>
                        </Box>
                      </div>

                      <div className="w-4/5 overflow-hidden">
                        <TabPanel value={value} index={0}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/3 overflow-hidden px-4">
                            <a className="text-xl text-gray-600 font-bold border-b py-2 pt-4 hover:bg-gray-100">CROSS PLATFORM</a>
                              <ul className={`${styles.bottomside1} `}>
                              <li className="border-b hover:bg-gray-100">
                                  <a href="react-native">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>React Native</span>
                                    </a>
                                  </a>
                                </li>                                
                                <li className="border-b hover:bg-gray-100">
                                  <a href="flutter">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Flutter </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="ionic-development">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Ionic</span>
                                    </a>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden  px-4">
                            <a className="text-xl text-gray-600 font-bold border-b py-2 pt-4 hover:bg-gray-100">NATIVE DEVELOPMENT</a>
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="android-platform">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Android Development</span>
                                    </a>
                                  </a>
                                </li>
                               
                                <li className="border-b hover:bg-gray-100">
                                  <a href="ios-platform">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> iOS Development </span>
                                    </a>
                                  </a>
                                </li>
                              {/* <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>IOT (Internet of Things)</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Wearable</span>
                                    </a>
                                  </a>
                                </li> 
                                <li className="border-b hover:bg-gray-100">
                                  <a href="mobile-ui-ux">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Mobile UI/UX </span>
                                    </a>
                                  </a>
                                </li> */}
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/mobile.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="240"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/3 overflow-hidden px-4">
                            <a className="text-xl text-gray-600 font-bold border-b py-2 pt-4 hover:bg-gray-100">JAVASCRIPT</a>
                              <ul className={`${styles.bottomside1}`}>
                                 {/*<li className="border-b hover:bg-gray-100">
                                  <a href="javascript">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> JavaScript </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Python</span>
                                    </a>
                                  </a>
                                </li> */}
                                <li className="border-b hover:bg-gray-100">
                                  <a href="angular-development">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Angular</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="node-js">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Node.JS </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="react-development">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> React.JS </span>
                                    </a>
                                  </a>
                                </li>
                                {/* <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Vue.JS </span>
                                    </a>
                                  </a>
                                </li> */}
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden px-4">
                            <a className="text-xl text-gray-600 font-bold border-b py-2 pt-4 hover:bg-gray-100">PHP</a>
                              <ul className={`${styles.bottomside1}`}>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="laravel">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Laravel </span>
                                    </a>
                                  </a>
                                </li>
                                {/* <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> CodeIgnitor </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> MEAN Stack </span>
                                    </a>
                                  </a>
                                </li> 
                                <li className="border-b hover:bg-gray-100">
                                  <a href="full-stack">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Full Stack</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="web-app">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Web App</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="website-ui-ux">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Website UI/UX </span>
                                    </a>
                                  </a>
                                </li>*/}
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/2.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="240"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-2/5 overflow-hidden pt-2 px-4">
                              <ul className={`${styles.bottomside1}`}>
                              <li className="border-b hover:bg-gray-100">
                                  <a href="mobile-ui-ux">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Mobile UI/UX </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="website-ui-ux">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Website UI/UX </span>
                                    </a>
                                  </a>
                                </li>
                                {/* <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Joomla Development</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> WordPress Development </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Opencart Development</span>
                                    </a>
                                  </a>
                                </li> */}
                              </ul>
                            </div>
                            <div className="w-3/5 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/web-designing.jpg")}
                                alt="Aladinn Tech"
                                width="550"
                                height="240"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-2/5 overflow-hidden  pt-2 px-4">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="crm">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Customer Relationship Management </span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="emr-ehr-pmr">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>EMR/EHR/PMR</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="telemedicine">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Telemedicine</span>
                                    </a>
                                  </a>
                                </li>
                                {/* <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> B2B, B2C Solutions</span>
                                    </a>
                                  </a>
                                </li> */}
                                <li className="border-b hover:bg-gray-100">
                                  <a href="service-portals">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Service Portals</span>
                                    </a>
                                  </a>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="ai-based-solutions">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> AI Based Solutions</span>
                                    </a>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-3/5 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/crm.gif")}
                                alt="Aladinn Tech"
                                width="500"
                                height="250"
                              />
                            </div>
                          </div>
                        </TabPanel>

                        {/* <TabPanel value={value} index={4}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/2 overflow-hidden">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <a href="">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Chatbots </span>
                                    </a>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 overflow-hidden ">
                              <Image
                                src={require("@/assets/images/header/ai.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="300"
                              />
                            </div>
                          </div>
                        </TabPanel> */}
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.dropdown}>
                  <a
                    className={
                      " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                    }
                  >
                    Industries <ArrowDownIcon />
                  </a>

                  <div className={styles.dropdowncontent}>
                    <div
                      className={`${styles.dropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                    >
                      <div className="w-1/2 overflow-hidden">
                        <ul className={styles.bottomside}>
                          {/* <li className="border-b hover:bg-gray-100">
                            <a href="">
                              <a>
                                <ArrowRightIcon />
                                <span> Healthcare & Fitness </span>
                              </a>
                            </a>
                          </li> */}
                          <li className="border-b hover:bg-gray-100">
                            <a href="banking-and-finance">
                              <a>
                                <ArrowRightIcon />
                                <span>Banking & Finance </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="real-estate-and-housing">
                              <a>
                                <ArrowRightIcon />
                                <span> Real Estate & Housing </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="education-sector">
                              <a>
                                <ArrowRightIcon />
                                <span> Education Sector </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="hospitality-and-tourism">
                              <a>
                                <ArrowRightIcon />
                                <span> Hospitality & Tourism </span>
                              </a>
                            </a>
                          </li>
                          {/* <li className="border-b hover:bg-gray-100">
                            <a href="">
                              <a>
                                <ArrowRightIcon />
                                <span> Fashion & Lifestyle </span>
                              </a>
                            </a>
                          </li> */}
                          <li className="hover:bg-gray-100">
                            <a href="events-and-entertainment">
                              <a>
                                <ArrowRightIcon />
                                <span> Events & Entertainment </span>
                              </a>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="w-1/2 overflow-hidden">
                        <Image
                          src={require("@/assets/images/header/services.gif")}
                          alt="Aladinn Tech"
                          width="350"
                          height="280"
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.dropdown}>
                  <a href="casestudies">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Portfolio
                    </a>
                  </a>
                </li>
                <li className={styles.dropdown}>
                  <a href="career">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Career
                    </a>
                  </a>
                </li>
                <li className={styles.dropdown}>
                  <a href="contact-us">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Get in Touch
                    </a>
                  </a>
                </li>

                {/* <li className={styles.dropdown}>
                  <a
                    className={
                      " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                    }
                  >
                    Contact Us <ArrowDownIcon />
                  </a>

                  <div className={styles.dropdowncontent}>
                    <div
                      className={`${styles.dropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                    >
                      <div className="w-1/2 overflow-hidden">
                        <ul className={styles.bottomside}>
                          <li className="border-b hover:bg-gray-100">
                            <a href="contact-us">
                              <a>
                                <ArrowRightIcon />
                                <span> Contact Now </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="">
                              <a>
                                <ArrowRightIcon />
                                <span>Start Your Porject </span>
                              </a>
                            </a>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <a href="">
                              <a>
                                <ArrowRightIcon />
                                <span>Apply Now </span>
                              </a>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="w-1/2 overflow-hidden">
                        <Image
                          src={require("@/assets/images/header/contact.jpg")}
                          alt="Aladinn Tech"
                          width="400"
                          height="240"
                        />
                      </div>
                    </div>
                  </div>
                </li> */}

                <li className={styles.dropdown}>
                  <a href="contact-us">
                    <a
                      className={`${styles.dropbtn} ${styles.deskhide} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center `}
                    >
                      Contact Us
                    </a>
                  </a>
                </li>

                <a href="contact-us">
                  <a
                    className={`${styles.mobide}  ${styles.deskhide} ${styles.actionButton}`}
                  >
                    <p className="flex flex-col text-center">Get In Touch</p>
                  </a>
                </a>
              </div>
            </div>
            <div className={` ${styles.mobide} md:w-1/5`}>
              <a
                href="https://en-gb.facebook.com/Aldsaladinn"
                target="_blank"
                rel="noreferrer"
                className={`${styles.newicon}`}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/aladinn-digital-solutions"
                target="_blank"
                rel="noreferrer"
                className={`${styles.newicon}`}
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/aldsaladinn/?hl=en"
                target="_blank"
                rel="noreferrer"
                className={`${styles.newicon}`}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          {/* <div className="md:block hidden">
            <IconButton>
              <SortIcon style={{ fontSize: 42 }} color="primary" />
            </IconButton>
          </div> */}
        </nav>
      </header>
      {children}

      <footer className={` ${styles.footer1} z-10 relative`}>
        <div className="container   px-4 mx-auto">
          <div className="flex flex-wrap overflow-hidden xl:-mx-3">
            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <h3 className={styles.heading}>
                About Us<span className={styles.dividerleft}></span>
              </h3>
              <div>
                <Image
                  src={require("@/assets/images/logo/logofoot.png")}
                  alt="Aladinn Tech"
                  className="mt-6"
                />
                <h2 className="text-normal text-white pt-4">
                  Accelerating Digital Transformation With <br /> New-Age
                  Technology
                </h2>
                <p className="text-normal text-white pt-4">
                  Our exemplary web solutions reflect our technical competence
                  and therefore, customized websites, web applications, mobile
                  apps, chatbots are built to impart the desired growth and
                  success to your business.
                </p>
              </div>
              <div className="w-full flex pt-4 pb-6">
                <div className="">
                  <div className="">
                    <a
                      href="https://www.instagram.com/aldsaladinn/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon style={{ color: "#fff", fontSize: 36 }} />
                    </a>
                  </div>
                </div>
                <div className="ml-3">
                  <a
                    href="https://en-gb.facebook.com/Aldsaladinn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon style={{ color: "#fff", fontSize: 36 }} />
                  </a>
                </div>
                <div className="">
                  <div className="ml-3">
                    <a
                      href="https://www.linkedin.com/company/aladinn-digital-solutions"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon style={{ color: "#fff", fontSize: 36 }} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-3 overflow-hidden w-full">             
              <a
                href="https://www.goodfirms.co/company/aladinn-digital-solutions"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={require("@/assets/images/home/clients/view-profile.svg")}
                  alt="Aladinn Tech"
                />
                </a>
              </div>
            </div>

            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <h3 className={styles.heading}>
                Quick Links <span className={styles.dividerleft}></span>
              </h3>

              <div className="my-3 px-3 overflow-hidden w-full">
                <ul>
                  <li className="pb-4">
                    <a href="about-us">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />
                        About Us
                      </a>
                    </a>
                  </li>

                  <li className="pb-4">
                    <a href="web-design-development">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />
                        Website Design & Development
                      </a>
                    </a>
                  </li>
                  <li className="pb-4">
                    <a href="web-application-development">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Web Application Development
                      </a>
                    </a>
                  </li>
                  <li className="pb-4">
                    <a href="cross-platform-app-development">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Cross Platform Apps
                      </a>
                    </a>
                  </li>
                  <li className="pb-4">
                    <a href="ai-powered-chatbots">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        AI Powered Chatbots
                      </a>
                    </a>
                  </li>
                  <li className="pb-4">
                    <a href="customized-app-development">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Customized Application Development
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <h3 className={styles.heading}>
                Keep in Touch<span className={styles.dividerleft}></span>
              </h3>
              <div>
                <div className="my-3 px-3 overflow-hidden w-full">
                  <ul>
                    <li>
                      <a href="">
                        <a>
                          <CallIcon style={{ color: "#fff", fontSize: 20 }} />{" "}
                          &nbsp; 0141 4001852
                        </a>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <a>
                          <div className="flex flex-wrap overflow-hidden  ">
                            <div className="  overflow-hidden   xl:w-1/12">
                              <Image
                                src={require("@/assets/images/logo/skype.png")}
                                alt="Aladinn Tech"
                              />
                            </div>

                            <div className="  overflow-hidden   xl:w-11/12">
                              (832) 548-5882
                            </div>
                          </div>
                        </a>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <a>
                          <EmailIcon style={{ color: "#fff", fontSize: 20 }} />{" "}
                          &nbsp; development@aladinntech.in
                        </a>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <a>
                          <div className="flex flex-wrap overflow-hidden  ">
                            <div className="  overflow-hidden    w-1/12">
                              <Image
                                src={require("@/assets/images/logo/usa.png")}
                                alt="Aladinn Tech"
                              />
                            </div>

                            <div className="  overflow-hidden    w-11/12">
                              10685-B Hazelhurst Dr. #31618 Houston, TX 77043
                              USA
                            </div>
                          </div>
                        </a>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <a>
                          <div className="flex flex-wrap overflow-hidden  ">
                            <div className="  overflow-hidden    w-1/12">
                              <Image
                                src={require("@/assets/images/logo/india.png")}
                                alt="Aladinn Tech"
                              />
                            </div>

                            <div className="  overflow-hidden   w-11/12">
                              G-2, Parivahan Marg, Behind Hotel <br />
                              Rajmahal Palace, Shivaji Nagar, C Scheme, Ashok
                              Nagar, Jaipur, Rajasthan 302001
                            </div>
                          </div>
                        </a>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="my-3 px-3 overflow-hidden w-full"></div>
                <Image
                  src={require("@/assets/images/logo/footer-map.png")}
                  alt="Aladinn Tech"
                />
              </div>
            </div>

            {/* <div className="my-3 px-3 text-center overflow-hidden w-full">
              <p className="text-white">
                © Copyright 2021 Aladinn Digital Solutions. All Rights Reserved.
              </p>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
