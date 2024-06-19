import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import star from "../../assets/star.svg";
import eStar from "../../assets/estar.svg";

import ratePlatform from "../../methods/ratePlatform";
import rateMovie from "../../methods/rateMovie";
import SupportUs from "./SupportUs";
import RateRecommendation from "./RateRecommendation";
import RateMovie from "./RateMovie";

export default function Review({ searchTerm }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from("#thanks", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#thanks",
        start: "10% bottom",
      },
    });
  }, []);

  if (!searchTerm) {
    searchTerm = "Iron Man 2";
  }

  // TODO: Write better
  // use react best practices
  function changeStar(e) {
    var id = e.target.id;
    var stars = document.getElementsByClassName("mstar");
    var num = id.slice(-1);
    num = parseInt(num);
    // change src of first num stars to star
    for (var i = 0; i < 5; i++) {
      if (i < num) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function changeStarm(e) {
    var id = e.target.id;
    var stars = document.getElementsByClassName("mpstar");
    var num = id.slice(-1);
    num = parseInt(num);
    // change src of first num stars to star
    for (var i = 0; i < 5; i++) {
      if (i < num) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setDefaultStars() {
    var stars = document.getElementsByClassName("mstar");
    for (var i = 0; i < 5; i++) {
      if (i < 3) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setDefaultStarsm() {
    var stars = document.getElementsByClassName("mpstar");
    for (var i = 0; i < 5; i++) {
      if (i < 3) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setPlatformRating(e) {
    ratePlatform(e.target.id);
    // document.getElementById("plat-stars").innerText = "";
    setTimeout(() => {
      document.getElementById("plat-stars").innerText =
        "Thank you for your feedback";
    }, 2000);
  }
  function setMovieRating(e) {
    rateMovie(searchTerm, e.target.id);

    e.target.onmouseout = null;

    // document.getElementById("movie-stars").innerText = "";
    setTimeout(() => {
      document.getElementById("movie-stars").innerText =
        "Thank you for your feedback about the movie";
    }, 2000);
  }

  return (
    <>
      <div className=" font-Poppins z-50 mx-auto  flex w-full flex-col bg-gradient-to-tl from-indigo-900 to-purple-900">
        <h1
          className="mdm:text-2xl my-4 py-4 text-center text-5xl font-extrabold capitalize text-white"
          id="thanks"
        >
          Thanks for Visiting Us
        </h1>
        <div className="mdm:flex-col mdm:mx-auto mdm:gap-20 my-16 mx-4 flex justify-evenly">
          <RateRecommendation changeStar={changeStar} setPlatformRating={setPlatformRating} setDefaultStars={setDefaultStars} />
          <RateMovie
            changeStarm={changeStarm}
            setMovieRating={setMovieRating}
            setDefaultStarsm={setDefaultStarsm}
            searchTerm={searchTerm}
          />
        </div>
        <SupportUs />
      </div>
    </>
  );
}
