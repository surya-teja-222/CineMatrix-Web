import React, { useEffect, useState, Suspense, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useDebounce } from 'use-debounce';

import fetchData from "./methods/fetchData";
import Header from "./components/Header";
import AppSubContent from "./AppSubContent";
import Suggestions from "./components/Suggestions/Suggestions";
import MoviesSection from "./components/MoviesSection";

function App() {
	const inputRef = useRef();
	const [searchTerm, setSearchTerm] = useState("");
	const [defferedSearchTerm] = useDebounce(searchTerm, 800);

	const [suggestions, setSuggestions] = useState([]);

	const showBottomBanner = useCallback(() => {
		document.getElementById("bottom_desktop").classList.remove("opacity-0");
		document.getElementById("bottom_mobile").classList.remove("opacity-0");
	}, []);

	useEffect(() => {
		if (searchTerm.length > 2) {
			document.getElementById("bottom_desktop").classList.add("opacity-0");
			document.getElementById("bottom_mobile").classList.add("opacity-0");
		} else {
			showBottomBanner();
		}
	}, [searchTerm.length, showBottomBanner])

	useEffect(() => {
		async function fetchDataFunc() {
			var k = await fetchData(defferedSearchTerm);
			if (k.length > 0) {
				setSuggestions(k);
			}
		}
		if (defferedSearchTerm.length > 2) {
			fetchDataFunc();
		}
	}, [defferedSearchTerm]);

	// Animations
	useEffect(() => {
		var hero_container = document.querySelector("#hero_container");
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline();

		tl.from(hero_container, {
			duration: 1,
			opacity: 0,
			ease: "ease-in-out",
		}).from(
			hero_container, {
			duration: 1,
			y: 100,
			ease: "ease-in-out",
		}, 0
		).from(
			document.getElementById("logo_header"), {
			duration: 1,
			opacity: 0,
			ease: "ease-in-out",
			y: 10,
		},
			0
		);

		const elements = document.querySelectorAll(".requires-animation");
		elements.forEach((element) => {
			gsap.from(element, {
				duration: 1,
				opacity: 0,
				ease: "ease-in-out",
				y: 100,
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					end: "bottom 80%",
				},
			});
		});

		return () => { tl.kill() }
	}, []);

	return (
		<div className="cursor-white">
			<div className="absolute -z-50 h-screen w-full overflow-x-hidden">
				<img
					src="/assets/bg.webp"
					alt=""
					className="h-full w-full"
					draggable="false"
				/>
				<img
					src="/assets/landing-bottom-desktop.webp"
					className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out mdm:hidden"
					draggable="false"
					alt=""
					id="bottom_desktop"
				/>
				<img
					src="/assets/landing-bottom-mobile.webp"
					className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out md:hidden"
					draggable="false"
					alt=""
					id="bottom_mobile"
				/>
			</div>
			<div className=" z-10 flex h-screen  flex-col   overflow-x-hidden">
				<Header />
				<div
					className="flex h-[60%]  w-full flex-col  overflow-x-clip "
					id="hero_container"
				>
					<img
						src="/assets/heroImg.svg"
						alt="Reload Bro"
						className="unselectable m-auto h-1/2 w-fit"
					/>
					<div className="flex w-full justify-center">
						<input
							className="font-popins h-[45px] w-[40%] rounded-[17px] text-center text-lg font-bold outline-none mdm:h-[60px] mdm:w-[90%] mdm:text-sm"
							placeholder="Search for a similar movie recommendation"
							ref={inputRef}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown={(e) => {
								if (e.keyCode === 13) {
									document.querySelector("#main_search").scrollIntoView({
										behavior: "smooth",
									});
									showBottomBanner();
								}
							}}
						/>
					</div>
					<div
						id="suggestions"
						className="mx-4 flex h-48 max-h-48  w-[40%] flex-col self-center  rounded-lg pt-1 mdm:w-[90%]"
					>
						<Suggestions suggestions={suggestions} />
					</div>
				</div>
			</div>

			<Suspense
				fallback={<div id="main_search" className="search "></div>}
			>
				<div id="main_search" className="search ">
					{/* <Main /> */}
					<MoviesSection />
				</div>
			</Suspense>

			<AppSubContent searchTerm={searchTerm} />
		</div>
	);
}

export default App;
