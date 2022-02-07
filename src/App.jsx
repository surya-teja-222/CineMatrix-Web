import { useEffect } from "react";
import dc from "./assets/dc.png";
import k from "./assets/k.png";
import marvel from "./assets/marvel.png";
import x from "./assets/x1.png";
import frozen from "./assets/frozen.png";

import desktop from "./assets/logo/desktop.svg";
import Hero from "./hero";
import bottomDesktop from "./assets/landing-bottom-desktop.png";

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
      <div className="absolute -z-50 h-screen w-screen overflow-x-hidden">
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
          className="absolute bottom-0 z-[90] w-full"
          draggable="false"
        />
      </div>
      <div className="z-10 flex h-screen w-screen flex-col justify-between">
        <div className="flex h-[15%] w-full justify-between py-4 md:px-16 mdm:px-2">
          <img
            src={desktop}
            alt="Logo CInematrixs"
            draggable="false"
            className="my-auto h-[67px] w-[286px]  mdm:h-9"
          />
          <div className="flex gap-8 font-popins  text-[24px] font-bold not-italic leading-[60px] text-[#ffffff] mdm:hidden">
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
        </div>
        <div className="flex h-[60%]  w-screen flex-col  overflow-x-clip ">
          <Hero />
          <div className="flex w-screen justify-center">
            <input
              className="h-[40px] w-[40%] rounded-[17px] text-center font-popins font-bold outline-none mdm:h-[60px] mdm:w-[90%]"
              placeholder="Search for a similar movie recommendation"
            />
          </div>
        </div>
        <div className="flex h-[20%]  w-screen flex-col  overflow-x-clip"></div>
      </div>
      {/* <div className="h-screen w-screen overflow-x-clip">
        <h1>SCREEN 2</h1>
        <h1>SCREEN 2</h1>
      </div> */}
    </>
  );
}

export default App;
