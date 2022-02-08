import { useEffect } from "react";
import dc from "./assets/dc.png";
import k from "./assets/k.png";
import marvel from "./assets/marvel.png";
import x from "./assets/x1.png";
import frozen from "./assets/frozen.png";

import desktop from "./assets/logo/desktop.svg";
import Hero from "./hero";
import bottomDesktop from "./assets/landing-bottom-desktop.png";
import bottomMobile from "./assets/landing-bottom-mobile.svg";

import binge from "./assets/binge.svg";

function App() {
  useEffect(() => {
    function move() {
      setTimeout(() => {
        // check if user is on this tab
        if (document.hidden) {
          move();
        } else {
          const offset = 1;
          const slides = document.querySelector("[data-slides]");
          const activeSlide = slides.querySelector("[data-active]");
          let newIndex = [...slides.children].indexOf(activeSlide) + offset;
          if (newIndex < 0) newIndex = slides.children.length - 1;
          if (newIndex >= slides.children.length) newIndex = 0;
          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;
          move();
        }
      }, 60000);
    }
    move();
  });

  return (
    <>
      <div className="absolute -z-50 h-screen w-full overflow-x-hidden">
        <section aria-label="Newest Photos">
          <div className="carousel" data-carousel>
            <ul data-slides>
              <li className="slide" data-active>
                <img src={k} alt="Korean bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={marvel} alt="Marvel bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={x} alt="Unknown bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={dc} alt="DC bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={frozen} alt="frozen bg" draggable="false" />
              </li>
            </ul>
          </div>
        </section>
        <img
          src={bottomDesktop}
          className="mdm:hidden absolute bottom-0 z-[90] w-full"
          draggable="false"
          alt=""
        />
        <img
          src={bottomMobile}
          className="absolute bottom-0 z-[90] w-full md:hidden"
          draggable="false"
          alt=""
        />
      </div>
      <div className="z-10 flex h-screen  flex-col justify-between  overflow-x-hidden">
        <div className="mdm:px-2 flex h-[15%] w-full justify-between py-4 md:px-16">
          <img
            src={desktop}
            alt="Logo CInematrixs"
            draggable="false"
            className="mdm:h-9 unselectable my-auto  h-[67px] w-[286px]"
          />
          <div className="font-popins mdm:hidden flex  gap-8 text-[24px] font-bold not-italic leading-[60px] text-[#ffffff]">
            <p className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline">
              JaxxTopia
            </p>
            <p className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline">
              How it's made
            </p>
            <p className="shad unselectable mt-auto cursor-pointer 	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline">
              About Us
            </p>
          </div>
          <div className="md:hidden">
            <div
              id="nav-p"
              className="transition-gen mx-4 my-4 flex h-12 w-12 flex-col justify-evenly "
              onClick={() => {
                document.getElementById("nav2").classList.toggle("opacity-0");
                document.getElementById("nav-p").classList.toggle("rotate-180");
                document.getElementById("nav1").classList.toggle("rotate-45");
                document
                  .getElementById("nav1")
                  .classList.toggle("translate-y-[12px]");
                document.getElementById("nav3").classList.toggle("-rotate-45");
                document
                  .getElementById("nav3")
                  .classList.toggle("-translate-y-[12px]");
                if (
                  document
                    .getElementById("mob-menu")
                    .classList.contains("invisible")
                ) {
                  document
                    .getElementById("mob-menu")
                    .classList.toggle("animate-modal");
                  document
                    .getElementById("mob-menu")
                    .classList.toggle("invisible");
                } else {
                  document
                    .getElementById("mob-menu")
                    .classList.toggle("animate-modal-out");
                  document
                    .getElementById("mob-menu")
                    .classList.toggle("invisible");
                }
              }}
            >
              <div id="nav1" className="transition-gen h-1 w-12 bg-white"></div>
              <div id="nav2" className="transition-gen h-1 w-12 bg-white"></div>
              <div id="nav3" className="transition-gen h-1 w-12 bg-white"></div>
            </div>
          </div>
        </div>
        <div
          id="mob-menu"
          className=" invisible absolute  top-[15%] z-50  flex w-full justify-center  md:hidden"
        >
          <div className=" font-popins  min-h-40 flex  w-[80%]  flex-col gap-4 rounded-xl bg-slate-700 py-8 text-[24px] font-bold not-italic leading-[60px] text-[#ffffff]">
            <p className=" unselectable mt-auto cursor-pointer  text-center	 text-[#ffffffce] no-underline   hover:text-white hover:underline">
              JaxxTopia
            </p>
            <p className=" unselectable mt-auto cursor-pointer text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline">
              How it's made
            </p>
            <p className=" unselectable mt-auto cursor-pointer  text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline">
              About Us
            </p>
          </div>
        </div>
        <div className="flex h-[60%]  w-full flex-col  overflow-x-clip ">
          <Hero />
          <div className="flex w-full justify-center">
            <input
              className="font-popins mdm:h-[60px] mdm:w-[90%] h-[45px] w-[40%] rounded-[17px] text-center text-lg font-bold outline-none"
              placeholder="Search for a similar movie recommendation"
            />
          </div>
        </div>
        <div className="flex h-[20%]  w-full flex-col  overflow-x-clip"></div>
      </div>
      <div className="mdm:flex-col flex h-screen max-h-screen w-full">
        <div className="font-black-ops flex flex-col md:w-1/2">
          <h1 className="unselectable sp-t mdm:mt-4 mdm:text-center mdm:text-[28px] text-[42px] underline md:mx-16 md:mt-8">
            Features
          </h1>
          <img
            src={binge}
            draggable="false"
            className="mdm:mx-auto mdm:w-1/3 mt-auto w-3/4"
            alt=""
          />
        </div>
        <div className="font-hightide my-16 mx-24  flex flex-col justify-center gap-8 md:w-1/2">
          {/* <p className="text-lg ">
            Get Personalised recommendations based on what you watched earlier.
            Our model always give you best suggestions. This is{" "}
            <b>
              <u>NOT ORIGINAL & sasi edit</u>
            </b>
          </p>
          <p className="text-lg ">
            Get Personalised recommendations based on what you watched earlier.
            Our model always give you best suggestions.
          </p> */}

          <div className="top-container relative w-full">
            <div className="bgeffect animate-blob absolute top-0 -left-4 -z-50 h-96   w-96 mdm:w-44 mdm:h-44 rounded-full bg-purple-300 opacity-70  mix-blend-multiply blur-xl  filter"></div>
            <div className="bgeffect animate-blob animation-delay-2000 absolute top-0 -right-4 -z-50 h-96   w-96 mdm:w-44 mdm:h-44  rounded-full bg-yellow-300  opacity-70 mix-blend-multiply blur-xl filter"></div>
            <div className="bgeffect animate-blob animation-delay-4000 absolute -bottom-8 left-20 -z-50 h-96   w-96  mdm:w-44 mdm:h-44 rounded-full bg-pink-300  opacity-70 mix-blend-multiply blur-xl  filter"></div>
            <div className="top-container flex flex-col gap-4">
              <div className="h-[200px] w-[80%] rounded-lg bg-white shadow-lg opacity-100">
                <p className="p-4 text-lg  mdm:text-sm">
                  Get Personalised recommendations based on what you watched
                  earlier. Our model always give you best suggestions. This is{" "}
                  <b>
                    <u>NOT ORIGINAL & sasi edit</u>
                  </b>
                </p>
              </div>
              <div className="h-[200px] w-[80%] rounded-lg bg-white shadow-lg opacity-100">
                <p className="p-4 text-lg mdm:text-sm">
                  Get Personalised recommendations based on what you watched
                  earlier. Our model always give you best suggestions. This is{" "}
                  <b>
                    <u>NOT ORIGINAL & sasi edit</u>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
