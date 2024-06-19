import React, { useCallback, useState } from "react";

import contact from "./../../methods/postContact";

const DANGER_STYLE = {
  color: "red",
};

const SUCCESS_STYLE = {
  color: "green",
};

export default function ContactUS() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const handleSendClick = useCallback(() => {
    setMessageText("");

    if (email.length === 0 || message.length === 0) {
      setMessageText("Please fill all the fields");
      setMessageStyle(DANGER_STYLE);
    } else {
      contact(email, message);
      setMessageText("Successfully sent your message!");
      setMessageStyle(SUCCESS_STYLE);
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
      }, 2000);
    }
  }, [email, message])

  return (
    <div className="font-Poppins mdm:mt-6 flex flex-col justify-center gap-4 text-2xl font-bold md:my-6">
      <h2 className="unselectable mx-auto text-white">Contact Us</h2>
      <input
        type="email"
        className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none text-white"
        placeholder="Your Email..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="message"
        id="msg-contact"
        required
        placeholder="Type your message, Will get back to you very soon!"
        className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none text-white"
        maxLength={200}
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div
        role="button"
        className="test unselectable mx-auto cursor-pointer rounded-lg bg-white p-2 hover:bg-blue-500 hover:text-white"
        onClick={handleSendClick}
      >
        Send
      </div>
      <p
        className="self-center text-sm font-normal text-red-600"
        style={messageStyle}
      >
        {messageText}
      </p>
    </div>
  )
}
