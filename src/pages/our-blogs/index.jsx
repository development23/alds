import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";

//Tabs
import PropTypes from "prop-types";
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

export default function Blogs() {
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
      image: require("@/assets/images/blogs/card/1.jpg"),

      title: "Digital Transformation during Covid 19 Times      ",

      description:
        "As the top Web and Mobile App Development Company in Jaipur, ALDS has developed various web applications and solutions during Covid 19.        ",
      link: "our-blogs/digital-transformation-during-covid-19-times",
    },
    {
      id: 1,
      image: require("@/assets/images/blogs/card/2.jpg"),

      title: "Get Future Ready With Android App Development",

      description:
        "Android is a very famous computing platform that has first been introduced in the commercial market back in 2008         ",
      link: "our-blogs/get-future-ready-with-android-app-development",
    },
    {
      id: 2,
      image: require("@/assets/images/blogs/card/3.jpg"),

      title: "React Native of ALDS",

      description:
        " The framework being an open-source platform presents the React Native app developers with an all-time access to a super large community of the React world.   ",
      link: "our-blogs/react-native-of-alds",
    },

    {
      id: 2,
      image: require("@/assets/images/blogs/card/4.jpg"),

      title: "Building a Novel Mobile Application on Flutter with ALDS",

      description:
        " A free and open-source mobile UI framework created by Google permitting for creation of a native mobile application with a single codebase      ",
      link: "our-blogs/building-a-novel-mobile-application-on-flutter-with-alds",
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
            src={require("@/assets/images/banner/blog.jpg")}
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
                  Read our blogs to get the latest updates of tech world.
                </p>
                <h2 className={` ${styles.titlemain} `}> Our Blogs </h2>
              </div>
            </div>

            <div className={` pt-8 md:pt-10 md:pb-10   `}>
              <div className="flex flex-wrap overflow-hidden ">
                {ourvalues.map((item, index) => (
                  <div
                    className="my-1 px-2 text-center w-full   md:w-1/2 overflow-hidden"
                    key={index}
                  >
                    <div
                      className={`  wow fadeInUp ${styles.singleservices}  `}
                      data-wow-delay="0.2s"
                    >
                      <Image src={item.image} alt={item.title} />
                      <h5 className="font-bold text-center text-gray-600 text-lg mb-3">
                        {item.title}
                      </h5>
                      <p className="font-normal text-center text-base my-2 mb-8">
                        {item.description}
                      </p>

                      <a
                        href={item.link}
                        className="px-4 py-4 bg-[#066da1] rounded-md mt-4 text-white"
                      >
                        {" "}
                        View More
                      </a>
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
