import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div container>
      <div className="row bodyContent">
        <div className="col-7 clickablePhotos bg-warning ">clickablePhotos</div>
        <div className="col-5 productRightSide bg-danger">
          <div className="row itemDescription">itemDescription</div>
          <div className="row sizeColor">sizeColor</div>
          <div className="row waistLength"> waistLength</div>
          <div className="row sizeGuide ">sizeGuide</div>
          <div className="row addToBag"> addToBag</div>
        </div>
      </div>
    </div>
  );
};
