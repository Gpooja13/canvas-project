import React, { useState, useEffect, createContext, useContext } from "react";

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [uploadText, setUploadText] = useState([]);
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState(40);
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("Times New Roman, Times, serif");

  useEffect(() => {
    const canvasElement = document.getElementById("main-canvas");
    if (canvasElement) {
      const canvasWidth = canvasElement.offsetWidth;
      const canvasHeight = canvasElement.offsetHeight;
      setPosition({
        x: canvasWidth / 2,
        y: canvasHeight / 2,
      });
    }
  }, []); // Runs once after the component mounts

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    // Add the current position to history
    setHistory((prev) => [...prev, { ...position }]);
    setRedoStack([]); // Clear redoStack when a new action is performed
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const placeTextAtCenter = () => {
    const canvasElement = document.getElementById("main-canvas");
    if (canvasElement) {
      const canvasWidth = canvasElement.offsetWidth;
      const canvasHeight = canvasElement.offsetHeight;
  
      setPosition({
        x: canvasWidth / 2,
        y: canvasHeight / 2,
      });
    }
  };
  

  const handleUndo = () => {
    console.log("Undo");
    if (history.length > 0) {
      const lastPosition = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1)); // Remove last element from history
      setRedoStack((prev) => [...prev, { ...position }]); // Add current position to redoStack
      setPosition(lastPosition); // Move to the last position
    }
  };

  const handleRedo = () => {
    console.log("Redo");
    if (redoStack.length > 0) {
      const nextPosition = redoStack[redoStack.length - 1];
      setRedoStack((prev) => prev.slice(0, -1)); // Remove last element from redoStack
      setHistory((prev) => [...prev, { ...position }]); // Add current position to history
      setPosition(nextPosition); // Move to the redo position
    }
  };


  return (
    <CanvasContext.Provider
      value={{
        position,
        uploadText,
        setUploadText,
        color,
        setColor,
        fontSize,
        setFontSize,
        fontStyle,
        setFontStyle,
        fontFamily,
        setFontFamily,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        placeTextAtCenter,
        handleUndo,
        handleRedo,
        canUndo: history.length > 0,
        canRedo: redoStack.length > 0,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
