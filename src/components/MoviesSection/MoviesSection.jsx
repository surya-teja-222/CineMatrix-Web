import React from "react";

import { useState, useEffect } from "react";

import searchIco from "./../../assets/search.png";
import interest from "./../../assets/Based On Your Interests.png";
import { useSearch } from "../../SearchContext";
import LoadingMovies from "./LoadingMovies";
import KnnBasedData from "./KnnBasedData";
import ItemBasedData from "./ItemBasedData";

const LOADING_INITIAL_STATE = {
  isItemBasedLoading: false,
  isKnnBasedLoading: false,
  isSvdBasedLoading: false,
};

function MoviesSection() {
  const { selectedTerm } = useSearch();
  const [loadingState, setLoadingState] = useState(LOADING_INITIAL_STATE);

  const isDataLoading = Object.values(loadingState).some(
    (isLoading) => isLoading
  );

  useEffect(() => {
    if (selectedTerm) {
      // replacing search term -> non intutive way
      document.getElementById("input").value = selectedTerm;
    }
  }, [selectedTerm]);

  if (!selectedTerm) {
    return null;
  } else {
    return (
      <div className="cus mb-8 w-full bg-gradient-to-r from-[#3b5dcc]  to-[#D12A1E] pb-5">
        <div className="flex w-full justify-between p-4 ">
          <div className="flex h-16 w-[50%] justify-between rounded-full bg-slate-100 shadow-2xl mdm:w-[95%]">
            <input
              id="input"
              className="h-16  w-[80%] bg-slate-100 p-6 font-Poppins text-xl font-bold capitalize text-slate-600 outline-none"
              placeholder="Enter a Movie Name to get Recomendations"
            />
            <img
              src={searchIco}
              alt="decor"
              className="my-auto mr-5 h-[28px] w-[28px] scale-[1] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2]"
            />
          </div>
        </div>
        <h1 className="cursor-default px-6 py-4 font-Poppins text-lg font-bold capitalize italic text-slate-100 hover:underline">
          Generating binge Recomendations for :
        </h1>
        <h2 className="cursor-default px-6 pb-6 pt-1 font-Poppins text-base font-semibold capitalize text-slate-100 underline hover:italic">
          <span id="spanned-movie">{selectedTerm}</span>
        </h2>

        <img
          src={interest}
          alt="Based on user's interest"
          className="unselectable mb-8 max-h-80 "
          draggable="false"
        />

        <div className="flex w-full flex-col gap-3">
          {isDataLoading && <LoadingMovies />}
          <ItemBasedData setLoadingState={setLoadingState} />
          <KnnBasedData setLoadingState={setLoadingState} />
          {/* {load("svd", svd)} */}
          {/* skipping svd for now */}
        </div>
      </div>
    );
  }
}

export default MoviesSection;
