import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black px-4 text-white">
      <div>
        <h1 className="text-5xl font-signature ml-2">Ayush</h1>
      </div>
    </div>
  );
}

export default NavBar;
