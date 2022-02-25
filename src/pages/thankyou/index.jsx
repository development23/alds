import React, { useEffect } from "react";
import Image from "next/image";
import contact from "../../../public/video/ok.gif";
import { useRouter } from "next/router";

export default function Thankyou() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <div className={`text-center bg-black`}>
        <div className="pt-16">
          <Image src={contact} alt="Aladinn Tech" />
        </div>{" "}
      </div>
    </div>
  );
}
