import React from "react";
import { useCanvasContext } from "../Context/context";

const Canvas = () => {
  const {
    position,
    uploadText,
    color,
    fontSize,
    fontStyle,
    fontFamily,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useCanvasContext();

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-full h-[70vh] bg-slate-300 relative"
      id="main-canvas"
    >
    
      <span
        onMouseDown={handleMouseDown}
        style={{
          fontSize:fontSize,
          color:color,
          fontFamily:"monospace",
          fontWeight: fontStyle === "bold" ? "bolder" : "normal",
          fontStyle: fontStyle === "italic" ? "italic" : "normal",
          textDecorationLine: fontStyle === "underline" ? "underline" : "none",
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: "grab",
          fontFamily:fontFamily,
          padding:"2px",
          userSelect: "none",
        }}
      >{uploadText}</span>
      
    </div>
  );
};

export default Canvas;
