import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/matchBar.css";
import { leviDatabase } from "../../../util/levi_database";

import { Link, useLocation } from "react-router-dom";

function MatchBar() {
  const { store, actions } = useContext(Context);
  const location = useLocation();
  const { jean } = location.state;
  let waistInput = store?.waist[0];
  let pc9Input = store?.pc9[0]?.pc9Input;
  let pc9Match = leviDatabase.filter(
    (product) => product.Identifier == pc9Input
  );
  let waistHomeAvg = Math.trunc(pc9Match[0]?.Waist[waistInput] * 100);
  let waistStoreAvg = Math.trunc(jean?.Waist[waistInput] * 100);
  console.log("waistStoreAvg", waistStoreAvg);
  console.log("waistHomeAvg", waistHomeAvg);
  const waistAvgCalc = (waistHomeAvg - waistStoreAvg) / 100;
  console.log(waistAvgCalc, "calc");

  const [matchBarMargin, setmatchBarMargin] = useState(
    waistHomeAvg == waistStoreAvg
      ? 122
      : waistAvgCalc == -0.3
      ? 245
      : waistAvgCalc == -0.2
      ? 199
      : waistAvgCalc == -0.1
      ? 161
      : waistAvgCalc == 0.3
      ? 0
      : waistAvgCalc == 0.2
      ? 43
      : waistAvgCalc == 0.1
      ? 88
      : 122
  );
  console.log(matchBarMargin, "useState");

  return (
    <div>
      <div className="progress d-none">
        <div
          className="progress-bar w-25"
          role="progressbar"
          aria-label="Example 1px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress mx-4 ">
        <div
          className="progress-bar hahah w-25 "
          style={{ marginLeft: matchBarMargin }}
          role="progressbar"
          aria-label="Example 20px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="d-flex">
        <div className=" ms-4 me-5">Tight</div>
        <div className="ms-5 me-4">Just Right</div>
        <div className="ms-5 ps-2">Loose </div>
      </div>
    </div>
  );
}

export default MatchBar;
