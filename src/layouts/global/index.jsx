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
              <Link href="#">
                <div className="border-b px-2 py-1">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Why ALDS <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <Link href="/">
                        <a>Company Profile</a>
                      </Link>
                      <Link href="/">
                        <a>Testimonials</a>
                      </Link>

                      {/* <Link href="/">
                        <a>Contact Us</a>
                      </Link>

                      <Link href="/">
                        <a>Join Us!</a>
                      </Link> */}

                      <Link href="/">
                        <a>Blogs</a>
                      </Link>

                      <Link href="/">
                        <a>FAQs</a>
                      </Link>
                    </div>
                  </a>
                </div>
              </Link>

              <Link href="#">
                <div className="border-b px-2 py-1">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Services
                    <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <div className="flex flex-wrap">
                        <div className="md:w-1/2 overflow-hidden">
                          <Link href="/">
                            <a>JavaScript</a>
                          </Link>
                          <Link href="/">
                            <a>Python</a>
                          </Link>

                          <Link href="/">
                            <a>Angular</a>
                          </Link>

                          <Link href="/">
                            <a>Node.JS</a>
                          </Link>

                          <Link href="/">
                            <a>React.JS</a>
                          </Link>

                          <Link href="/">
                            <a>Vue.JS</a>
                          </Link>
                          <Link href="/">
                            <a>Laravel </a>
                          </Link>

                          <Link href="/">
                            <a>CodeIgnitor </a>
                          </Link>

                          <Link href="/">
                            <a>MEAN Stack</a>
                          </Link>

                          <Link href="/">
                            <a>MERN Stack</a>
                          </Link>

                          <Link href="/">
                            <a>Full Stack</a>
                          </Link>

                          <Link href="/">
                            <a>Web App</a>
                          </Link>

                          <Link href="/">
                            <a>Website UI/UX </a>
                          </Link>

                          <Link href="/">
                            <a>iOS Platform</a>
                          </Link>

                          <Link href="/">
                            <a>Android Platform</a>
                          </Link>

                          <Link href="/">
                            <a>Xamarin</a>
                          </Link>

                          <Link href="/">
                            <a>Flutter</a>
                          </Link>

                          <Link href="/">
                            <a>React Native</a>
                          </Link>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
                          <Link href="/">
                            <a>Ionic</a>
                          </Link>

                          <Link href="/">
                            <a>Native</a>
                          </Link>

                          <Link href="/">
                            <a>Hybrid</a>
                          </Link>

                          <Link href="/cross-platform-app-development">
                            <a>Cross-Platform</a>
                          </Link>

                          <Link href="/">
                            <a>IOT (Internet of Things)</a>
                          </Link>

                          <Link href="/">
                            <a>Wearable</a>
                          </Link>

                          <Link href="/">
                            <a>Mobile UI/UX </a>
                          </Link>

                          <Link href="/">
                            <a>Shopify</a>
                          </Link>

                          <Link href="/">
                            <a>Magento</a>
                          </Link>

                          <Link href="/">
                            <a>Joomla</a>
                          </Link>

                          <Link href="/">
                            <a>OpenCart</a>
                          </Link>

                          <Link href="/">
                            <a>Wordpress</a>
                          </Link>

                          <Link href="/">
                            <a>CRM </a>
                          </Link>

                          <Link href="/">
                            <a>EMR/EHR/PMR</a>
                          </Link>

                          <Link href="/">
                            <a>Telemedicine</a>
                          </Link>

                          <Link href="/">
                            <a>B2B, B2C Solutions</a>
                          </Link>

                          <Link href="/">
                            <a>Service Portals</a>
                          </Link>

                          <Link href="/">
                            <a>AI Based Solutions</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>

              <Link href="#">
                <div className="border-b px-2 py-1">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Industries <ArrowDownIcon className="right-0 absolute" />
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <Link href="/">
                        <a>Healthcare & Fitness</a>
                      </Link>
                      <Link href="/">
                        <a>Banking & Finance</a>
                      </Link>

                      <Link href="/">
                        <a>Real Estate & Housing</a>
                      </Link>

                      <Link href="/industries/education-sector">
                        <a>Education Sector</a>
                      </Link>

                      <Link href="/">
                        <a>Hospitality & Tourism</a>
                      </Link>

                      <Link href="/">
                        <a>Fashion & Lifestyle</a>
                      </Link>

                      <Link href="/">
                        <a>Events & Entertainment</a>
                      </Link>
                    </div>
                  </a>
                </div>
              </Link>

              <Link href="/casestudies">
                <div
                  className="border-b px-2 py-1"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Portfolio
                  </a>
                </div>
              </Link>

              <Link href="/career">
                <div
                  className="border-b px-2 py-1"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Hire Us
                  </a>
                </div>
              </Link>

              <Link href="/">
                <div
                  className="border-b px-2 py-1"
                  onClick={() => setActive(false)}
                >
                  <a className="lg:inline-flex lg:w-auto w-full py-2 rounded font-bold">
                    Get in Touch
                  </a>
                </div>
              </Link>

              {/* <Link href="#">
                <div className="border-b px-2 py-1">
                  <a
                    className={`lg:inline-flex lg:w-auto w-full rounded font-bold ${styles.mobiledropdown}`}
                  >
                    Contact Us
                    <div
                      className={`${styles.mobiledropdowncontent}`}
                      onClick={() => setActive(false)}
                    >
                      <Link href="/contact-us">
                        <a>Contact Now</a>
                      </Link>
                      <Link href="/">
                        <a>Start Your Porject</a>
                      </Link>
                    </div>
                  </a>
                </div>
              </Link> */}
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
                  <Link href="/">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Home
                    </a>
                  </Link>
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
                            <Link href="about-us">
                              <a>
                                <span> Company Profile </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/">
                              <a>
                                <span>Testimonials </span>
                              </a>
                            </Link>
                          </li>
                          <li
                            className={`${styles.subdropdown} border-b hover:bg-gray-100`}
                          >
                            <a>
                              <span> Resources </span>
                              <ArrowRightIcon />
                            </a>
                            <div
                              className={`${styles.subdropdowncontent} ${styles.whysubdropdowncontent} `}
                            >
                              <div
                                className={`${styles.subdropDowns} flex flex-wrap -mx-1 overflow-hidden`}
                              >
                                <div className="w-full overflow-hidden">
                                  <ul className={styles.bottomside}>
                                    {/* <li className="border-b hover:bg-gray-100">
                                      <Link href="/contact-us">
                                        <a>
                                          <span> Contact us </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li className="border-b hover:bg-gray-100">
                                      <Link href="/">
                                        <a>
                                          <span>Join Us! </span>
                                        </a>
                                      </Link>
                                    </li> */}
                                    <li
                                      className={`${styles.dropdown} border-b hover:bg-gray-100`}
                                    >
                                      <Link href="/">
                                        <a>
                                          <span> Blogs </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li
                                      className={`${styles.dropdown} border-b hover:bg-gray-100`}
                                    >
                                      <Link href="/faqs">
                                        <a>
                                          <span> FAQs </span>
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-1/2 overflow-hidden ">
                        <Image
                          src={require("@/assets/images/header/services.gif")}
                          alt="Aladinn Tech"
                          width="500"
                          height="190"
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
                            <Link href="/cross-platform-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Cross Platform App Development </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/customized-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span>Customized Application Development </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/web-design-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Website Design & Development </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/web-application-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Web Application Development </span>
                              </a>
                            </Link>
                          </li>
                          <li className="hover:bg-gray-100">
                            <Link href="/ai-powered-chatbots">
                              <a>
                                <ArrowRightIcon />
                                <span> AI Powered Chatbots </span>
                              </a>
                            </Link>
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
                              label="MOBILE DEVELOPMENT"
                              {...a11yProps(0)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 0 ? "#efefef " : "transparent",
                              }}
                            />
                            <Tab
                              label="WEB DEVELOPMENT"
                              {...a11yProps(1)}
                              className={` ${styles.depbord}`}
                              style={{
                                backgroundColor:
                                  value === 1 ? "#efefef " : "transparent",
                              }}
                            />
                            <Tab
                              label="CMS DEVELOPMENT"
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
                            <div className="w-1/3 overflow-hidden">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> iOS Platform </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Android Platform</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Xamarin</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Flutter </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>React Native</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Ionic</span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Native</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Hybrid</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/cross-platform-app-development">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Cross-Platform</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>IOT (Internet of Things)</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Wearable</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Mobile UI/UX </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/mobile.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="260"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/3 overflow-hidden">
                              <ul className={`${styles.bottomside1}`}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> JavaScript </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Python</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Angular</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Node.JS </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> React.JS </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Vue.JS </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <ul className={`${styles.bottomside1}`}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Laravel </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> CodeIgnitor </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> MEAN Stack </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Full Stack</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Web App</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Website UI/UX </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/3 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/2.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="260"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/2 overflow-hidden">
                              <ul className={`${styles.bottomside1}`}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Shopify Development</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Magento Development</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Joomla Development</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> WordPress Development </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Opencart Development</span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/3.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="260"
                              />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/2 overflow-hidden">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> CRM </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>EMR/EHR/PMR</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span>Telemedicine</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> B2B, B2C Solutions</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Service Portals</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> AI Based Solutions</span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 overflow-hidden">
                              <Image
                                src={require("@/assets/images/header/frontend.gif")}
                                alt="Aladinn Tech"
                                width="300"
                                height="260"
                              />
                            </div>
                          </div>
                        </TabPanel>

                        {/* <TabPanel value={value} index={4}>
                          <div className="flex flex-wrap -mx-1 overflow-hidden">
                            <div className="w-1/2 overflow-hidden">
                              <ul className={`${styles.bottomside1} `}>
                                <li className="border-b hover:bg-gray-100">
                                  <Link href="/">
                                    <a>
                                      <ArrowRightIcon />
                                      <span> Chatbots </span>
                                    </a>
                                  </Link>
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
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/cross-platform-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Healthcare & Fitness </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/customized-app-development">
                              <a>
                                <ArrowRightIcon />
                                <span>Banking & Finance </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/web-design-development">
                              <a>
                                <ArrowRightIcon />
                                <span> Real Estate & Housing </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/industries/education-sector">
                              <a>
                                <ArrowRightIcon />
                                <span> Education Sector </span>
                              </a>
                            </Link>
                          </li>
                          <li className="hover:bg-gray-100">
                            <Link href="/ai-powered-chatbots">
                              <a>
                                <ArrowRightIcon />
                                <span> Hospitality & Tourism </span>
                              </a>
                            </Link>
                          </li>
                          <li className="hover:bg-gray-100">
                            <Link href="/ai-powered-chatbots">
                              <a>
                                <ArrowRightIcon />
                                <span> Fashion & Lifestyle </span>
                              </a>
                            </Link>
                          </li>
                          <li className="hover:bg-gray-100">
                            <Link href="/ai-powered-chatbots">
                              <a>
                                <ArrowRightIcon />
                                <span> Events & Entertainment </span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="w-1/2 overflow-hidden">
                        <Image
                          src={require("@/assets/images/header/services.gif")}
                          alt="Aladinn Tech"
                          width="450"
                          height="460"
                        />
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
                    Portfolio
                  </a>
                </li>
                <li className={styles.dropdown}>
                  <Link href="career">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Hire Us
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdown}>
                  <Link href="/">
                    <a
                      className={
                        " ${styles.dropbtn} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center"
                      }
                    >
                      Get in Touch
                    </a>
                  </Link>
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
                            <Link href="contact-us">
                              <a>
                                <ArrowRightIcon />
                                <span> Contact Now </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/">
                              <a>
                                <ArrowRightIcon />
                                <span>Start Your Porject </span>
                              </a>
                            </Link>
                          </li>
                          <li className="border-b hover:bg-gray-100">
                            <Link href="/">
                              <a>
                                <ArrowRightIcon />
                                <span>Apply Now </span>
                              </a>
                            </Link>
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
                  <Link href="faqs">
                    <a
                      className={`${styles.dropbtn} ${styles.deskhide} lg:inline-flex lg:w-auto w-full px-2 py-2 font-bold items-start justify-start md:items-center md:justify-center `}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>

                <Link href="contact-us">
                  <a
                    className={`${styles.mobide}  ${styles.deskhide} ${styles.actionButton}`}
                  >
                    <p className="flex flex-col text-center">Get In Touch</p>
                  </a>
                </Link>
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
            </div>

            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <h3 className={styles.heading}>
                Quick Links <span className={styles.dividerleft}></span>
              </h3>

              <div className="my-3 px-3 overflow-hidden w-full">
                <ul>
                  <li className="pb-4">
                    <Link href="about-us">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />
                        About Us
                      </a>
                    </Link>
                  </li>

                  <li className="pb-4">
                    <Link href="about-us">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />
                        Website Design & Development
                      </a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="other-centers">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Web Application Development
                      </a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="faq-s">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Cross Platform Apps
                      </a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/about-us">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        AI Powered Chatbots
                      </a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="privacy-policy">
                      <a>
                        <ArrowForwardIosIcon
                          style={{ color: "#fff", fontSize: 20 }}
                        />{" "}
                        Customized Application Development
                      </a>
                    </Link>
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
                      <Link href="">
                        <a>
                          <CallIcon style={{ color: "#fff", fontSize: 20 }} />{" "}
                          &nbsp; 0141 4001852
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
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
                      </Link>
                    </li>

                    <li>
                      <Link href="">
                        <a>
                          <EmailIcon style={{ color: "#fff", fontSize: 20 }} />{" "}
                          &nbsp; development@aladinntech.in
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
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
                      </Link>
                    </li>
                    <li>
                      <Link href="">
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
                      </Link>
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
