import star from "../../assets/star.svg";
import eStar from "../../assets/estar.svg";

export default function RateMovie({
  changeStar,
  setDefaultStars,
  setPlatformRating,
  setMovieRating,
  searchTerm,
  changeStarm,
  setDefaultStarsm,
}) {
  return (
    <div className="requires-animation group relative flex w-[25%] min-w-[260px] flex-col gap-4 self-center rounded-2xl bg-[#CD1818] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#ff0000] hover:shadow-2xl">
      <img
        src="/assets/tree.webp"
        alt=""
        className="absolute  right-0 -top-16 w-[120px] transition-all duration-500 ease-in-out group-hover:scale-[1.3]"
        draggable="false"
      />
      <h2 className="unselectable mt-[60px] h-24 text-xl font-semibold">
        How good can you rate the movie {searchTerm} ?
      </h2>
      <p className="unselectable text-center text-xl font-light italic">
        Rate your experience
      </p>
      <div
        className="my-8 flex justify-center gap-4 font-bold text-green-500"
        id="movie-stars"
      >
        <img
          id="mpstar1"
          src={star}
          className="unselectable mpstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStarm(e);
          }}
          onMouseOut={() => {
            setDefaultStarsm();
          }}
          onClick={(e) => {
            setMovieRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mpstar2"
          src={star}
          className="unselectable mpstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStarm(e);
          }}
          onMouseOut={() => {
            setDefaultStarsm();
          }}
          onClick={(e) => {
            setMovieRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mpstar3"
          src={star}
          className="unselectable mpstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStarm(e);
          }}
          onMouseOut={() => {
            setDefaultStarsm();
          }}
          onClick={(e) => {
            setMovieRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mpstar4"
          src={eStar}
          className="unselectable mpstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStarm(e);
          }}
          onMouseOut={() => {
            setDefaultStarsm();
          }}
          onClick={(e) => {
            setMovieRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mpstar5"
          src={eStar}
          className="unselectable mpstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStarm(e);
          }}
          onMouseOut={() => {
            setDefaultStarsm();
          }}
          onClick={(e) => {
            setMovieRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
      </div>
    </div>
  )
}
