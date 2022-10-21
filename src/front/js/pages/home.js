import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Click_photo from "../component/click_photo";
import Size_and_color from "../component/size_and_color";
import { WaistAndLength } from "../component/waist_and_length";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      {/* navbar in navbar.js and layout.js */}
      <div className="row reviews"></div>
      <div className="row clickPhotos">
        <Click_photo />
      </div>
      <div className="row sizeColor"></div>
      <div className="row mayAlsoLike"></div>
      {/* footer in footer.js and layout.js */}
    </div>
  );
};
