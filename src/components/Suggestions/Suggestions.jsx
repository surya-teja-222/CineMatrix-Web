import clsx from 'clsx';
import { useCallback } from 'react';

function Suggestion({
  isFirst,
  isLast,
  suggestion,
  setSearchTerm,
}) {
  const handleClick = useCallback((e) => {
    setSearchTerm(e.target.innerText);
    document.querySelector("#main_search").scrollIntoView({
      behavior: "smooth",
    });
    document.getElementById("bottom_desktop")
      .classList.remove("opacity-0");
    document.getElementById("bottom_mobile")
      .classList.remove("opacity-0");
  }, [setSearchTerm])
  return (
    <div
      role="list"
      className={clsx(
        "terms w-full cursor-pointer bg-white text-center font-Poppins font-semibold text-black transition-colors duration-100 ease-linear hover:bg-gray-500",
        { "rounded-t-md": isFirst },
        { "rounded-b-md": isLast }
      )}
      onClick={handleClick}
    >
      {suggestion}
    </div>
  )
}

export default function Suggestions({ suggestions, setSearchTerm }) {
  if (!suggestions?.length) {
    return (
      <div className="terms w-full rounded-md bg-white  text-center font-Poppins font-semibold capitalize text-black transition-colors duration-100 ease-linear ">
        No matching results found...
      </div>
    )
  }
  return (
    <div>
      {suggestions.map((suggestion, i) => (
        <Suggestion
          key={i}
          suggestion={suggestion}
          isLast={i === suggestions.length - 1}
          isFirst={i === 0}
          setSearchTerm={setSearchTerm}
        />
      ))}
    </div>
  );
}
