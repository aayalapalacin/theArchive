import React from "react";
import "../../styles/archiveBox.css";
import MatchBar from "./product_show/matchBar";
import { Link, useLocation } from "react-router-dom";
import ArchiveMatchScore from "./archive_recommendation/archive_match_score";
import { CircleProgress } from "react-gradient-progress";

function archiveBox() {
  const location = useLocation();
  const { jean } = location.state;
  console.log(jean.match, "jean match");
  // const percentage = { jean.match };

  return (
    <div className="border border-muted rounded">
      <div className="d-flex p-3">
        <div className="h6">
          <p className="fw-bold">Archive</p>
          <p>
            This item is a<span className="fw-bold"> {jean.match}% </span>
            match to your preferences, but <br /> may be on the tighter side.
          </p>
        </div>

        <div className="p-1" id="background">
          <CircleProgress
            percentage={jean.match}
            strokeWidth={8}
            width={150}
            fontSize={24}
            fontColor={"black"}
            strokeLinecap={"square"}
            primaryColor={["#A6253F", "#A6253F"]}
            secondaryColor={"white"}
          />
        </div>
      </div>

      {/* <div>
        <img src="https://i.imgur.com/3QhESmN.png" width="95%" />
      </div> */}
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
