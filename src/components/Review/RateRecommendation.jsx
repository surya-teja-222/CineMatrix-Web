import gift from "../../assets/gift.svg";
import star from "../../assets/star.svg";
import eStar from "../../assets/estar.svg";

export default function RateRecommendation({
  changeStar,
  setDefaultStars,
  setPlatformRating,
}) {
  return (
    <div className="requires-animation group relative flex h-max w-[25%] min-w-[260px] flex-col gap-4 self-center rounded-2xl bg-[#CD1818] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#ff3939] hover:shadow-2xl">
      <img
        src={gift}
        alt=""
        className="absolute  right-0 -top-16 w-[120px] transition-all duration-500 ease-in-out group-hover:scale-[1.3]"
        draggable="false"
      />
      <h2 className="unselectable mt-[60px] h-24 text-xl font-semibold">
        Did you like our movie recomendation ?
      </h2>
      <p className="unselectable text-center text-lg font-light italic">
        Rate your experience
      </p>
      <div
        className="my-8 flex justify-center gap-4 font-bold text-green-500"
        id="plat-stars"
      >
        <img
          id="mstar1"
          src={star}
          className="unselectable mstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStar(e);
          }}
          onMouseOut={() => {
            setDefaultStars();
          }}
          onClick={(e) => {
            setPlatformRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mstar2"
          src={star}
          className="unselectable mstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStar(e);
          }}
          onMouseOut={() => {
            setDefaultStars();
          }}
          onClick={(e) => {
            setPlatformRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mstar3"
          src={star}
          className="unselectable mstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStar(e);
          }}
          onMouseOut={() => {
            setDefaultStars();
          }}
          onClick={(e) => {
            setPlatformRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mstar4"
          src={eStar}
          className="unselectable mstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStar(e);
          }}
          onMouseOut={() => {
            setDefaultStars();
          }}
          onClick={(e) => {
            setPlatformRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
        <img
          id="mstar5"
          src={eStar}
          className="unselectable mstar  h-5 w-5"
          onMouseOver={(e) => {
            changeStar(e);
          }}
          onMouseOut={() => {
            setDefaultStars();
          }}
          onClick={(e) => {
            setPlatformRating(e);
          }}
          draggable="false"
          alt="ratings-stars"
        />
      </div>
    </div>
  )
}
