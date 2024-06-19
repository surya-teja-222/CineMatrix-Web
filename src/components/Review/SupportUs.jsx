import bmc from "../../assets/bmc.svg";
import bmccup from "../../assets/bmc-cup.svg";

export default function SupportUs() {
  return (
    <div className="requires-animation mdm:flex-col group mx-auto  mb-4   flex w-[60%] justify-between rounded-2xl bg-[#00E0FF] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#3ee1f6] hover:shadow-2xl">
      <div className=" p-4 font-semibold leading-8 tracking-wide text-black md:mx-6 ">
        <img src={bmc} alt="bmc-logo" draggable="false" />
        <p className="unselectable mdm:text-sm italic">
          Support us by buying us a coffee,
        </p>
        <p className="unselectable mdm:hidden italic">
          You will also get discounts on our various projects.
        </p>
      </div>
      <div
        id="support"
        className="mdm:w-full my-auto mx-auto h-full sm:mx-6"
      >
        <a href="https://www.buymeacoffee.com/suryateja" target="_blank" rel="noreferrer">
          <img
            src={bmccup}
            alt="bmc-cup"
            className="cursor-pointer transition-all duration-500 ease-in-out group-hover:scale-[1.2]"
          />
        </a>
      </div>
    </div>
  )
}
