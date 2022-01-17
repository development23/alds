import React from "react";
import { technologies } from "@/config/technologiesConfig";
import Custom404 from "pages/404";
import styles from "./styles.module.css";
import InnerBanner from "ui/innerbanner";

export async function getServerSideProps({ params }) {
  const technology = technologies.filter((item) => item.slug === params.slug);
  if (technology.length === 0) {
    return {
      props: {
        department: "404",
      },
    };
  }
  return {
    props: {
      technology: technology[0],
    },
  };
}

export default function Technology({ technology }) {
  return technologies != "404" ? (
    <div>
      <InnerBanner
        src={require("@/assets/images/blog/blogbanner/" + technology.banner)}
      />
      <div className="flex flex-wrap   xl:-mx-4">
        <div
          className={`${styles.allbanner2} w-full  md:px-28 xl:my-4 xl:px-4`}
        ></div>
      </div>

      <section className=" md:px-32 ">
        <div className={` ${styles.detail}`}>
          <h2> {technology.bannertitle} </h2>
          <p>{technology.description}</p>
          <p>{technology.description1}</p>
        </div>
      </section>
    </div>
  ) : (
    <Custom404 />
  );
}
