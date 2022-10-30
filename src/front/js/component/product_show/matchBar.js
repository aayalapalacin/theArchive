import React from "react";
import "../../../styles/matchBar.css";
function MatchBar() {
  return (
    <div>
      <div className="progress" style={{ height: "0px" }}>
        <div
          className="progress-bar w-25"
          role="progressbar"
          aria-label="Example 1px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress mx-4 " style={{ height: "13px" }}>
        <div
          className="progress-bar w-25"
          role="progressbar"
          aria-label="Example 20px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default MatchBar;
