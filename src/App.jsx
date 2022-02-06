import { useEffect } from "react";
import dc from "./assets/dc.png";
import k from "./assets/k.png";
import marvel from "./assets/marvel.png";
import x from "./assets/x1.png";

function App() {
  useEffect(() => {
    function move() {
      setTimeout(() => {
        const offset = 1;
        const slides = document.querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        move();
      }, 5000);
    }
    move();
  });

  return (
    <>
      <div className="absolute -z-50 h-[100%] w-[100%]">
        <section aria-label="Newest Photos">
          <div className="carousel" data-carousel>
            <ul data-slides>
              <li className="slide" data-active>
                <img src={k} alt="Korean bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={marvel} alt="Marvel bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={x} alt="Unknown bg" draggable="false" />
              </li>
              <li className="slide">
                <img src={dc} alt="DC bg" draggable="false" />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
}

export default App;
