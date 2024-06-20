import clsx from "clsx";

import styles from './Footer.module.css';

export default function FooterText() {
  return (
    <div className="mdm:gap-16 mdm:mt-8 flex flex-col md:my-6 md:justify-between">
      <img
        src="/assets/logo/logo_centered.webp"
        alt="logo"
        className="test  mx-auto w-1/2 md:p-4"
        draggable="false"
      />
      <div className={clsx(
        "font-Poppins flex flex-col  self-center font-bold leading-[38px]",
        styles.footerB
      )}>
        <div className="flex self-center">
          <p className="unselectable text-center text-white">
            Made with love <span className="test">💖</span> by{" "}
            <span className="test cursor-pointer text-[#FF1516] hover:underline">
              Team CineMatrix
            </span>
          </p>
        </div>
        <div className="flex self-center">
          <p className="unselectable  text-center text-[#827F7F]">
            Developed by
            {" "}
            <span className={clsx(styles.footerName, "cursor-pointer text-[#FF1516] hover:underline")}>
              <a href="https://www.suryacodes.tech/">Surya</a>
            </span>{" "}
            and{" "}
            <span className={clsx(styles.footerName, "cursor-pointer text-[#FF1516] hover:underline")}>
              Sasi
            </span>
          </p>
        </div>
        <div className="flex self-center">
          <p className="unselectable text-center text-[#827F7F]">
            Designed by{" "}
            <span className={clsx(styles.footerName, "cursor-pointer text-[#FF1516] hover:underline")}>
              Harsha
            </span>
          </p>
        </div>
        <div className="flex self-center">
          <p className="unselectable text-center text-white">
            &#9400; Copyright{" "}
            <span className={clsx(styles.footerName, "cursor-pointer text-[#FF1516] hover:underline")}>
              CineMatrix
            </span>
            . All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  )
}
