import React from "react";
import { useState } from "react";

export default function Test1() {
  const [paragraph, setParagraph] = useState("");
  const [message, setMessage] = useState("Show message");

  function messageTurn() {
    if (!paragraph) {
      setMessage("Hide message");
    }
  }

  function showParagraph() {
    if (!paragraph) {
      setMessage("Hide message");
      setParagraph(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perferendis fugiat ipsa fugit beatae tenetur sapiente possimus eius ad non voluptates porro obcaecati amet deleniti, quia quibusdam fuga a impedit."
      );
    } else {
      setParagraph("");
      setMessage("Show message");
    }
  }

  return (
    <>
      <div className="border-solid border-2 border-sky-500 grid grid-rows-1 mx-96 mt-56 h-auto rounded">
        <a
          href="#"
          className="border-solid border-2 bg-slate-950 text-slate-100 h-fit"
          onClick={showParagraph}
          onChange={messageTurn}
        >
          <span className="ps-64">
            <button class=" bg-cyan-500 hover:bg-cyan-600 w-fit ">
              {message}
            </button>
          </span>
        </a>
        <p className="font-mono">{paragraph}</p>
      </div>
    </>
  );
}
