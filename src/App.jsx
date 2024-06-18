// react components
import React, { useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Images

import tech from "./assets/Technology.gif";
import scalability from "./assets/scalability.svg";

// JSX COMPONENTS
import Footer from "./components/Footer";
import Review from "./components/Review";
import Main from "./components/main";
import About from "./components/aboutUs";

// methods
import fetchData from "./methods/fetchData";

function App() {
	// Set search term of page
	const [searchTerm, setSearchTerm] = useState("");
	// search results
	const [suggestions, setSuggestions] = useState([]);

	// use effect to remove/add bottom background when input.
	useEffect(() => {
		document
			.querySelector("#hero_input")
			.addEventListener("keyup", async (e) => {
				if (e.target.value.length > 0) {
					document
						.getElementById("bottom_desktop")
						.classList.add("opacity-0");
					document
						.getElementById("bottom_mobile")
						.classList.add("opacity-0");
					var k = await fetchData(e.target.value);
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
		// @ts-ignore
	}, [suggestions]);

	// Animations
	useEffect(() => {
		var hero_container = document.querySelector("#hero_container");
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline();

		tl.from(hero_container, {
			duration: 1,
			opacity: 0,
			ease: "ease-in-out",
		})
			.from(
				hero_container,
				{
					duration: 1,
					y: 100,
					ease: "ease-in-out",
				},
				0
			)
			.from(
				document.getElementById("logo_header"),
				{
					duration: 1,
					opacity: 0,
					ease: "ease-in-out",
					y: 10,
				},
				0
			);

		gsap.from("#feature_h1", {
			duration: 1,
			opacity: 0,
			ease: "ease-in-out",
			y: 100,
			scrollTrigger: {
				trigger: "#feature_h1",
				start: "top 80%",
			},
		});

		// Find all elements with the class "requires-animation"
		const elements = document.querySelectorAll(".requires-animation");
		// Loop through each element
		elements.forEach((element) => {
			gsap.from(element, {
				duration: 1,
				opacity: 0,
				ease: "ease-in-out",
				y: 100,
				scrollTrigger: {
					trigger: element,
					// start the animation when the element is going into the viewport
					// scrub: true,
					start: "top 80%",
					end: "bottom 80%",
				},
			});
		});
	}, []);

	function setInner(suggestions) {
		var array = [];
		for (var i = 0; i < suggestions.length; i++) {
			if (i === 0) {
				array.push(
					<div
						key={i}
						role={"list"}
						className="terms w-full cursor-pointer rounded-t-md bg-white text-center font-Poppins font-semibold text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
						onClick={(e) => {
							setSearchTerm(e.target.innerText);
							document
								.querySelector("#main_search")
								.scrollIntoView({
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
						className="terms w-full cursor-pointer rounded-b-md bg-white text-center font-Poppins font-semibold capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
						onClick={(e) => {
							setSearchTerm(e.target.innerText);
							document
								.querySelector("#main_search")
								.scrollIntoView({
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
						className="terms w-full cursor-pointer bg-white text-center font-Poppins font-semibold  capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
						onClick={(e) => {
							setSearchTerm(e.target.innerText);
							document
								.querySelector("#main_search")
								.scrollIntoView({
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
					className="terms w-full rounded-md bg-white  text-center font-Poppins font-semibold capitalize text-black transition-colors duration-100 ease-linear "
				>
					No matching results found...
				</div>
			);
		}
		return array;
	}

	return (
		<div className="cursor-white">
			<div className="absolute -z-50 h-screen w-full overflow-x-hidden">
				<img
					src={`${process.env.REACT_APP_STORAGE}bg.webp`}
					alt=""
					className="h-full w-full"
					draggable="false"
				/>

				<img
					src={`${process.env.REACT_APP_STORAGE}assets/landing-bottom-desktop.webp`}
					className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out mdm:hidden"
					draggable="false"
					alt=""
					id="bottom_desktop"
				/>
				<img
					src={`${process.env.REACT_APP_STORAGE}assets/landing-bottom-mobile.webp`}
					className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out md:hidden"
					draggable="false"
					alt=""
					id="bottom_mobile"
				/>
			</div>

			<div className=" z-10 flex h-screen  flex-col   overflow-x-hidden">
				<header>
					<div className="flex h-[15%] w-full justify-between py-4 md:px-16 mdm:px-2">
						<img
							src={`${process.env.REACT_APP_STORAGE}assets/logo/desktop.webp`}
							alt="Logo CInematrixs"
							draggable="false"
							className="unselectable my-auto md:h-[67px]  md:w-[286px] mdm:h-9 mdm:w-fit"
							loading="lazy"
							id="logo_header"
						/>
						<div className="font-popins flex gap-8  text-[24px] font-bold not-italic leading-[60px] text-[#ffffff] mdm:hidden">
							<p className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline">
								JaxxTopia
							</p>
							<p
								className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline"
								onClick={() => {
									// scroll to
									document
										.querySelector("#feature")
										.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								How it's made
							</p>
							<p
								className="shad unselectable mt-auto cursor-pointer 	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline"
								onClick={() => {
									// scroll to
									document
										.querySelector("#about")
										.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								About Us
							</p>
						</div>
						<div className="md:hidden">
							<div
								id="nav-p"
								className="transition-gen mx-4 my-4 flex h-12 w-12 flex-col justify-evenly "
								onClick={() => {
									document
										.getElementById("nav2")
										.classList.toggle("opacity-0");
									document
										.getElementById("nav-p")
										.classList.toggle("rotate-180");
									document
										.getElementById("nav1")
										.classList.toggle("rotate-45");
									document
										.getElementById("nav1")
										.classList.toggle("translate-y-[12px]");
									document
										.getElementById("nav3")
										.classList.toggle("-rotate-45");
									document
										.getElementById("nav3")
										.classList.toggle(
											"-translate-y-[12px]"
										);
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
											.classList.toggle(
												"animate-modal-out"
											);
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
							<p
								className=" unselectable mt-auto cursor-pointer text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline"
								onClick={() => {
									// scroll to
									document
										.querySelector("#feature")
										.scrollIntoView({
											behavior: "feature",
										});
								}}
							>
								How it's made
							</p>
							<p
								className=" unselectable mt-auto cursor-pointer  text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline"
								onClick={() => {
									// scroll to
									document
										.querySelector("#about")
										.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								About Us
							</p>
						</div>
					</div>
				</header>

				<div
					className="flex h-[60%]  w-full flex-col  overflow-x-clip "
					id="hero_container"
				>
					<img
						src={`${process.env.REACT_APP_STORAGE}testh.svg`}
						alt=""
						className="unselectable m-auto h-1/2 w-fit"
					/>
					<div className="flex w-full justify-center">
						<input
							className="font-popins h-[45px] w-[40%] rounded-[17px] text-center text-lg font-bold outline-none mdm:h-[60px] mdm:w-[90%] mdm:text-sm"
							placeholder="Search for a similar movie recommendation"
							id="hero_input"
						/>
					</div>
					<div
						id="suggestions"
						className="mx-4 flex h-48 max-h-48  w-[40%] flex-col self-center  rounded-lg pt-1 mdm:w-[90%]"
					>
						{setInner(suggestions)}
					</div>
				</div>
			</div>
			<Suspense
				fallback={<div id="main_search" className="search "></div>}
			>
				<div id="main_search" className="search ">
					{/* normal  search bar , flex of (search part 1 , part 2) */}
					<Main searchTerm={searchTerm} />
				</div>
			</Suspense>
			<div className="flex w-full  mdm:flex-col">
				<div
					id="feature"
					className="flex flex-col font-Poppins md:w-1/2"
				>
					<h1
						className="unselectable sp-t text-[42px] underline md:mx-16 md:mt-8 mdm:mt-4 mdm:text-center mdm:text-[28px]"
						id="feature_h1"
					>
						Features
					</h1>
					<img
						src={`${process.env.REACT_APP_STORAGE}assets/binge.webp`}
						draggable="false"
						className="requires-animation mt-auto w-3/4 mdm:mx-auto mdm:w-1/3"
						alt=""
						loading="lazy"
					/>
				</div>
				<div className="my-16 flex flex-col justify-center  gap-8 font-Dosis font-bold md:mx-24 md:w-1/2">
					<div className="top-container relative w-full mdm:overflow-x-clip">
						<div className="bgeffect absolute top-0 -left-4 -z-50 h-96 w-96   animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl  filter mdm:h-44  mdm:w-44"></div>
						<div className="bgeffect animation-delay-2000 absolute top-0 -right-4 -z-50 h-96 w-96   animate-blob rounded-full bg-yellow-300  opacity-70 mix-blend-multiply  blur-xl filter mdm:h-44 mdm:w-44"></div>
						<div className="bgeffect animation-delay-4000 absolute -bottom-8 left-20 -z-50 h-96 w-96   animate-blob  rounded-full bg-pink-300 opacity-70 mix-blend-multiply  blur-xl filter mdm:h-44  mdm:w-44"></div>
						<div className="top-container flex flex-col gap-4 ">
							<div className="flex requires-animation w-[80%]  gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg focus:animate-slide-fwd-center md:min-h-[200px] smm:flex-col mdm:w-[80%] mdm:self-center">
								<div className=" my-auto sm:w-1/3 smm:w-[80%] smm:self-center">
									<img
										src={tech}
										className="unselectable"
										alt="Technology used 1"
										draggable="false"
										loading="lazy"
									/>
								</div>
								<div className="my-auto sm:w-2/3 smm:w-[80%]">
									<p className="p-4 text-lg  mdm:text-sm">
										CineMatrix is one of its kind versatile,
										diversified movie recommending system
										which is based on not one or two but a
										combination five different recommending
										algorithms.CineMatrix is built on a
										solid foundation of advanced algorithms
										and methods like
										K-Nearest-Neighbours,tfidf,cosine
										similarity,SVD and many more other
										advanced techniques.
									</p>
								</div>
							</div>
							<div className="flex requires-animation w-[80%] gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg md:min-h-[200px] smm:flex-col mdm:w-[80%] mdm:self-center">
								<div className=" my-auto sm:w-1/3 smm:w-[80%] smm:self-center">
									<img
										src={scalability}
										className="unselectable"
										alt="Technology used"
										draggable="false"
										loading="lazy"
									/>
								</div>
								<div className="smm-w[80%] my-auto sm:w-2/3">
									<p className="p-4 text-lg  mdm:text-sm">
										All you have to do is enter the movie of
										you're choice and hit search, our
										recommender fetches the best matching
										results from our database containing
										more than a Lakh movies and displays
										simila rmovies to the movie you entered.
										Not just the similar movies, you are
										also greeted with other great movies in
										the segment that are liked by other
										users with a similar taste as you.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section id="about">
				<About />
			</section>
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
		</div>
	);
}

export default App;
