import React, { useState } from "react";
import { useCanvasContext } from "../Context/context";

const Tools = () => {
  const {
    setUploadText,
    color,
    setColor,
    fontSize,
    setFontSize,
    fontStyle,
    fontFamily,
    setFontStyle,
    setFontFamily,
    placeTextAtCenter,
  } = useCanvasContext();
  const [text, setText] = useState("");

  const fontFamilies = [
    { label: "Times New Roman", value: "Times New Roman, Times, serif" },
    { label: "Arial", value: "Arial, Helvetica, sans-serif" },
    {
      label: "Lucida Console",
      value: "Lucida Console, Courier New, monospace",
    },
    { label: "Georgia", value: "Georgia, serif" },
    { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
    { label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
    { label: "Trebuchet MS", value: "Trebuchet MS, Helvetica, sans-serif" },
    { label: "Courier New", value: "Courier New, Courier, monospace" },
  ];

  return (
    <div className="flex justify-around items-center flex-col bg-slate-100 h-[20vh] p-2">
      <div className="flex justify-around items-center w-1/2 m-2 select-none">
        <div>
          <select
            className="cursor-pointer w-[12vw] h-[5vh] pl-2 outline-none"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            style={{ fontFamily: fontFamily }}
            title="Font"
          >
            {fontFamilies.map((font, index) => (
              <option
                key={index}
                value={font.value}
                style={{ fontFamily: font.label }}
              >
                {font.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <span
            class="material-symbols-outlined m-2 cursor-pointer"
            onClick={() => setFontSize(fontSize - 1)}
            title="Increase"
          >
            remove
          </span>
          <span title="Font Size">{fontSize}</span>
          <span
            class="material-symbols-outlined m-2 cursor-pointer"
            onClick={() => setFontSize(fontSize + 1)}
            title="Decrease"
          >
            add
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span
            className={`material-symbols-outlined cursor-pointer m-1 ${
              fontStyle === "bold" ? "bg-gray-400" : ""
            }`}
            onClick={() => setFontStyle("bold")}
            title="Bold"
          >
            format_bold
          </span>
          <span
            className={`material-symbols-outlined cursor-pointer m-1 ${
              fontStyle === "italic" ? "bg-gray-400" : ""
            }`}
            onClick={() => setFontStyle("italic")}
            title="Italics"
          >
            format_italic
          </span>
          <span
            class="material-symbols-outlined cursor-pointer m-1"
            className={`material-symbols-outlined cursor-pointer m-1 ${
              fontStyle === "underline" ? "bg-gray-400" : ""
            }`}
            onClick={() => setFontStyle("underline")}
            title="Underline"
          >
            format_underlined
          </span>
          <span
            className={`material-symbols-outlined cursor-pointer m-1 ${
              fontStyle === "normal" ? "bg-gray-400" : ""
            }`}
            onClick={() => setFontStyle("normal")}
            title="Normal"
          >
            block
          </span>
        </div>
        <div className="cursor-pointer" title="Color">
          <label htmlFor="colorPicker">
            <span class="material-symbols-outlined">colorize</span>
          </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            className="cursor-pointer w-6"
          />
        </div>
        <div
          onClick={placeTextAtCenter}
          className="cursor-pointer"
          title="Center"
        >
          <span class="material-symbols-outlined">remove_from_queue</span>
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-1">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-1/4 h-8 border-gray-200 border-[1px] outline-none pl-3 py-5"
          placeholder="Enter your text"
        />
        <button onClick={() => setUploadText(text)} title="Add Text">
          <span class="material-symbols-outlined text-3xl m-2">upload</span>
        </button>
        <button
          onClick={() => {
            setUploadText("");
            setText("");
          }}
          title="Clear Text"
        >
          <span class="material-symbols-outlined text-3xl m-2">
            delete_forever
          </span>
        </button>
      </div>
    </div>
  );
};

export default Tools;
