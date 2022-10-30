import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/matchBar.css";
import { leviDatabase } from "../../../util/levi_database";

import { Link, useLocation } from "react-router-dom";

function MatchBar() {
  const { store, actions } = useContext(Context);
  console.log(store.waist[0], "store match");
  const location = useLocation();
  const { jean } = location.state;
  //   console.log(jean, "jean match");
  let waistInput = store?.waist[0];
  let pc9Input = store?.pc9[0]?.pc9Input;
  let pc9Match = leviDatabase.filter(
    (product) => product.Identifier == pc9Input
  );
  let waistHomeAvg = pc9Match[0]?.Waist[waistInput];
  let waistStoreAvg = jean?.Waist[waistInput];

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
      <div className="d-flex">
        <div className=" ms-4 me-5">Tight</div>
        <div className="ms-5 me-4">Just Right</div>
        <div className="ms-5 ps-2">Loose</div>
      </div>
    </div>
  );
}

export default MatchBar;
