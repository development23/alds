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
      image: require("@/assets/images/home/client/1.png"),

      title: "Mahatma Gandhi Hospital",

      description:
        "The development team at ALDS is exceptionally outstanding and cooperative. They understand every detailed requirement for website and app development and suggest the necessary alternatives wherever possible to develop an engaging product that can give new heights to your business in the direction that you want. ",
    },
    {
      id: 1,
      image: require("@/assets/images/home/client/6.png"),

      title: "Arya Group of Colleges",

      description:
        "The tech team of ALDS is well versed with all the latest and best technologies. Their quality approach, exceptional service, and complete technical support are really admirable. The entire team is committed and works round the clock to fulfill the client’s requirements. Thanks, Team ALDS! ",
    },
    {
      id: 2,
      image: require("@/assets/images/home/client/12.png"),

      title: "Apex Hospital",

      description:
        "We are highly satisfied with the development services of ALDS. The highly functional and responsive website provides the best user experience. They have also developed an exceptional telemedicine platform for us and continue to support us in making it even better. This is all that we were looking for. The web solutions of the company are recommendable. Keep doing the great work guys! ",
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
            src={require("@/assets/images/banner/testimonials.jpg")}
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
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Discover What Our Clients Have To Share{" "}
                </p>

                <h2 className={` ${styles.titlemain} `}> Testimonials </h2>
              </div>
            </div>

            <div className={` pt-20 md:pt-10 md:pb-10   `}>
              <div className="flex flex-wrap overflow-hidden ">
                {ourvalues.map((item, index) => (
                  <div
                    className="my-1 px-2 text-center w-full sm:w-1/3 md:w-1/2 overflow-hidden"
                    key={index}
                  >
                    <div
                      className={`w-full overflow-hidden wow fadeInUp ${styles.singleservices} `}
                      data-wow-delay="0.2s"
                    >
                      <Image src={item.image} alt={item.title} />
                      <h5 className="font-bold text-center text-gray-600 text-xl mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
