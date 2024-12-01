import React from "react";
import { useCanvasContext } from "../Context/context";

const Navbar = () => {
  const { handleUndo, handleRedo, canUndo, canRedo } = useCanvasContext();

  return (
    <div className="h-[10vh] flex bg-slate-50 items-center drop-shadow-lg ">
      <img src={"logo.png"} alt="Logo" width={"65vw"} className="rounded-full ml-5" />
      {/* Undo-Redo Buttons */}
      <div className="absolute right-[45vw] flex gap-5">
        <button onClick={handleUndo} disabled={!canUndo} className="flex flex-col text-xs" title="Undo">
          <span class="material-symbols-outlined text-4xl">Undo</span>
          {/* <span>Undo</span> */}
        </button>
        <button onClick={handleRedo} disabled={!canRedo} className="flex flex-col text-xs" title="Redo">
          <span class="material-symbols-outlined text-4xl">Redo</span>
          {/* <span>Redo</span> */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
