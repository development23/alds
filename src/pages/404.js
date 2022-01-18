import React from "react";
import Image from "next/image";

export default function Custom404() {
  return (
    <div>
      <div className="flex flex-wrap   md:px-32 xl:-mx-4">
        <div className={`text-center  w-full  md:px-28 xl:my-4 xl:px-4`}>
          <Image
            src={require("@/assets/images/banner/404.jpg")}
            alt="Mahatma Gandhi Hospital"
            objectFit="responsive"
          />
        </div>
      </div>
    </div>
  );
}
