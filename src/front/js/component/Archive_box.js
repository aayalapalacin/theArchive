import React from "react";
import { Link } from "react-router-dom";

function archiveBox() {
  return (
    <div className="border border-muted rounded">
      <div className="d-flex">
        <div>
          <p>Archive</p>
          <p>
            This item is a
            <span className="text-dark font-weight-bold"> 75% match </span>
            to your <br />
            preferences, but may be on the <br />
            tighter side.
          </p>
        </div>

        <div>
          <img src="https://i.imgur.com/uCdRz84.png" height="100px"></img>
        </div>
      </div>

      <div>
        <img src="https://i.imgur.com/3QhESmN.png" width="95%" />
      </div>

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
