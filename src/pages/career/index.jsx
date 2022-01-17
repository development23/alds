import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import Sidebar from "components/sidebar";
import { ThumbDown } from "@material-ui/icons";

export default function Careers() {
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
            src={require("@/assets/images/banner/career.jpg")}
            alt="Aladinn Tech"
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
                <p className={` ${styles.titlesub} `}> We are hiring </p>

                <h2 className={` ${styles.titlemain} `}> Career </h2>
              </div>{" "}
            </div>

            <div className={` ${styles.about} `}>
              <div className="w-full xl:my-3 overflow-hidden">
                <table
                  border="0"
                  className={`table-fixed border border-green-800 w-full text-center ${styles.tablelayout} `}
                >
                  <tbody>
                    <tr className="bg-blue-900 text-white text-xl py-8">
                      <th>Position</th>
                      <th>Location</th>
                      <th>Vacancy</th>
                      <th>Experience</th>
                      <th>Status</th>
                    </tr>
                    <tr className="bg-gray-300 text-gray-800 text-md py-8">
                      <td>React Native Developer</td>
                      <td>Jaipur</td>
                      <td>1-2</td>
                      <td>2+ Years</td>
                      <td>
                        <b>OPEN</b>
                      </td>
                    </tr>

                    <tr className="bg-gray-100 text-gray-800 text-md py-8">
                      <td>Business Analyst</td>
                      <td>Jaipur</td>
                      <td>3</td>
                      <td>0-2 year</td>
                      <td>
                        <b>OPEN</b>
                      </td>
                    </tr>
                    <tr className="bg-gray-300 text-gray-800 text-md py-8">
                      <td>Backend Developer</td>
                      <td>Jaipur</td>
                      <td>4</td>
                      <td>0-3 years</td>
                      <td>
                        <b>OPEN</b>
                      </td>
                    </tr>

                    <tr className="bg-gray-100 text-gray-800 text-md py-8">
                      <td>Creative Designer</td>
                      <td>Jaipur</td>
                      <td>5</td>
                      <td>0-2 year</td>
                      <td>
                        <b>OPEN</b>
                      </td>
                    </tr>

                    <tr className="bg-gray-300 text-gray-800 text-md py-8">
                      <td className="border-current">Web Designer</td>
                      <td>Jaipur</td>
                      <td>5</td>
                      <td>0-3 year</td>
                      <td>
                        <b>OPEN</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-8 mb-8 bg-blue-900 px-6 py-6">
                  <h5 className="text-lg font-bold text-white">
                    Apply Now :&nbsp;
                    <Link className="text-pink-500" href="/">
                      Click Here
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
