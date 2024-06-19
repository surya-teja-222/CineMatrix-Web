import loading from '../../assets/loading.gif';

export default function LoadingMovies() {
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
