import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Sidebar from "components/sidebar";
import Image from "next/image";
import Link from "next/link";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

//Slick Imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Index() {
  const [videoModal, setVideoModal] = useState({
    open: false,
    channel: "",
    link: "",
  });
  const [imageIndex, setImageIndex] = useState(0);
  const developmentSliderRef = useRef(null);
  const nextSliderRef = useRef(null);
  const nextSlidersRef = useRef(null);
  const clientsSliderRef = useRef(null);
  const portfolioSliderRef = useRef(null);
  const testimonialSliderRef = useRef(null);

  const settings = {
    // className: "center",
    dots: true,
    centerMode: false,
    autoplay: true,
    speed: 3000,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const developmentSliderContent = [
    {
      id: 0,
      image: require("@/assets/images/home/development/a11.png"),
      name: "Apex Hospitals ",
      content:
        "We have created a Telemedicine app for one of the multispeciality hospitals and also released the updated version with features like Bajaj Finserv Digital Health EMI Network Card and Weight Loss Module.  ",
    },
    {
      id: 1,
      image: require("@/assets/images/home/development/a10.png"),
      name: "Niflux Led Lights",
      content:
        "We developed a dynamic mobile app using the Android & iOS platform for tracking of 2000 employees who are in field working. Other features include attendance management, daily schedule updating, leave management etc.",
    },
    {
      id: 2,
      image: require("@/assets/images/home/development/a9.png"),
      name: "Poddar Healthcare ",
      content:
        "We created an online lab test booking module for one of our prestigious clients. Home sample collection, health check up packages and accurate test outcomes brings quality diagnostic care.      ",
    },

    {
      id: 3,
      image: require("@/assets/images/home/development/a8.png"),
      name: "Floret Group ",
      content:
        "We developed an E-Commerce website as well as a mobile application using Android and iOS platforms. The client is a B2B wholesale supplier of construction materials and interior products.       ",
    },

    {
      id: 4,
      image: require("@/assets/images/home/development/a2.png"),
      name: "Earning Home       ",
      content:
        "We created an online hotel booking app for our hotel based client. The app’s exclusive features include listing the hotel, club membership, assured money back as well as B2B business opportunities. ",
    },

    {
      id: 5,
      image: require("@/assets/images/home/development/a3.png"),
      name: "Babylon Hospital       ",
      content:
        "We developed a telemedicine app and helped the hospital connect with patients virtually. The app features include online appointment booking, e-prescription, video consultation, choosing doctor and secured payment options.  ",
    },

    {
      id: 6,
      image: require("@/assets/images/home/development/a1.png"),
      name: "MGH Telehealth      ",
      content:
        "We developed a telemedicine app for Rajasthan’s largest private super speciality hospital during the pandemic and helped them connect remote patients. Online appointment scheduling, lab reports, secured payment, log in & log out were major features of the app.",
    },
    {
      id: 7,
      image: require("@/assets/images/home/development/a6.png"),
      name: "eNIMS ",
      content:
        "Online appointment scheduling based on current location, doctor and department selection, easy payment options, video consultation from the safety of home were few features of our telemedicine app developed for top multispecialty hospitals.       ",
    },

    {
      id: 8,
      image: require("@/assets/images/home/development/a7.png"),
      name: "Chirayu Hospital       ",
      content:
        "We created a telemedicine app where patients can easily book online appointments with top doctors. Easy Log In & Log Out, location based feature, digital lab reports, e-prescription, video consultation were other features of the app.",
    },
  ];

  const clientssettings = {
    centerMode: false,
    autoplay: true,
    speed: 3000,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const clientsSliderContent = [
    {
      id: 0,
      image: require("@/assets/images/home/client/2.png"),
    },
    {
      id: 1,
      image: require("@/assets/images/home/client/14.png"),
    },

    {
      id: 2,
      image: require("@/assets/images/home/client/3.png"),
    },
    {
      id: 3,
      image: require("@/assets/images/home/client/15.png"),
    },

    {
      id: 4,
      image: require("@/assets/images/home/client/13.png"),
    },
    {
      id: 5,
      image: require("@/assets/images/home/client/16.png"),
    },
    {
      id: 6,
      image: require("@/assets/images/home/client/7.png"),
    },
    {
      id: 7,
      image: require("@/assets/images/home/client/4.png"),
    },

    {
      id: 9,
      image: require("@/assets/images/home/client/6.png"),
    },
    {
      id: 10,
      image: require("@/assets/images/home/client/9.png"),
    },
    {
      id: 11,
      image: require("@/assets/images/home/client/10.png"),
    },

    {
      id: 12,
      image: require("@/assets/images/home/client/3.png"),
    },
    {
      id: 13,
      image: require("@/assets/images/home/client/1.png"),
    },
    {
      id: 14,
      image: require("@/assets/images/home/client/17.png"),
    },
    {
      id: 15,
      image: require("@/assets/images/home/client/20.png"),
    },
    {
      id: 16,
      image: require("@/assets/images/home/client/18.png"),
    },
    {
      id: 17,
      image: require("@/assets/images/home/client/21.png"),
    },
    {
      id: 18,
      image: require("@/assets/images/home/client/19.png"),
    },
  ];

  const nextssettings = {
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,

    arrows: false,
    buttons: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const nextSliderContent = [
    {
      id: 0,
      image: require("@/assets/images/home/blacklogo/1.png"),
    },
    {
      id: 1,
      image: require("@/assets/images/home/blacklogo/2.png"),
    },
    {
      id: 2,
      image: require("@/assets/images/home/blacklogo/3.png"),
    },
    {
      id: 3,
      image: require("@/assets/images/home/blacklogo/4.png"),
    },
    {
      id: 4,
      image: require("@/assets/images/home/blacklogo/5.png"),
    },
    {
      id: 5,
      image: require("@/assets/images/home/blacklogo/6.png"),
    },
    {
      id: 6,
      image: require("@/assets/images/home/blacklogo/7.png"),
    },
    {
      id: 7,
      image: require("@/assets/images/home/blacklogo/8.png"),
    },
    {
      id: 8,
      image: require("@/assets/images/home/blacklogo/9.png"),
    },
    {
      id: 9,
      image: require("@/assets/images/home/blacklogo/10.png"),
    },
    {
      id: 10,
      image: require("@/assets/images/home/blacklogo/11.png"),
    },
  ];

  const nextsssettings = {
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,

    arrows: false,
    buttons: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const nextSlidersContent = [
    {
      id: 0,
      image: require("@/assets/images/home/blacklogo/11.png"),
    },
    {
      id: 1,
      image: require("@/assets/images/home/blacklogo/12.png"),
    },
    {
      id: 2,
      image: require("@/assets/images/home/blacklogo/13.png"),
    },
    {
      id: 3,
      image: require("@/assets/images/home/blacklogo/14.png"),
    },
    {
      id: 4,
      image: require("@/assets/images/home/blacklogo/15.png"),
    },
    {
      id: 5,
      image: require("@/assets/images/home/blacklogo/16.png"),
    },
    {
      id: 6,
      image: require("@/assets/images/home/blacklogo/17.png"),
    },
    {
      id: 7,
      image: require("@/assets/images/home/blacklogo/18.png"),
    },
    {
      id: 8,
      image: require("@/assets/images/home/blacklogo/19.png"),
    },
    {
      id: 9,
      image: require("@/assets/images/home/blacklogo/20.png"),
    },
  ];

  const portfoliosettings = {
    // className: "center",
    dots: false,
    centerMode: false,
    autoplay: true,
    speed: 3000,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const portfolioSliderContent = [
    {
      id: 0,
      image: require("@/assets/images/home/case/1.jpg"),
      title: "My Fm",
      loc: "New Delhi",
      content:
        "We have developed a landing page for the My FM, Delhi to promote their online property exhibition “My Virtual Real Estate Fair”. We have also developed a lead capturing.",
    },
    {
      id: 1,
      image: require("@/assets/images/home/case/2.jpg"),
      title: "Roodraksh",
      loc: "Assam",
      content:
        "ALDS has developed the website & CRM for Roodraksh on Laravel. Our developers have designed a user-friendly website to deliver the complete crisp of information.",
    },

    {
      id: 2,
      image: require("@/assets/images/home/case/4.jpg"),
      title: "Surya Residency",
      loc: "Jaipur",
      content:
        "A website with multiple features and easy to find everything increases the chances of good results. We have designed the website with refer & earn program.",
    },
    {
      id: 3,
      image: require("@/assets/images/home/case/5.jpg"),
      title: "Lotus Dairy",
      loc: "Jaipur",
      content:
        "A refer & earn program gives the best result to a company. A customer-centric approach of our company has given us an idea to design an app on Laravel.",
    },
    {
      id: 4,
      image: require("@/assets/images/home/case/6.jpg"),
      title: "Avalon Networks",
      loc: "Dubai",
      content:
        "We have developed an E-commerce website on Magento for our Dubai- based client. Our goal was to provide the best result with an easy-to-use acronym.",
    },

    {
      id: 5,
      image: require("@/assets/images/home/case/8.png"),
      title: "Apex Hospitals",
      loc: "Jaipur",
      content:
        " We have developed a telemedicine application as well as a website for one of our top healthcare clients. The app was highly useful for a virtual consultation, particularly during pandemic times. ",
    },

    {
      id: 6,
      image: require("@/assets/images/home/case/9.png"),
      title: "Niflux",
      loc: "India",
      content:
        " We have created a dynamic mobile app on both Android and iOS platforms for the complete tracking of employees, particularly for sales force tracking. We have also developed their website. ",
    },

    {
      id: 7,
      image: require("@/assets/images/home/case/10.png"),
      title: "Floret ",
      loc: "Jaipur",
      content:
        "We developed an E-Commerce website as well as a mobile application on both Android and iOS platforms for one of our B2B clients and engaged in the wholesale supply of construction materials and interior products.",
    },

    {
      id: 8,
      image: require("@/assets/images/home/case/7.png"),
      title: "Property Check Karo",
      loc: "Jaipur",
      content:
        "We developed a property check portal where multiple builders’ properties can be listed and buyers can make proper comparisons between properties by choosing various filters per their convenience. ",
    },
  ];

  const testimonialsettings = {
    // className: "center",
    dots: true,
    centerMode: true,
    autoplay: true,
    speed: 3000,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonialSliderContent = [
    {
      id: 0,

      title: "Mahatma Gandhi Hospital",

      content:
        "The development team at ALDS is exceptionally outstanding and cooperative. They understand every detailed requirement for website and app development and suggest the necessary alternatives wherever possible to develop an engaging product that can give new heights to your business in the direction that you want. ",
    },
    {
      id: 1,

      title: "Arya Group of Colleges",

      content:
        "The tech team of ALDS is well versed with all the latest and best technologies. Their quality approach, exceptional service, and complete technical support are really admirable. The entire team is committed and works round the clock to fulfill the client’s requirements. Thanks, Team ALDS! ",
    },
    {
      id: 2,

      title: "Apex Hospital",

      content:
        "We are highly satisfied with the development services of ALDS. The highly functional and responsive website provides the best user experience. They have also developed an exceptional telemedicine platform for us and continue to support us in making it even better. This is all that we were looking for. The web solutions of the company are recommendable. Keep doing the great work guys! ",
    },
  ];

  const [events, setEvents] = useState(true);

  const handleEvents = (action) => {
    setEvents(action);
  };

  return (
    <div className="">
      <div
        className={` ${styles.mts} flex flex-wrap  fixed     before: overflow-hidden `}
      >
        <div className="w-full md:pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div
          className={`  ${styles.btp} ${styles.mhide} w-full     overflow-hidden   xl:w-4/5 `}
        >
          <Image
            src={require("@/assets/images/home/BANNER.jpg")}
            alt="Aladinn Tech"
          />
        </div>

        <div
          className={`  ${styles.btp} ${styles.dhide} w-full overflow-hidden   xl:w-4/5 `}
        >
          <Image
            src={require("@/assets/images/home/Mobilebanner.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin}  relative bg-white `}>
        <div className={` ${styles.about}  ${styles.mhide} `}>
          <div className="  relative container mx-auto flex flex-wrap overflow-hidden ">
            <div className="w-full pl-2  overflow-hidden">
              <h2> About Us </h2>
              <h6> New Age Developers to bring growth </h6>
            </div>
            <div className="w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden">
              <p>
                ALDS empowers businesses with technology that assists companies
                to achieve their goals. We are a “New Age Developers” and
                focused on growth and success. Our experienced Full stack
                developers are handy with JavaScript frameworks like Angular,
                React JS, NextJS, Gatsby JS for web designing & development &
                for Mobile Application React Native, Flutter & Ionic. The PHP
                framework like Yii, Laravel & CodeIgniter are used for Web
                Development.
              </p>
            </div>
            <div className="w-full md:w-1/2 xl:my-3 xl:px-3   overflow-hidden">
              <p>
                Our three Ds of work are Discovery, Design & Development. Your
                Web & Mobile Application will include everything needed to make
                waves in the market. We have provided App, websites, CMS, and
                E-commerce websites for Health, Real Estate, Education, Hotels,
                Lifestyle & Entertainment. Our development services include
                Mobile Application, Website & Web Application. We love working &
                learning and our best reward is watching our client’s success.
              </p>
            </div>
          </div>
        </div>

        <motion.div className={`${styles.facts}`}>
          <div className="mx-auto overflow-hidden">
            <div className="flex flex-wrap  overflow-hidden md:-mx-3 lg:-mx-3 xl:-mx-2">
              <motion.div
                animate={{ y: -1 }}
                transition={{ ease: "easeIn", duration: 0 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}> Health Care </h3>
              </motion.div>

              <motion.div
                animate={{ y: -2 }}
                transition={{ ease: "easeIn", duration: 0.4 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}>Real Estate</h3>
              </motion.div>

              <motion.div
                animate={{ y: -3 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}> Education </h3>
              </motion.div>

              <motion.div
                animate={{ y: -4 }}
                transition={{ ease: "easeIn", duration: 0.8 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}> Hospitilaty </h3>
              </motion.div>

              <motion.div
                animate={{ y: -5 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}> LifeStyle </h3>
              </motion.div>

              <motion.div
                animate={{ y: -6 }}
                transition={{ ease: "easeIn", duration: 0.12 }}
                className={`${styles.factBox} wow fadeInUp  px-2  overflow-hidden w-1/2 sm:w-1/2  md:px-3 md:w-1/2  lg:px-3 lg:w-1/3 xl:px-2 xl:w-1/6`}
              >
                <h3 className={styles.factsHeading}> Media </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="relative md:px-6 pl-4 pr-4 md:pt-6 md:pb-8">
          <Slider {...clientssettings} ref={clientsSliderRef}>
            {clientsSliderContent.reverse().map((item, index) => (
              <div className={` px-3 `} key={index}>
                <Link href="">
                  <div className={` ${styles.clientsSliderItemInner} `}>
                    <Image
                      // className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="alds"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center pt-4  space-x-4">
            <div className={`flex space-x-4  ${styles.buttonc1}`}>
              <IconButton
                className={``}
                onClick={() => clientsSliderRef?.current?.slickPrev()}
              >
                <ChevronLeftIcon
                  className={`text-slate-700`}
                  style={{ fontSize: 30 }}
                />
              </IconButton>
            </div>

            <div className={`flex space-x-4  ${styles.buttonc2}`}>
              <IconButton
                className={``}
                onClick={() => clientsSliderRef?.current?.slickNext()}
              >
                <ChevronRightIcon
                  className={`text-slate-700`}
                  style={{ fontSize: 30 }}
                />
              </IconButton>
            </div>
          </div>
        </div>

        <div className={` ${styles.services} ${styles.mhide} `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> OUR SERVICES </h2>
            </div>
          </div>

          <div
            className={`container md:px-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
              <Link href="">
                <h3>
                  <span>Customized</span> <br />
                  Application Development
                </h3>
              </Link>
              <p>
                We build customized native and hybrid mobile apps that are
                impactful and can be used for a variety of devices. We follow a
                comprehensive designing process with agile development, testing,
                and post-launch support.
              </p>
            </div>
            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s1.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container md:px-20 pt-16 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s2.png")}
                alt="Aladinn Tech"
              />
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
            </div>

            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Link href="">
                <h3>
                  <span>Website</span> <br />
                  Design & Development
                </h3>
              </Link>
              <p>
                Creating a perfect user interface design, we deliver the best
                user experience with responsive and mobile-friendly websites.
                Having expertise in E-Commerce web solutions, our web
                development services are equipped with continuous support and
                maintenance
              </p>
            </div>
          </div>

          <div
            className={`container md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Link href="">
                <h3>
                  <span>Web Application</span> <br />
                  Development
                </h3>
              </Link>
              <p>
                Create flexible and secured web apps that impart you the freedom
                to run your business from any device. After analyzing the
                objectives, our developers adopt the right approach,
                technologies, and platforms within your budget.
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s3.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container md:px-20 pt-16  mx-auto flex flex-wrap overflow-hidden`}
          >
            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s4.png")}
                alt="Aladinn Tech"
              />
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
            </div>

            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Link href="">
                <h3>
                  <span>Cross Platform </span> <br />
                  Apps
                </h3>
              </Link>
              <p>
                With unified design and functionality, we develop cross-
                platform apps that can perform across both iOS and Android
                platforms. Adapting to your time and budget constraints, the
                single app offers greater scalability.
              </p>
            </div>
          </div>

          <div
            className={`container md:px-20 pt-16 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Link href="">
                <h3>
                  <span>AI</span> <br />
                  Powered Chatbots
                </h3>
              </Link>
              <p>
                The highly functional and customized chatbot development
                services streamline your business interactions and offer a
                pleasing user experience. Our developers design interactive
                interfaces that involve the best UI elements after understanding
                the client’s requirements.
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s5.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>
        </div>

        <div className={` ${styles.services} ${styles.dhide} `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2 pr-4 overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> OUR SERVICES </h2>
            </div>
          </div>

          <div
            className={`container px-4 md:px-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
              <Link href="">
                <h3>
                  <span>Customized</span> <br />
                  Application Development
                </h3>
              </Link>
              <p>
                We build customized native and hybrid mobile apps that are
                impactful and can be used for a variety of devices. We follow a
                comprehensive designing process with agile development, testing,
                and post-launch support.
              </p>
            </div>
            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s1.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container px-4 md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />

              <Link href="">
                <h3>
                  <span>Website</span> <br />
                  Design & Development
                </h3>
              </Link>
              <p>
                Creating a perfect user interface design, we deliver the best
                user experience with responsive and mobile-friendly websites.
                Having expertise in E-Commerce web solutions, our web
                development services are equipped with continuous support and
                maintenance
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s2.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container px-4 md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
              <Link href="">
                <h3>
                  <span>Web Application</span> <br />
                  Development
                </h3>
              </Link>
              <p>
                Create flexible and secured web apps that impart you the freedom
                to run your business from any device. After analyzing the
                objectives, our developers adopt the right approach,
                technologies, and platforms within your budget.
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s3.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container px-4 md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />

              <Link href="">
                <h3>
                  <span>Cross Platform </span> <br />
                  Apps
                </h3>
              </Link>
              <p>
                With unified design and functionality, we develop cross-
                platform apps that can perform across both iOS and Android
                platforms. Adapting to your time and budget constraints, the
                single app offers greater scalability.
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s4.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>

          <div
            className={`container px-4 md:px-20 pt-20 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.servicscontent} w-full md:w-1/2 xl:my-3 xl:px-3  overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat2.png")}
                alt="Aladinn Tech"
              />
              <Link href="">
                <h3>
                  <span>AI</span> <br />
                  Powered Chatbots
                </h3>
              </Link>
              <p>
                The highly functional and customized chatbot development
                services streamline your business interactions and offer a
                pleasing user experience. Our developers design interactive
                interfaces that involve the best UI elements after understanding
                the client’s requirements.
              </p>
            </div>

            <div className="w-full md:w-1/2   xl:px-3   overflow-hidden">
              <Image
                src={require("@/assets/images/home/services/s5.png")}
                alt="Aladinn Tech"
              />
            </div>
          </div>
        </div>

        <div className={`relative ${styles.devlopmentstory} `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2 pr-2 md:pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> OUR DEVELOPMENT STORIES </h2>
            </div>
          </div>

          <div className="md:px-28">
            <Slider
              {...settings}
              ref={developmentSliderRef}
              className={` md:pl-4 py-4  ${styles.devlopslid} `}
            >
              {developmentSliderContent.map((item, index) => (
                <div
                  className={` ${styles.developmentSliderItem} pl-2 md:pl-4 pr-4 `}
                  key={index}
                >
                  <Link href="">
                    <div className={` ${styles.developmentSliderItemInner} `}>
                      <div className="text-center">
                        <Image
                          // className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={item.image}
                          alt="alds"
                        />
                      </div>

                      <div className={`    text-center py-4 `}>
                        <h6 className="font-bold text-xl tracking-widest uppercase mb-1 text-[#0b4577]">
                          {item.name}
                        </h6>
                        <p className="  text-sm text-[#303030]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <div className={`flex space-x-4  ${styles.button2}`}>
              <IconButton
                className={``}
                onClick={() => developmentSliderRef?.current?.slickNext()}
              >
                <ChevronRightIcon
                  className={`text-white bg-blue-custom`}
                  style={{ fontSize: 50 }}
                />
              </IconButton>
            </div>
          </div>
        </div>

        <div className={` ${styles.webdesign} `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full px-4 md:px-20 text-center    overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> OUR WEB APPLICATIONS </h2>
              <p>
                We are the first company in India to develop a Website and
                Landing page on NEXT.js for a multi-speciality hospital and an
                educational institute. Netflix, Ferrari, GitHub, Hulu and many
                others have preferred NEXT.js for their speedy websites. It is
                one of the best technologies for a high performance and dynamic
                website. Don’t be a part of the queue any longer. Kickstart your
                business with Next.js!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap px-4  md:px-28 overflow-hidden xl:-mx-3">
            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <div className={` ${styles.workcard} `}>
                <Image
                  src={require("@/assets/images/home/project/Propertyweb.png")}
                  alt="Aladinn Tech"
                />

                <div className={` ${styles.content}  text-center `}>
                  <div className="">
                    <span className="font-bold">
                      Property Comparison Portal
                    </span>
                    <h3 className="font-bold"> Propert Check Karo </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <div className={` ${styles.workcard} `}>
                <Image
                  src={require("@/assets/images/home/project/Saranshweb.png")}
                  alt="Aladinn Tech"
                />

                <div className={` ${styles.content}  text-center `}>
                  <div className="">
                    <span className="font-bold">Rural Telemedicine Portal</span>
                    <h3 className="font-bold"> Saransh E-clinic</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/3">
              <div className={` ${styles.workcard} `}>
                <Image
                  src={require("@/assets/images/home/project/Nifluxweb.png")}
                  alt="Aladinn Tech"
                />

                <div className={` ${styles.content}  text-center `}>
                  <div className="">
                    <span className="font-bold">
                      {" "}
                      Employee Tracking Software
                    </span>
                    <h3 className="font-bold"> Niflux Led Lights </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
           <div
            className={`container pt-12 mx-auto flex flex-wrap overflow-hidden`}
          >
            <div
              className={` ${styles.webdesign} w-full pb-4 px-4 md:px-20 text-center    overflow-hidden `}
            >
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> BRANDS POWERED BY NEXT.js </h2>
            </div>
          </div>

          <Slider {...nextssettings} ref={nextSliderRef}>
            {nextSliderContent.map((item, index) => (
              <div className={` ${styles.nextSliderItem} `} key={index}>
                <Link href="">
                  <div className={` ${styles.nextSliderItemInner} `}>
                    <Image
                      // className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="alds"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>

          <Slider {...nextsssettings} ref={nextSlidersRef}>
            {nextSlidersContent.map((item, index) => (
              <div className={` ${styles.nextSliderItem} `} key={index}>
                <Link href="">
                  <div className={` ${styles.nextSliderItemInner} `}>
                    <Image
                      // className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="alds"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
           </div> */}
        </div>

        <div className={`relative ${styles.devlopmentstory}  `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2 pr-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> Our Success Stories </h2>
            </div>
          </div>

          <div className="md:px-28">
            <Slider
              {...portfoliosettings}
              ref={portfolioSliderRef}
              className={`   ${styles.devlopslid} py-3`}
            >
              {portfolioSliderContent.reverse().map((item, index) => (
                <div className={`   `} key={index}>
                  <div
                    className={` container mx-auto flex flex-wrap overflow-hidden`}
                  >
                    <div
                      className={` md:w-full text-center  pr-4 md:px-6   overflow-hidden `}
                    >
                      <div className={` ${styles.casehg}`}>
                        <Image src={item.image} alt="alds" />
                        <div className={` ${styles.case}`}>
                          <h3> {item.title} </h3>
                          <h6> {item.loc} </h6>
                          <p> {item.content} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* <div className={`flex space-x-4  ${styles.button1}`}>
            <IconButton
              className={`text-white`}
              onClick={() => developmentSliderRef?.current?.slickPrev()}
            >
              <ChevronLeftIcon
                className="text-white bg-blue-custom"
                style={{ fontSize: 50 }}
              />
            </IconButton>
          </div> */}
            <div className={`flex space-x-4  ${styles.button2}`}>
              <IconButton
                className={``}
                onClick={() => portfolioSliderRef?.current?.slickNext()}
              >
                <ChevronRightIcon
                  className={`text-white bg-blue-custom`}
                  style={{ fontSize: 50 }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={` ${styles.webdesign} `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full px-4 md:px-20 text-center  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> AWARDS & RECOGNITION </h2>
            </div>
          </div>

          <div className="flex flex-wrap px-4 md:pb-20 md:px-28 overflow-hidden xl:-mx-3">
            <div className="w-full overflow-hidden text-center xl:my-3 xl:px-3 xl:w-1/3">
              <a
                href="https://www.goodfirms.co/company/aladinn-digital-solutions"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={require("@/assets/images/home/clients/app-development.svg")}
                  alt="Aladinn Tech"
                  width="220"
                  height="220"
                />
              </a>
            </div>

            <div className="w-full overflow-hidden text-center xl:my-3 xl:px-3 xl:w-1/3">
              <a
                href="https://www.designrush.com/agency/profile/aladinn-tech"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={require("@/assets/images/home/clients/designrush.png")}
                  alt="Aladinn Tech"
                />
              </a>
            </div>

            <div className="w-full overflow-hidden text-center xl:my-3 xl:px-3 xl:w-1/3">
              <a
                href="https://www.goodfirms.co/company/aladinn-digital-solutions"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={require("@/assets/images/home/clients/telemedicine-software.svg")}
                  alt="Aladinn Tech"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`relative ${styles.testimonials} pt-16 pb-20 `}>
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <h2> Discover What Our Clients Have To Share </h2>
              <h4>
                <a href=""> Testimonials </a>
              </h4>
            </div>
          </div>

          <div className="px-8 md:px-52 md:pt-8">
            <Slider
              {...testimonialsettings}
              ref={testimonialSliderRef}
              className={`   ${styles.textslids} py-3`}
            >
              {testimonialSliderContent.map((item, index) => (
                <div className={`   `} key={index}>
                  <div
                    className={` container mx-auto flex flex-wrap overflow-hidden`}
                  >
                    <div
                      className={` ${styles.testb} md:w-full px-2 py-2 md:px-6   overflow-hidden `}
                    >
                      <p>{item.content} </p>
                      <h3> {item.title} </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* <div className={`flex space-x-4  ${styles.button1}`}>
            <IconButton
              className={`text-white`}
              onClick={() => developmentSliderRef?.current?.slickPrev()}
            >
              <ChevronLeftIcon
                className="text-white bg-blue-custom"
                style={{ fontSize: 50 }}
              />
            </IconButton>
          </div> */}
            <div className={`flex space-x-4  ${styles.button3}`}>
              <IconButton
                className={``}
                onClick={() => testimonialSliderRef?.current?.slickNext()}
              >
                <ChevronRightIcon
                  className={`text-white bg-blue-custom`}
                  style={{ fontSize: 50 }}
                />
              </IconButton>
            </div>
            <div className={` ${styles.testview} text-center pt-12`}>
              <a href=" "> See More Testimonials </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full md:w-1/2 overflow-hidden px-4 pt-5 ">
            <div className="bg-blue-50 mb-4 px-4 py-4">
              <p className="mb-4 my-2 px-3 font-normal text-lg   flex flex-wrap text-gray-600 w-full">
                <div className={`${styles.boxshadow}`}>
                  <Image
                    src={require("@/assets/images/logo/usa.png")}
                    alt="Aladinn Tech"
                    height={40}
                    width={40}
                  />
                </div>
                <div className={`${styles.boxstext}`}>
                  <h3>USA</h3>
                  <h4>10685-B Hazelhurst Dr. #31618 Houston, TX 77043 USA</h4>
                  <br />
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4117.5650839164755!2d-95.56348996934953!3d29.796764478472735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c55fbf410fdf%3A0xa90ed1a73a401470!2sALDS%20-%20Web%20and%20Mobile%20App%20Development!5e0!3m2!1sen!2sin!4v1648643554769!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  className="mt-4"
                ></iframe>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 overflow-hidden px-4 pt-5">
            <div className="bg-blue-50 mb-4 px-4 py-4 ">
              <p className="mb-4 my-2 px-3 font-normal text-lg text-base flex flex-wrap text-gray-600">
                <div className={`${styles.boxshadow}`}>
                  <Image
                    src={require("@/assets/images/logo/india.png")}
                    alt="Aladinn Tech"
                    height={40}
                    width={40}
                  />
                </div>
                <div className={`${styles.boxstext}`}>
                  <h3>India</h3>
                  <h4> G-2, Parivahan Marg, Behind Hotel Rajmahal Palace, </h4>
                  <h4>
                    {" "}
                    Shivaji Nagar, C Scheme, Ashok Nagar, Jaipur, Rajasthan
                    302001
                  </h4>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9364064309066!2d75.78847981504475!3d26.90551328313071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db412a7e7b9c3%3A0x9b12e57f66893732!2sALDS!5e0!3m2!1sen!2sin!4v1632456052722!5m2!1sen!2sin"
                  width="100%"
                  height="455"
                  loading="lazy"
                  className="mt-4"
                ></iframe>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
