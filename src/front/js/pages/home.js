import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Click_photo from "../component/click_photo";
import Size_and_color from "../component/size_and_color";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div container>
      <div className="row bodyContent">
        <div className="col-7 clickablePhotos bg-warning ">
          <Click_photo />
        </div>
        <div className="col-5 productRightSide bg-danger">
          <div className="row itemDescription">itemDescription</div>
          <div className="row sizeColor">
            {" "}
            <Size_and_color />
          </div>
          <div className="row waistLength"> waistLength</div>
          <div className="row sizeGuide ">sizeGuide</div>
          <div className="row addToBag"> addToBag</div>
        </div>
      </div>
    </div>
  );
};
