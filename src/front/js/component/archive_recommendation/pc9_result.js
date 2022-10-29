import React from "react";
import "../../../styles/archive_recommendation/pc9_result.css";
import { getRandomJeanImage } from "../../../util/levi_datatbase_util";

const Pc9Result = ({ matchingJean }) => {
  return (
    <div>
      <img
        src={matchingJean?.ImgFront || getRandomJeanImage()}
        className="pc9_result_photo"
      ></img>
    </div>
  );
};

export default Pc9Result;
