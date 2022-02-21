import PropTypes from "prop-types";
import React from "react";

import { useState, useEffect } from "react";
import getData from "../methods/getData";
import DataItem from "./DataItem";

import searchIco from "./../assets/search.png";
import interest from "./../assets/Based On Your Interests.svg";
import loading from "./../assets/loading.gif";

function Main({ searchTerm }) {
  const [search, setSearch] = useState("");
  const [knn, setKnn] = useState("");
  const [svd, setSvd] = useState("");
  const [item, setItem] = useState("");
  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm]);

  useEffect(async () => {
    // get data, set knn, svd , item
    if (search !== "") {
      const resKnn = new Promise(async (resolve, reject) => {
        resolve(JSON.stringify(await getData("knn", search)));
      });
      setKnn(JSON.parse(await resKnn));
      const resSvd = new Promise(async (resolve, reject) => {
        resolve(JSON.stringify(await getData("svd", search)));
      });
      setSvd(JSON.parse(await resSvd));
      const resItem = new Promise(async (resolve, reject) => {
        resolve(JSON.stringify(await getData("item", search)));
      });
      setItem(JSON.parse(await resItem));
    }
  }, [search]);

  useEffect(() => {
    if (search) {
      document.getElementById("input").value = search;
    }
  }, [search]);

  useEffect(() => {
    if (knn !== "" && svd !== "" && item !== "") {
      document.querySelector("[data-loading]").style.display = "none";
    }
  }, [knn, svd, item]);

  if (searchTerm !== "") {
    return (
      <>
        <div className="mb-8 w-full">
          <div className="flex w-full justify-between p-4">
            <div className="mdm:w-[95%] flex h-12 w-[40%] justify-between rounded-3xl bg-slate-500">
              <input
                id="input"
                className="font-Poppins  h-12 w-[90%] bg-slate-500 p-6 text-lg font-bold capitalize text-white outline-none"
                placeholder="Enter a Movie Name to get Recomendations"
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    if (
                      document.getElementById("input").value !== "" &&
                      document.getElementById("input").value !== search
                    ) {
                      setSearch(document.getElementById("input").value);
                    }
                  }
                }}
              />
              <img
                src={searchIco}
                alt="decor"
                className="my-auto mr-3 h-[28px] w-[28px] scale-[1] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2]"
                onClick={() => {
                  if (
                    document.getElementById("input").value !== "" &&
                    document.getElementById("input").value !== search
                  ) {
                    setSearch(document.getElementById("input").value);
                  }
                }}
              />
            </div>
          </div>
          <h1 className="font-Poppins cursor-default px-6 py-4 text-lg font-bold capitalize italic text-slate-800 hover:underline">
            Generating binge Recomendations for :
          </h1>
          <h2 className="font-Poppins cursor-default px-6 pb-6 pt-1 text-base font-semibold capitalize text-slate-800 underline hover:italic">
            <span id="spanned-movie">{search}</span>
          </h2>

          <img
            src={interest}
            alt="Based on user's interest"
            className="unselectable mb-8 max-h-80"
            draggable="false"
          />

          <div className="flex w-full flex-col gap-3 " id="knn-data" data-knn>
            {load("knn", knn)}
            {load("svd", svd)}
            {load("item", item)}
            {loadingData()}
          </div>
        </div>
      </>
    );
  }

  function load(type, data) {
    if (
      data !== "" &&
      typeof data !== "undefined" &&
      data !== null &&
      data !== {}
    ) {
      var d = JSON.parse(data);
      // console.log(d);
      var movies = d.movie;
      var index = d.title;
      var returndata = [];
      if (type === "item") {
        returndata.push(
          <>
            <h1>
              People who watched this movie also liked these movies "element
              styling required"
            </h1>
          </>
        );
      }
      for (var i = 0; i < movies.length; i++) {
        returndata.push(
          <DataItem
            mName={movies[i]}
            i={i}
            mIndex={index[i]}
            type={type}
            key={i}
          />
        );
      }
      // return returndata;
      // return returndata by putting it in a div
      return (
        <div id={type} className="flex flex-col gap-3">
          {returndata}
        </div>
      );
    }
  }

  function loadingData() {
    return (
      <>
        <div
          className="  mdm:w-[90%] mdm:self-center m-6 flex h-80 w-1/2 flex-col items-center justify-center gap-4 rounded-xl bg-slate-200 shadow-2xl md:mx-12"
          data-loading
        >
          <div className="loading">
            <img
              src={loading}
              alt="loading..."
              className="unselectable h-8 w-fit animate-bounce"
              draggable="false"
            />
          </div>
          <div className="message animate-pulse font-mono">Loading...</div>
          <div className="message mdm:text-center">
            Please wait while we add our magic to your great taste.
          </div>
          <div className="did-you-know-head mt-4 text-xs font-extrabold text-gray-800">
            DID YOU KNOW
          </div>
          <div className="did-you-know-body font-Poppins mdm:text-center  mx-2  text-sm italic text-gray-700">
            We use KNN ML model as one of our methods to get best
            recomendations.
          </div>
        </div>
      </>
    );
  }

  return <></>;
}

// prop types for the component
Main.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Main;
