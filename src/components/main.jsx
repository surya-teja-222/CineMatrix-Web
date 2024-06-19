import React from "react";

import { useState, useEffect } from "react";
import getData from "../methods/getData";
import DataItem from "./DataItem";

import searchIco from "./../assets/search.png";
import interest from "./../assets/Based On Your Interests.png";
import based from "./../assets/peopleWhoLiked.png";
import loading from "./../assets/loading.gif";
import { useSearch } from "../SearchContext";

function Main() {
	const { selectedTerm } = useSearch();
	const [knn, setKnn] = useState(null);
	const [svd, setSvd] = useState(null);
	const [item, setItem] = useState(null);

	useEffect(() => {
		const handleFetch = async () => {
			if (selectedTerm !== null && selectedTerm?.length > 2) {
				const resItem = new Promise(async (resolve) => {
					resolve(JSON.stringify(await getData("item", selectedTerm)));
				});
				setItem(JSON.parse(await resItem));
				const resKnn = new Promise(async (resolve) => {
					resolve(JSON.stringify(await getData("knn", selectedTerm)));
				});
				setKnn(JSON.parse(await resKnn));
				const resSvd = new Promise(async (resolve) => {
					resolve(JSON.stringify(await getData("svd", selectedTerm)));
				});
				setSvd(JSON.parse(await resSvd));
			}
		};

		handleFetch();
	}, [selectedTerm]);

	useEffect(() => {
		if (selectedTerm) {
			document.getElementById("input").value = selectedTerm;
		}
		if (document.getElementById("data-loading")) {
			document.getElementById("data-loading")?.classList.remove("hidden");
		}
	}, [selectedTerm]);

	useEffect(() => {
		if (!knn && !svd && !item) {
			document.getElementById("data-loading")?.classList.add("hidden");
		}
	}, [knn, svd, item]);

	if (!selectedTerm) {
		return null;
	}

	if (selectedTerm !== null) {
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

				<div
					className="flex w-full flex-col gap-3 "
					id="knn-data"
					data-knn
				>
					{loadingData()}
					{load("item", item)}
					{load("knn", knn)}
					{load("svd", svd)}
				</div>
			</div>
		);
	}

	function load(type, data) {
		if (
			data !== "" &&
			typeof data !== "undefined" &&
			data !== null
		) {
			var d = JSON.parse(data);
			var movies = d.movie;
			var index = d.title;
			var returndata = [];
			if (type === "knn") {
				returndata.push(
					<>
						<img
							src={based}
							alt="People who watched this movie also liked these movies "
							className="unselectable mb-2 max-h-80 "
							draggable="false"
						/>
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
						key={movies[i] + i + type}
					/>
				);
			}

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
					className="m-6 flex  h-80 w-3/5 flex-col items-center justify-center gap-4 self-center rounded-2xl bg-slate-200 text-xl shadow-2xl md:mx-12 mdm:w-[90%] mdm:self-center"
					id="data-loading"
				>
					<div className="loading">
						<img
							src={loading}
							alt="loading..."
							className="unselectable h-8 w-fit animate-bounce"
							draggable="false"
						/>
					</div>
					<div className="message animate-pulse font-mono">
						Loading...
					</div>
					<div className="message mdm:text-center">
						Please wait while we add our magic to your great taste.
					</div>
					<div className="did-you-know-head mt-4 text-xs font-extrabold text-gray-800">
						DID YOU KNOW
					</div>
					<div className="did-you-know-body mx-2 font-Poppins  text-sm  italic text-gray-700 mdm:text-center">
						We use KNN ML model as one of our methods to get best
						recomendations.
					</div>
				</div>
			</>
		);
	}

	return <></>;
}

export default Main;
