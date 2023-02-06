import React from "react";

import "./loading.css";
function Loading() {
  return (
    <div className="spinnerContainer">
      <div className="loadingSpinner">
        <div className="radio">
          <div></div>
          <div></div>
        </div>
      </div>
      <h1>Carregando...</h1>
    </div>
  );
}

export default Loading;
