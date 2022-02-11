import "./footer.css";
import hero from "./../assets/hero.svg";
import logo from "./../assets/logo/logo_centered.svg";
import contact from "./../methods/postContact";
export default function Footer() {
  return (
    <>
      <section>
        <div className="grid-f bg-black">
          <div className="mt-auto pt-4">
            <img src={hero} alt="" className="h-3/4 w-3/4 " draggable="false" />
          </div>
          <div className="my-6 flex flex-col justify-between ">
            <img
              src={logo}
              alt="logo"
              className="test mx-auto w-1/2 p-4"
              draggable="false"
            />
            <div className="font-Poppins footer-b flex flex-col  self-center font-bold leading-[38px]">
              <div className="flex self-center ">
                <p className="unselectable text-white">
                  Made with love <span className="test">💖</span> by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Team CineMatrix
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable  text-[#827F7F]">
                  Developed by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Surya
                  </span>{" "}
                  and{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Sasi
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable text-[#827F7F]">
                  Designed by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Harsha
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable text-white">
                  &#9400; Copyright{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    CineMatrix
                  </span>
                  . All Rights Reserved{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="font-Poppins my-6 flex flex-col justify-center gap-4 text-2xl font-bold">
            <h2 className="unselectable mx-auto text-white">Contact Us</h2>
            {/* <div className="mx-8 rounded-md bg-[#C4C4C499] p-4"></div> */}
            <input
              type="email"
              name="email"
              id="email-contact"
              className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none"
              placeholder="Email.."
              required
            />
            <textarea
              name="message"
              id="msg-contact"
              required
              placeholder="Type your message, We will get back to you!"
              className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none"
              maxLength={200}
              rows={3}
            />
            <div
              className="test unselectable mx-auto cursor-pointer rounded-lg bg-white p-2 hover:bg-blue-500 hover:text-white"
              onClick={() => {
                document.getElementById("err").innerText = "";
                var email = document.getElementById("email-contact").value;
                var message = document.getElementById("msg-contact").value;
                if (email.length > 0 && message.length > 0) {
                  contact(email, message);
                  document.getElementById("err").style.color = "green";
                  document.getElementById("err").innerText =
                    "Successfully sent your message!";
                } else {
                  document.getElementById("err").innerText =
                    "Please fill all the fields";
                }
              }}
            >
              Send
            </div>
            <p
              id="err"
              className="self-center text-sm font-normal text-red-600"
            ></p>
          </div>
        </div>
      </section>
    </>
  );
}
