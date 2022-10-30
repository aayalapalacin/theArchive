import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/archiveBox.css";
import MatchBar from "./product_show/matchBar";

function archiveBox() {
  return (
    <div className="border border-muted rounded">
      <div className="d-flex p-3">
        <div className="h6">
          <p className="fw-bold">Archive</p>
          <p>
            This item is a<span className="fw-bold"> 75% match </span>
            to your preferences, but may be on the tighter side.
          </p>
        </div>

        <div className="p-1">
          <img src="https://i.imgur.com/uCdRz84.png" height="100px"></img>
        </div>
      </div>

      <div>
        <img src="https://i.imgur.com/3QhESmN.png" width="95%" />
      </div>
      <MatchBar />

      <div className="d-flex">
        <a href="" className="text-dark font-weight-bold p-2">
          View Fit Details
        </a>

        <a href="" className="text-danger ml-auto p-2">
          Browse Similar Products
        </a>
      </div>
    </div>
  );
}

export default archiveBox;
