import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { Contact } from "@/config/bannerConfig";
import InnerBanner from "ui/innerbanner";
import Sidebar from "components/sidebar";
import { ThumbDown } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocationIcon from "@material-ui/icons/LocationOn";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const saveLeadSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long")
    .required("Phone number is required."),
  name: Yup.string().required("Name field is required."),
  email: Yup.string()
    .required("Email field is required.")
    .email("Must be a valid email address."),
  subject: Yup.string()
      .required("Subject is required")
      .max(500, "Word limit exceeded"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Word limit exceeded"),
});

export default function Contactus() {
  const router = useRouter();

  const saveLead = (values, { resetForm }) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
    router.push("/thankyou");
  };
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
            src={require("@/assets/images/banner/contact.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>
      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className={` ${styles.bgimage} `}>
          <div className="md:px-28 md:pt-10 ">
            <div className="flex flex-wrap md:px-38  overflow-hidden ">
              <div
                className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
              >
                <div className={` ${styles.titlesubcontainer} `}>
                  <p className={` ${styles.titlesub} `}>Get In Touch With Us</p>

                  <h2 className={` ${styles.titlemain} `}> Enquire Now </h2>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap px-2 py-2 sm:px-28 md:px-28 lg:px-28 xl:px-28 overflow-hidden">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:py-4 md:py-4 lg:py-4 xl:py-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 overflow-hidden">
              <div className={` ${styles.head} pt-8`}>
                <h5 className={`text-2xl mb-2  ${styles.textdarkblue}`}>
                  Get In Touch With Us
                </h5>
              </div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  type: "Contact page form",
                  subject: "",
                }}
                onSubmit={saveLead}
                validationSchema={saveLeadSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <div className="flex flex-wrap overflow-hidden lg:-mx-6 xl:-mx-4">
                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <input
                        type="text"
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        placeholder="Enter Your Name"
                        name="name"
                        value={values.name}
                        className="w-full mb-1 py-3 px-2 text-black border-gray-300 border"
                        required
                      />
                      {errors.name && touched.name ? (
                        <p className="text-red-500">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <input
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        placeholder="Enter Your Email"
                        name="email"
                        className="w-full mb-1 py-3 px-2 text-black border-gray-300 border"
                        required
                      />
                      {errors.email && touched.email ? (
                        <p className="text-red-500">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <input
                        type="tel"
                        onChange={handleChange("phone")}
                        value={values.phone}
                        onBlur={handleBlur("phone")}
                        placeholder="Enter Your Contact Number"
                        name="phone"
                        className="w-full mb-1 py-3 px-2 text-black border-gray-300 border"
                        required
                      />
                      {errors.phone && touched.phone ? (
                        <p className="text-red-500">{errors.phone}</p>
                      ) : null}
                    </div>
                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <input
                        type="text"
                        placeholder="Enter Subject"
                        value={values.subject}
                        onChange={handleChange("subject")}
                        onBlur={handleBlur("subject")}
                        name="subject"
                        className="w-full mb-1 py-3 px-2 text-black border-gray-300 border"
                        required
                      />
                      {errors.subject && touched.subject ? (
                        <p className="text-red-500">{errors.subject}</p>
                      ) : null}
                    </div>

                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <textarea
                        placeholder="Enter Message"
                        onChange={handleChange("message")}
                        onBlur={handleBlur("message")}
                        name="message"
                        value={values.message}
                        className="w-full mb-1 py-3 h-40 px-2 text-black border-gray-300 border"
                        required
                      />
                      {errors.message && touched.message ? (
                        <p className="text-red-500">{errors.message}</p>
                      ) : null}
                    </div>

                    <div className="my-1 px-3 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3 xl:my-4 xl:px-4 xl:w-full">
                      <button
                        className={`${styles.darkbluebg} hover:bg-blue-800 text-white rounded-full py-3.5 px-8 font-bold hover:text-white py-1 px-4 border hover:border-transparent rounded`}
                        onClick={handleSubmit}
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                )}
              </Formik>
            </div>

            <div className="w-full pt-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:py-4 md:py-4 lg:py-4 xl:py-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 overflow-hidden">
              <div className="bg-blue-50 mb-4 px-4 py-4">
                <p className="mb-4 my-2 px-3 font-normal text-lg text-base flex flex-wrap text-gray-600">
                  <PhoneIcon
                    className={`fill-current stroke-2 text-sm text-white ${styles.boxshadow}`}
                  />
                  <div className={`${styles.boxstext}`}>
                    <h3>Phone Number</h3>
                    <h4> 0141 4001852 </h4>
                  </div>
                </p>
              </div>
              <div className="bg-blue-50 mb-4 px-4 py-4">
                <p className="mb-4 my-2 px-3 font-normal text-lg text-base flex flex-wrap text-gray-600">
                  <div className={`${styles.boxshadow}`}>
                    <Image
                      src={require("@/assets/images/logo/skype.png")}
                      alt="Aladinn Tech"
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className={`${styles.boxstext}`}>
                    <h3>Skype Number</h3>
                    <h4> (832) 548-5882 </h4>
                  </div>
                </p>
              </div>
              <div className="bg-blue-50 mb-4 px-4 py-4">
                <p className="mb-4 my-2 px-3 font-normal text-lg text-base flex flex-wrap text-gray-600">
                  <EmailIcon
                    className={`fill-current stroke-2 text-sm text-white ${styles.boxshadow}`}
                  />
                  <div className={`${styles.boxstext}`}>
                    <h3>Email</h3>
                    <h4> development@aladinntech.in </h4>
                  </div>
                </p>
              </div>
              <div className="bg-blue-50 mb-4 px-4 py-4">
                <p className="mb-4 my-2 px-3 font-normal text-lg text-base flex flex-wrap text-gray-600 w-full">
                  <div className={`${styles.boxshadow}`}>
                    <Image
                      src={require("@/assets/images/logo/usa.png")}
                      alt="Aladinn Tech"
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className={`${styles.boxstext}`}>
                    <h3>Location</h3>
                    <h4>
                      10685-B Hazelhurst
                      <br /> Dr. #31618 Houston,
                      <br /> TX 77043 USA
                    </h4>
                  </div>
                </p>
              </div>
              <div className="bg-blue-50 mb-4 px-4 py-4">
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
                    <h3>Location</h3>
                    <h4>
                      G-2, Parivahan Marg, Behind Hotel
                      <br /> Rajmahal Palace, Shivaji Nagar,
                      <br /> C Scheme, Ashok Nagar,
                      <br /> Jaipur, Rajasthan 302001
                    </h4>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9364064309066!2d75.78847981504475!3d26.90551328313071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db412a7e7b9c3%3A0x9b12e57f66893732!2sALDS!5e0!3m2!1sen!2sin!4v1632456052722!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
