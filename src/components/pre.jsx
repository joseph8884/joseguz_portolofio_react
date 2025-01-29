import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};

export default Loader;
