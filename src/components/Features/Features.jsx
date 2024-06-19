import scalability from "./../../assets/scalability.svg";
import tech from "./../../assets/Technology.gif";

export default function Features() {

  return (
    <div className="flex w-full  mdm:flex-col">
      <div
        id="feature"
        className="flex flex-col font-Poppins md:w-1/2"
      >
        <h1
          className="unselectable sp-t text-[42px] underline md:mx-16 md:mt-8 mdm:mt-4 mdm:text-center mdm:text-[28px]"
        >
          Features
        </h1>
        <img
          src="/assets/binge.webp"
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
  )
}
