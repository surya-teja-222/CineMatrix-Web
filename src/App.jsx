// react components
import React, { useEffect, useState, lazy, Suspense } from "react";

// Images
import dc from "./assets/dc.png";
import k from "./assets/k.png";
import marvel from "./assets/marvel.png";
import x from "./assets/x1.png";
import frozen from "./assets/frozen.png";
import desktop from "./assets/logo/desktop.svg";
import bottomDesktop from "./assets/landing-bottom-desktop.png";
import bottomMobile from "./assets/landing-bottom-mobile.svg";
import binge from "./assets/binge.svg";
import tech from "./assets/Technology.gif";
import scalability from "./assets/scalability.svg";

// JSX COMPONENTS
import Hero from "./hero";
// import Footer from "./components/Footer";
// import Review from "./components/Review";
// import Main from "./components/main";
import About from "./components/aboutUs";

// methods
import fetchh from "./methods/fetchh";

const Review = lazy(() => import("./components/Review"));
const Footer = lazy(() => import("./components/Footer"));
const Main = lazy(() => import("./components/main"));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    document
      .querySelector("#hero_input")
      .addEventListener("keyup", async (e) => {
        if (e.target.value.length > 0) {
          document.getElementById("bottom_desktop").classList.add("opacity-0");
          document.getElementById("bottom_mobile").classList.add("opacity-0");
          var k = await fetchh(e.target.value);
          if (k !== suggestions && k.length > 0) {
            setSuggestions(k);
          }
          if (e.keyCode === 13) {
            setSearchTerm(e.target.value);
            document.querySelector("#main_search").scrollIntoView({
              behavior: "smooth",
            });
            document
              .getElementById("bottom_desktop")
              .classList.remove("opacity-0");
            document
              .getElementById("bottom_mobile")
              .classList.remove("opacity-0");
          }
        } else {
          document
            .getElementById("bottom_desktop")
            .classList.remove("opacity-0");
          document
            .getElementById("bottom_mobile")
            .classList.remove("opacity-0");
        }
      });
  }, []);

  useEffect(() => {
    k = process.env.REACT_APP_URL + "?movie=test";
    var k = fetch(k);
  }, []);

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
  }, []);

  return (
    <>
      <div className="absolute -z-50 h-screen w-full overflow-x-hidden">
        <section aria-label="Newest Photos">
          <div className="carousel" data-carousel>
            <ul data-slides>
              <li className="slide" data-active>
                <img src={k} alt="Korean bg" draggable="false" loading="lazy" />
              </li>
              <li className="slide">
                <img
                  src={marvel}
                  alt="Marvel bg"
                  draggable="false"
                  loading="lazy"
                />
              </li>
              <li className="slide">
                <img
                  src={x}
                  alt="Unknown bg"
                  draggable="false"
                  loading="lazy"
                />
              </li>
              <li className="slide">
                <img src={dc} alt="DC bg" draggable="false" loading="lazy" />
              </li>
              <li className="slide">
                <img
                  src={frozen}
                  alt="frozen bg"
                  draggable="false"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        </section>
        <img
          src={bottomDesktop}
          className="bottom_desktop mdm:hidden absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out"
          draggable="false"
          alt=""
          id="bottom_desktop"
          loading="lazy"
        />
        <img
          src={bottomMobile}
          className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out md:hidden"
          draggable="false"
          alt=""
          id="bottom_mobile"
          loading="lazy"
        />
      </div>
      <div className="z-10 flex h-screen  flex-col   overflow-x-hidden">
        <header>
          <div className="mdm:px-2 flex h-[15%] w-full justify-between py-4 md:px-16">
            <img
              src={desktop}
              alt="Logo CInematrixs"
              draggable="false"
              className="mdm:h-9 unselectable my-auto  h-[67px] w-[286px]"
              loading="lazy"
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
                  document
                    .getElementById("nav-p")
                    .classList.toggle("rotate-180");
                  document.getElementById("nav1").classList.toggle("rotate-45");
                  document
                    .getElementById("nav1")
                    .classList.toggle("translate-y-[12px]");
                  document
                    .getElementById("nav3")
                    .classList.toggle("-rotate-45");
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
                <div
                  id="nav1"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
                <div
                  id="nav2"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
                <div
                  id="nav3"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
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
        </header>
        <div className="flex h-[60%]  w-full flex-col  overflow-x-clip ">
          <Hero />
          <div className="flex w-full justify-center">
            <input
              className="font-popins mdm:h-[60px] mdm:w-[90%] mdm:text-sm h-[45px] w-[40%] rounded-[17px] text-center text-lg font-bold outline-none"
              placeholder="Search for a similar movie recommendation"
              id="hero_input"
            />
          </div>
          <div
            id="suggestions"
            className="mdm:w-[90%] mx-4 flex h-48  max-h-48 w-[40%] flex-col  self-center rounded-lg pt-1"
          >
            {setInner(suggestions)}
          </div>
        </div>
      </div>
      <div className="mdm:flex-col flex  w-full">
        <div className="font-Poppins flex flex-col md:w-1/2">
          <h1 className="unselectable sp-t mdm:mt-4 mdm:text-center mdm:text-[28px] text-[42px] underline md:mx-16 md:mt-8">
            Features
          </h1>
          <img
            src={binge}
            draggable="false"
            className="mdm:mx-auto mdm:w-1/3 mt-auto w-3/4"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="font-Dosis my-16 flex flex-col  justify-center gap-8 font-bold md:mx-24 md:w-1/2">
          <div className="top-container mdm:overflow-x-clip relative w-full">
            <div className="bgeffect animate-blob mdm:w-44 mdm:h-44 absolute top-0 -left-4   -z-50 h-96 w-96 rounded-full bg-purple-300 opacity-70  mix-blend-multiply blur-xl  filter"></div>
            <div className="bgeffect animate-blob animation-delay-2000 mdm:w-44 mdm:h-44 absolute top-0 -right-4   -z-50 h-96 w-96  rounded-full bg-yellow-300  opacity-70 mix-blend-multiply blur-xl filter"></div>
            <div className="bgeffect animate-blob animation-delay-4000 mdm:w-44 mdm:h-44 absolute -bottom-8 left-20   -z-50  h-96 w-96 rounded-full bg-pink-300  opacity-70 mix-blend-multiply blur-xl  filter"></div>
            <div className="top-container flex flex-col gap-4 ">
              <div className="focus:animate-slide-fwd-center mdm:self-center  smm:flex-col mdm:w-[80%] flex w-[80%] gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg md:min-h-[200px]">
                <div className=" smm:self-center smm:w-[80%] my-auto sm:w-1/3">
                  <img
                    src={tech}
                    className="unselectable"
                    alt="Technology used 1"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="smm-w[80%] my-auto sm:w-2/3">
                  <p className="mdm:text-sm p-4  text-lg">
                    Get Personalised recommendations based on what you watched
                    earlier. Our model always give you best suggestions. This is{" "}
                    <b>
                      <u>NOT ORIGINAL & sasi edit</u>
                    </b>
                  </p>
                </div>
              </div>
              <div className="mdm:self-center  smm:flex-col mdm:w-[80%] flex w-[80%] gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg md:min-h-[200px]">
                <div className=" smm:self-center smm:w-[80%] my-auto sm:w-1/3">
                  <img
                    src={scalability}
                    className="unselectable"
                    alt="Technology used"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="smm-w[80%] my-auto sm:w-2/3">
                  <p className="mdm:text-sm p-4  text-lg">
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
      </div>

      <Suspense fallback={<div id="main_search" className="search "></div>}>
        <div id="main_search" className="search ">
          {/* normal  search bar , flex of (search part 1 , part 2) */}
          <Main searchTerm={searchTerm} />
        </div>
      </Suspense>
      <About />
      {/* <div id="main_search" className="search "> */}
      {/* normal  search bar , flex of (search part 1 , part 2) */}
      {/* <Main searchTerm={searchTerm} /> */}
      {/* </div>1 */}

      <Suspense fallback={<div>Loading... </div>}>
        <Review searchTerm={searchTerm} />
      </Suspense>

      <Suspense fallback={<footer>Loading... </footer>}>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </>
  );
  function setInner(suggestions) {
    var array = [];
    for (var i = 0; i < suggestions.length; i++) {
      if (i === 0) {
        array.push(
          <div
            key={i}
            role={"list"}
            className="terms font-Poppins w-full cursor-pointer rounded-t-md bg-white text-center font-semibold text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      } else if (i === suggestions.length - 1) {
        array.push(
          <div
            role={"list"}
            key={i}
            className="terms font-Poppins w-full cursor-pointer rounded-b-md bg-white text-center font-semibold capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      } else {
        array.push(
          <div
            role={"list"}
            key={i}
            className="terms font-Poppins w-full cursor-pointer bg-white text-center font-semibold  capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      }
    }
    if (array.length === 0) {
      array.push(
        <div
          key={i}
          className="terms font-Poppins w-full rounded-md  bg-white text-center font-semibold capitalize text-black transition-colors duration-100 ease-linear "
        >
          No matching results found...
        </div>
      );
    }
    return array;
  }
}

export default App;

/*
MAIN PAGE
FEATURES
SEARCH PART
ABOUT US
RATEUS/CONTACT US
SUPPORT US
FOOTER
*/
