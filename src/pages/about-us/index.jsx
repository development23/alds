import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import BrushIcon from "@material-ui/icons/Brush";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SearchIcon from "@material-ui/icons/Search";
import GroupsIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import StarsSharpIcon from "@material-ui/icons/StarsSharp";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InstallMobileIcon from "@material-ui/icons/MobileFriendly";
import ComputerIcon from "@material-ui/icons/Computer";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

//Our Values images
import ourvalues1 from "@/assets/images/values/1.png";
import ourvalues2 from "@/assets/images/values/2.png";
import ourvalues3 from "@/assets/images/values/3.png";
import ourvalues4 from "@/assets/images/values/4.png";
import ourvalues5 from "@/assets/images/values/5.png";
import ourvalues6 from "@/assets/images/values/6.png";

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

  const ourvalues = [
    {
      id: 0,
      image: ourvalues1,
      title: "Customer Satisfaction",
      description:
        "At ALDS, we are driven by an unwavering commitment to drive maximum customer satisfaction. We dont believe in awards, client satisfaction is our biggest achievement.  ",
    },
    {
      id: 1,
      image: ourvalues2,
      title: "Passion",
      description:
        "We take pride in our work at ALDS. Passion is the fuel that drives us towards excellence and inspires us to deliver the best IT solutions.",
    },
    {
      id: 2,
      image: ourvalues3,
      title: "Integrity",
      description:
        " We work as your true partners. We develop ownership with the assigned project and work with absolute integrity.",
    },
    {
      id: 3,
      image: ourvalues4,
      title: "Commitment",
      description:
        "At ALDS we are committed to deliver 'Excellence Everytime'. We strive hard to create the best outcome of the design and development projects.",
    },
    {
      id: 4,
      image: ourvalues5,
      title: "Teamwork",
      description:
        "We believe that an individual’s growth leads to the company's growth and collaborative ideas encourage opportunities - when we work together, we grow together.",
    },
    {
      id: 5,
      image: ourvalues6,
      title: "Embracing Change",
      description:
        "Change is one of the most powerful tools of growth in any organization. Being a future-ready company, ALDS is always set to embrace any change",
    },
  ];
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
                We at ALDS are a business-oriented Website and App Development
                Company dedicated to providing innovative, comprehensive and
                planned software development services that are tailored to meet
                the needs of our clients.
              </p>
              <p>
                We specialize in the design and implementation of custom
                websites and complex enterprise Web and Mobile applications. We
                provide high-quality, cost-effective Web development services to
                maximize client&#39;s competitive advantages and productivity.
              </p>

              <p>
                Our proficient team of full-stack developers and experienced
                designers use the most recent and versatile technologies like
                Next.JS, React Native, Flutter, etc to develop the most
                intuitive, seamless, high performance and scalable solutions -
                for both mobile and web platforms. We create customised
                solutions for clients from an array of industries like
                Healthcare, Real Estate, Education, Hospitality & Tourism,
                Fashion & Lifestyle and more.
              </p>

              <p>
                We, as a leading Website and App Development company, follow an
                Agile methodology that allows for constant interaction with our
                clients throughout the entire development process, ensuring they
                receive the best web development services possible. We are a
                software development company that puts an emphasis on bullet
                proof quality of codes and best practices for future
                scalability. Web development practices that we follow are 100%
                responsive and mobile friendly. Furthermore, we offer help with
                everything from front-end development to complex DevOps
                architecture.
              </p>

              <p>
                In order to stay ahead in this competitive market, ALDS, as a
                complete digital solutions company, understands that your
                brand’s online and mobile presence needs a unique positioning
                across the digital platform to deliver effective interactive
                interface and communication.
              </p>

              {/* <div className={`pt-6 ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}> features </p>

                <h2 className={` ${styles.titlesubmain} `}>
                  Our key features
                </h2>
              </div>

              <div className="flex flex-wrap pb-8 overflow-hidden ">
                <div className={`w-full  pt-6  overflow-hidden md:w-1/2 `}>
                  <h6> Proper Performance Tracking</h6>
                  <p>
                    Performance Tracking is done on a daily, weekly, and monthly
                    basis to ensure tasks planned are done as per the schedule
                    and further planning for future activities can be done
                    effectively.
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
              </div> */}
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap px-4  py-4 md:py-20 overflow-hidden `}>
          <div
            className={`w-full flex justify-center items-center overflow-hidden`}
          >
            <div className="absolute mt-56 md:mt-28  ">
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
            className={`w-1/2 flex justify-center items-center overflow-hidden md:w-1/4`}
          >
            <div className={` ${styles.boxborder} text-white  text-center `}>
              <div
                className={` ${styles.iconboxbg} border-2 flex rounded-full m-auto h-24 w-24`}
              >
                <StarsSharpIcon
                  style={{ color: "#ffff", fontSize: 50 }}
                  className="m-auto"
                />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 5+ </h6>
              <h6 className="font-bold py-2 text-gray-600">
                Year of Exprience
              </h6>
            </div>
          </div>

          <div
            className={`w-1/2 flex justify-center items-center overflow-hidden md:w-1/4`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
              <div
                className={` ${styles.iconboxbg} border-2 flex rounded-full m-auto h-24 w-24`}
              >
                <WorkIcon
                  style={{ color: "#ffff", fontSize: 50 }}
                  className="m-auto"
                />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 50+ </h6>
              <h6 className="font-bold py-2 text-gray-600">Projects Deliver</h6>
            </div>
          </div>

          <div
            className={`w-1/2 flex justify-center items-center overflow-hidden md:w-1/4`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
              <div
                className={` ${styles.iconboxbg} border-2 flex rounded-full h-24 w-24`}
              >
                <SupervisorAccountIcon
                  style={{ color: "#ffff", fontSize: 50 }}
                  className="m-auto"
                />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 30+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Happy Clients </h6>
            </div>
          </div>

          <div
            className={`w-1/2 flex justify-center items-center overflow-hidden md:w-1/4`}
          >
            <div className={` ${styles.boxborder} text-white text-center `}>
              <div
                className={` ${styles.iconboxbg} border-2 flex rounded-full h-24 w-24`}
              >
                <PersonPinCircleIcon
                  style={{ color: "#ffff", fontSize: 50 }}
                  className="m-auto"
                />
              </div>
              <h6 className="text-4xl py-2 text-gray-600"> 5+ </h6>
              <h6 className="font-bold py-2 text-gray-600"> Offices </h6>
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
              <div
                className={`w-full bg-gray-100 md:pl-10 pl-8 pr-6 pt-16 md:pr-28 items-center  md:py-24 overflow-hidden md:w-1/2 `}
              >
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>Our Vision </h2>
                </div>
                <p>
                  With an innovative and entrepreneurial spirit, our vision is
                  to constantly create value and attain global benchmarks in the
                  world of digital technology. At ALDS, we bring forth
                  impeccable web solutions and high-quality mobile apps with the
                  implementation of the latest technologies. We also aim to
                  develop applications for new platforms, upcoming technologies,
                  and remain on top of current trends and innovations.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap overflow-hidden ">
              <div
                className={`w-full bg-gray-100 md:pl-28 pl-8 pt-10 pb-10 pr-6 md:pr-10 items-center md:py-24 overflow-hidden md:w-1/2 `}
              >
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>Our Mission </h2>
                </div>
                <p>
                  Our mission is to bring a gratifying virtual presence for our
                  clients with our advanced development initiatives at a
                  reasonable price. By focusing more on the tactical
                  implementation of efficient IT solutions, workflow automations
                  and innovative apps, we want to bring scalability to your
                  business. We plan to make small but meaningful changes based
                  on our expertise in mobile and web application development and
                  marketing to bridge the gap between technology and everyday
                  life for users around the world.
                </p>
              </div>
              <div
                className={`w-full pr-6 overflow-hidden md:w-1/2  ${styles.missionbg} `}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles.bggray100} flex px-2 md:px-28 md:py-24 flex-wrap overflow-hidden `}
        >
          <div
            className={` ${styles.innerpagecon} w-full overflow-hidden md:w-full `}
          >
            <div className="flex flex-wrap items-center overflow-hidden ">
              <div className="w-full md:pr-6 overflow-hidden md:w-1/2">
                <div className={` ${styles.counter} `}>
                  <Image
                    src={require("@/assets/images/about/core-value.png")}
                    alt="Aladinn Tech"
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
              <div
                className={`w-full md:px-6 pt-16 m-auto overflow-hidden md:w-1/2 `}
              >
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}> features </p>

                  <h2 className={` ${styles.titlesubmain} `}>Our Philoshpy </h2>
                </div>
                <p>
                  The ALDS team follows the D3 philosophy to outline a proper
                  structure for the entire business project – 
                </p>
                <div className="flex flex-wrap overflow-hidden ">
                  <div className={`w-full overflow-hidden`}>
                    <ul className="list-disc pl-5">
                    <li className="text-gray-600 text-base mb-2"><strong>	Discovery - </strong> Discovery of client&#39;s requirements.</li>
                    <li className="text-gray-600 text-base mb-2"><strong>	Design - </strong> Design designing and strategizing a solution tailored to their needs.</li>
                    <li className="text-gray-600 text-base mb-2"><strong>	Development - </strong> Development of unmatched IT solutions to accelerate their business and reach out to the consumers in an effective manner.</li>
                  </ul>                    
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div
          className={`md:px-28 pt-20 md:pt-10 md:pb-10 ${styles.bglightblue}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> OUR VALUES </h2>
            </div>
          </div>
          <div className="flex flex-wrap overflow-hidden ">
            {ourvalues.map((item, index) => (
              <div
                className="my-1 px-2 text-center w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 overflow-hidden"
                key={index}
              >
                <div
                  className={`w-full overflow-hidden wow fadeInUp ${styles.singleservices} `}
                  data-wow-delay="0.2s"
                >
                  <Image src={item.image} alt={item.title} />
                  <h5 className="font-bold text-center text-gray-600 text-xl my-3">
                    {item.title}
                  </h5>
                  <p className="font-normal text-center text-base my-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden  md:py-24 md:px-28">
          <div
            className={` ${styles.innerpagecon} w-full overflow-hidden md:w-full `}
          >
            <div className="flex flex-wrap  mt-16 md:mt-0 overflow-hidden ">
              <div className="w-full overflow-hidden md:w-1/2">
                <Image
                  src={require("@/assets/images/about/team.jpg")}
                  alt="Aladinn Tech"
                />
              </div>
              <div
                className={`w-full md:pl-10 pl-8 pr-6 pt-16 m-auto items-center overflow-hidden md:w-1/2 `}
              >
                <div className={` ${styles.teambox} `}>
                  <div className={` ${styles.titlesubcontainer} `}>
                    <p className={` ${styles.titlesub} `}> features </p>
                    <h2
                      className={` ${styles.titlesubmain} ${styles.teamtitlesubmain}`}
                    >
                      Our Team
                    </h2>
                  </div>
                  <div className={` ${styles.teamboxcontent} `}>
                    <p>
                      At ALDS, limits are defined by going beyond them. We are a
                      team of innovative thinkers and creative professionals
                      with solid technical background, strong problem-solving,
                      decision-making, interpersonal skills, effective
                      leadership and trust in each other. ALDS is an amazing
                      blend of Creative Brains and Tech Innovation engaged in
                      developing best digital solutions for different business
                      domains around the world.
                    </p>
                  </div>
                  <div className={` ${styles.discover} `}>
                    <Link href="/">Discover the project</Link>
                    <span className={`${styles.discoverspan} `}></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex md:pt-20 flex-wrap overflow-hidden ">
              <div className="my-1 px-2 text-center w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden">
                <div
                  className="w-full overflow-hidden md:mb-4 wow fadeInLeft"
                  data-wow-delay="0.2s"
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
                  data-wow-delay="0.2s"
                >
                  <Image
                    src={require("@/assets/images/teams/2.jpg")}
                    alt="Aladinn Tech"
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
                  data-wow-delay="0.2s"
                >
                  <Image
                    src={require("@/assets/images/teams/1.jpg")}
                    alt="Aladinn Tech"
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
                  data-wow-delay="0.2s"
                >
                  <Image
                    src={require("@/assets/images/teams/2.jpg")}
                    alt="Aladinn Tech"
                  />
                  <h5 className="font-bold text-center text-xl text-gray-600 my-2">
                    Mr. Vishal Singh
                  </h5>
                  <h5 className="font-normal text-center italic  text-base my-2">
                    Sr. Developer
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div
          className={`md:px-28 mt-20  md:mt-0 md:pt-10 md:pb-20 ${styles.bggrayimg}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> What Differentiates ALDS from others </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center overflow-hidden ">
            <div className="w-full overflow-hidden md:w-2/5">
              <div className={` ${styles.counter} `}>
                <Image
                  src={require("@/assets/images/about/differentiates.png")}
                  alt="Aladinn Tech"
                />
              </div>
            </div>
            <div className={`w-full overflow-hidden md:py-0 py-4 px-2 md:px-14  md:w-3/5 `}>
              <ul>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>1</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Cost-effectiveness</h5>
                    <p>
                      Our goal is to help our clients reach their full potential
                      within their budget.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>2</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Timely delivery</h5>
                    <p>
                      Time is of utmost value to us, so we are very specific
                      about the deadline. We consistently meet our deadlines.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>3</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                      Extensive Experience
                    </h5>
                    <p>
                      We have built websites and mobile apps/website apps for
                      entrepreneurs and companies around the world, and we are
                      always looking for the next challenge.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>4</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                      Trusted Relationship
                    </h5>
                    <p>
                      Business cannot exist without trust, so we strictly adhere
                      to our morality of trusted relationships with our clients,
                      irrespective of contract or technology.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`md:px-28 pt-20 md:pt-10 md:pb-10 ${styles.bglightblue}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> What ALDS Does for you?</h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center pb-8 overflow-hidden ">
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div className=" hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center text-left md:text-right overflow-hidden">
                    <div className={`overflow-hidden    md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        Idea & Analysis
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                        By collaborating with businesses, we can remove business
                        blinders and reap the maximum return from investments.
                        In order to achieve this, we realign budgets with IT
                        initiatives, ideate and formulate best strategies that
                        move the business forward.
                      </p>
                    </div>
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}
                    >
                      <WbSunnyIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div
                      className={`overflow-hidden  text-left md:text-right md:w-4/5 `}
                    >
                      <h6 className={` ${styles.titleheading} `}>Designing</h6>
                      <p className={` ${styles.paragraph} `}>
                        The digital presence of your firm speaks volumes about
                        your work, not only in terms of the information they
                        provide but more importantly the experience they give to
                        website visitors. We deliver an immersive experience for
                        users with creatively designed pages, carefully crafted
                        images, compelling content on every page, and intuitive
                        navigation.
                      </p>
                    </div>
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}
                    >
                      <BrushIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center  text-left md:text-right  overflow-hidden">
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        SEO Marketing
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                        Praesent tincidunt congue est ut hendrerit ellentesque
                        eros.
                      </p>
                    </div>
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:ml-4`}
                    >
                      <ShowChartIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div
                className="mx-2 my-4 px-4 py-2">
                <div className={` ${styles.scaletransform} `}>
                  <Image
                    src={require("@/assets/images/about/alds-mid.png")}
                    alt="Aladinn Tech"
                  />
                </div>
              </div>
            </div>
            <div className={`w-full  overflow-hidden md:w-1/3 `}>
              <div className="mx-2 hover:bg-white hover:shadow-lg my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}
                    >
                      <DeveloperModeIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}>
                        Development
                      </h6>
                      <p className={` ${styles.paragraph} `}>
                        ALDS aims to develop solutions that will provide you
                        with increased utility over time. ALDS is committed to
                        delivering results beyond expectations by keeping pace
                        with ever-evolving technology. We develop high-end,
                        technically advanced solutions using the latest software
                        and technology platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}
                    >
                      <LaptopMacIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}> Lunching</h6>
                      <p className={` ${styles.paragraph} `}>
                        When ideas come to life, magic happens. Since we are
                        keen to show what we have accomplished, we do it agile.
                        The deployment of an application or a website requires a
                        plan, schedule, and control of how releases are moved to
                        test and live environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-white hover:shadow-lg mx-2 my-4 px-2 py-2">
                <div className={` ${styles.innerpagecon}`}>
                  <div className="flex items-center overflow-hidden">
                    <div
                      className={` ${styles.bglightgray} bg-opacity-25 overflow-hidden text-center md:w-1/5 md:mr-4`}
                    >
                      <SearchIcon
                        style={{ color: "#1f2471", fontSize: 50 }}
                        className="m-auto"
                      />
                    </div>
                    <div className={`overflow-hidden md:w-4/5 `}>
                      <h6 className={` ${styles.titleheading} `}> Research</h6>
                      <p className={` ${styles.paragraph} `}>
                        In addition to gathering business needs, we study and
                        research the competitive landscape, perform strategic
                        analyses, and propose bespoke solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap overflow-hidden items-center md:px-28 md:py-10 px-2 ${styles.bgwhite}`}
        >
          <div className={`w-full overflow-hidden m-auto px-4 md:w-1/4 z-10`}>
            <h2 className={`${styles.titleheading2} `}>Our Approach</h2>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 480,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="vertical tabs example"
                className={`${styles.appbardesign}`}
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  icon={<InstallMobileIcon style={{ fontSize: 30 }} />}
                  label="STRATEGY"
                  {...a11yProps(0)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 0 ? "#efefef " : "#f8f8f8",
                    flexDirection: "row",
                  }}
                />
                <Tab
                  icon={<ComputerIcon style={{ fontSize: 30 }} />}
                  label="ANALYSING "
                  {...a11yProps(1)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 1 ? "#efefef " : "#f8f8f8",
                    flexDirection: "row",
                  }}
                />
                <Tab
                  icon={<ViewCompactIcon style={{ fontSize: 30 }} />}
                  label="DESIGNING"
                  {...a11yProps(2)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 2 ? "#efefef " : "#f8f8f8",
                    flexDirection: "row",
                  }}
                />
                <Tab
                  icon={<ViewComfyIcon style={{ fontSize: 30 }} />}
                  label="TESTING"
                  {...a11yProps(3)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 3 ? "#efefef " : "#f8f8f8",
                    flexDirection: "row",
                  }}
                />

                <Tab
                  icon={<ViewComfyIcon style={{ fontSize: 30 }} />}
                  label="SUPPORT SERVICES"
                  {...a11yProps(4)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 4 ? "#efefef " : "#f8f8f8",
                    flexDirection: "row",
                  }}
                />
              </Tabs>
            </Box>
          </div>

          <div className={`w-full overflow-hidden px-4 md:w-3/4 z-10`}>
            <TabPanel value={value} index={0}>
              <div className="flex flex-wrap overflow-hidden ">
                <div
                  className={`w-full overflow-hidden px-4 my-4 md:my-20 ${styles.boxlayout}`}
                >
                  <div className={` ${styles.titlesubcontainer} `}>
                    <h2 className={` ${styles.titlesubmain} `}>STRATEGY</h2>
                  </div>
                  <p className="mb-2">
                    Our web or app development process begins with a strategy.
                    In order for us to know more about your products and
                    services, we arrange our development team to meet with you.
                    By collecting and analyzing your data, our app and website
                    developers determine which software development strategy
                    works best for each project. We will perform multiple types
                    of research with your data during this phase, as well as
                    identify the right target audience. From there, we formulate
                    the strategy.
                  </p>
                  <p>
                    The development team works alongside the research team to
                    find your business&#39;s competitors in the market. Last but
                    not least, we will select the right platform for building
                    your business apps, websites, and software.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="flex flex-wrap items-center overflow-hidden ">
                <div
                  className={`w-full overflow-hidden px-4 my-4 md:my-20 ${styles.boxlayout}`}
                >
                  <div className={` ${styles.titlesubcontainer} `}>
                    <h2 className={` ${styles.titlesubmain} `}>
                      ANALYSING AND PLANNING
                    </h2>
                  </div>
                  <p>
                    Our second step is to identify and plan the functional
                    requirements with our clients. Our team of developers
                    determine and analyze which features are appropriate for
                    your websites or apps. Based on what we identify as actual
                    requirements, we develop the roadmap to follow.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="flex flex-wrap items-center overflow-hidden ">
                <div
                  className={`w-full overflow-hidden px-4 my-4 md:my-20 ${styles.boxlayout}`}
                >
                  <div className={` ${styles.titlesubcontainer} `}>
                    <h2 className={` ${styles.titlesubmain} `}>DESIGNING</h2>
                  </div>
                  <p>
                    The third step of our process involves inviting UX/UI
                    designers to the project. These designers prepare the plan
                    to deliver seamless user experiences when designing apps and
                    websites. Wireframes are used to sketch the designs
                    digitally. Using wireframe technology, we create conceptual
                    layouts and give the application and website a visual
                    structure. We also create static mockups to demonstrate the
                    functionality of apps and websites.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="flex flex-wrap items-center overflow-hidden ">
                <div
                  className={`w-full overflow-hidden px-4 my-4 md:my-20 ${styles.boxlayout}`}
                >
                  <div className={` ${styles.titlesubcontainer} `}>
                    <h2 className={` ${styles.titlesubmain} `}>TESTING</h2>
                  </div>
                  <p>
                    Our main goal is to provide a stable application and a
                    user-friendly website for business owners. Software testing
                    is handled by a separate team. As part of our quality
                    assurance process, we ensure that every application and
                    website works seamlessly and is without any errors and bugs.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div className="flex flex-wrap items-center overflow-hidden ">
                <div
                  className={`w-full overflow-hidden px-4 my-4 md:my-20 ${styles.boxlayout}`}
                >
                  <div className={` ${styles.titlesubcontainer} `}>
                    <h2 className={` ${styles.titlesubmain} `}>
                      SUPPORT SERVICES
                    </h2>
                  </div>
                  <p>
                    Following the launch of the website or the app for the
                    users, we closely monitor their reviews and feedback.
                    Various analytics platforms are used to evaluate the
                    performance of the website or app. In addition, we offer
                    support services for our clients to ensure their complete
                    satisfaction.
                  </p>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>

        {/* <div className="flex flex-wrap overflow-hidden ">
          <div
            className={`w-full md:px-28 md:py-10 px-2 items-center overflow-hidden`}
          >
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
                    backgroundColor: value === 0 ? "#efefef " : "transparent",
                  }}
                />
                <Tab
                  icon={<ComputerIcon style={{ fontSize: 30 }} />}
                  label="WEB DEVELOPMENT"
                  {...a11yProps(1)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 1 ? "#efefef " : "transparent",
                  }}
                />
                <Tab
                  icon={<ViewCompactIcon style={{ fontSize: 30 }} />}
                  label="CMS DEVELOPMENT"
                  {...a11yProps(2)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 2 ? "#efefef " : "transparent",
                  }}
                />
                <Tab
                  icon={<ViewComfyIcon style={{ fontSize: 30 }} />}
                  label="CUSTOMISED SOLUTIONS"
                  {...a11yProps(3)}
                  className={` ${styles.depbord}`}
                  style={{
                    backgroundColor: value === 3 ? "#efefef " : "transparent",
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
                      Performance Tracking is done on a daily, weekly, and
                      monthly basis to ensure tasks planned are done as per the
                      schedule and further planning for future activities can be
                      done effectively. Performance Tracking is done on a daily,
                      weekly, and monthly basis to ensure tasks planned are done
                      as per the schedule and further planning for future
                      activities can be done effectively.
                    </p>
                    <div className="flex flex-wrap overflow-hidden ">
                      <div className={`w-full overflow-hidden`}>
                        <p
                          className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                          data-wow-delay="0.2s"
                        >
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Cost effective:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Business consistency
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp; Increase efficiency:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
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
                      Performance Tracking is done on a daily, weekly, and
                      monthly basis to ensure tasks planned are done as per the
                      schedule and further planning for future activities can be
                      done effectively. Performance Tracking is done on a daily,
                      weekly, and monthly basis to ensure tasks planned are done
                      as per the schedule and further planning for future
                      activities can be done effectively.
                    </p>
                    <div className="flex flex-wrap overflow-hidden ">
                      <div className={`w-full overflow-hidden`}>
                        <p
                          className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                          data-wow-delay="0.2s"
                        >
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Cost effective:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Business consistency
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp; Increase efficiency:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
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
                      Performance Tracking is done on a daily, weekly, and
                      monthly basis to ensure tasks planned are done as per the
                      schedule and further planning for future activities can be
                      done effectively. Performance Tracking is done on a daily,
                      weekly, and monthly basis to ensure tasks planned are done
                      as per the schedule and further planning for future
                      activities can be done effectively.
                    </p>
                    <div className="flex flex-wrap overflow-hidden ">
                      <div className={`w-full overflow-hidden`}>
                        <p
                          className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                          data-wow-delay="0.2s"
                        >
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Cost effective:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Business consistency
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp; Increase efficiency:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
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
                      Performance Tracking is done on a daily, weekly, and
                      monthly basis to ensure tasks planned are done as per the
                      schedule and further planning for future activities can be
                      done effectively. Performance Tracking is done on a daily,
                      weekly, and monthly basis to ensure tasks planned are done
                      as per the schedule and further planning for future
                      activities can be done effectively.
                    </p>
                    <div className="flex flex-wrap overflow-hidden ">
                      <div className={`w-full overflow-hidden`}>
                        <p
                          className="flex text-xl font-medium text-blue-900 mt-4 mb-2"
                          data-wow-delay="0.2s"
                        >
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Cost effective:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp;Business consistency
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8 ">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
                        <p className="flex text-xl font-medium text-blue-900 mb-2 ">
                          <CheckCircleIcon
                            className="fill-current stroke-2 text-blue-900"
                            style={{ fontSize: 30 }}
                          />
                          &nbsp; Increase efficiency:
                        </p>
                        <p className="text-base font-normal mb-4 text-gray-600 pl-8">
                          Electronic data storage, remote analysis &amp;
                          monitoring services and simplification of complex
                          operations increase efficiency and significantly
                          reduce healthcare service costs.
                        </p>
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
        </div> */}
      </div>
    </div>
  );
}
