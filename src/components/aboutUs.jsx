import surya from "./../assets/surya-img.svg";
import sasi from "./../assets/sasi-img.svg";
import harsha from "./../assets/harsha-img.svg";
import React from "react";

export default function AboutUs() {
  return (
    <section className="about-us" aria-label="About the devs">
      <div className="mdm:grid-rows-3 relative grid  min-h-[36rem] w-full md:grid-cols-3">
        <div className="mdm:hidden  absolute w-full py-4">
          <h3 className="font-Nanum unselectable mx-auto text-center text-8xl text-white">
            About the Team
          </h3>
        </div>
        <div className="flex h-full max-h-screen flex-col justify-end bg-[#EACE6B]">
          <img
            src={surya}
            className=" ml-auto mt-auto  max-h-screen w-full "
            draggable="false"
            alt="Surya Teja Reddy @surya-teja-222 https://github.com/surya-teja-222"
          />
        </div>
        <div className="flex h-full max-h-screen flex-col justify-end bg-[#75D0D7]">
          <img
            src={sasi}
            className="mx-auto  mt-auto  max-h-screen w-full "
            draggable="false"
            alt="Sasi Vatsal @sasivatsal7122 https://github.com/sasivatsal7122"
          />
        </div>
        <div className="flex h-full max-h-screen flex-col justify-end bg-[#DE8B95]">
          <img
            src={harsha}
            className="mr-auto   max-h-screen  w-full "
            draggable="false"
            alt="Harsha @HarshaMalla https://github.com/HarshaMalla"
          />
        </div>
      </div>
    </section>
  );
}
