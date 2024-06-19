export default function Header() {
  return (
    <header>
      <div className="flex h-[15%] w-full justify-between py-4 md:px-16 mdm:px-2">
        <img
          src="/assets/logo/desktop.webp"
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
  )
}
