import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Click_photo from "../component/click_photo";
import Size_and_color from "../component/size_and_color";
import { WaistAndLength } from "../component/waist_and_length";
import Name_and_review from "../component/name_and_review";
import AddToBag from "../component/add_to_bag";
import WhatsMySize from "../component/whats_my_size";
import { Footer } from "../component/footer";
import ProductPrice from "../component/product_price";
import ShippingAndQuantity from "../component/shipping_and_quantity";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container px-0 ">
      {/* navbar in navbar.js and layout.js */}
      <div className="row reviews px-3">
        <Name_and_review />
      </div>
      <div className="row productPrice hide-in-mobile-view">
        <ProductPrice />
      </div>
      <div className="row clickPhotos">
        <Click_photo />
      </div>
      <div className="row sizeColor">
        <Size_and_color />
      </div>
      <div className="row whatsMySize">
        <WhatsMySize />
      </div>
      <div className="row waistAndLength">
        <WaistAndLength />
      </div>
      <div className="row addToBag hide-in-mobile-view">
        <AddToBag />
      </div>
      <div className="row productPrice hide-in-web-view">
        <ProductPrice />
      </div>
      <div className="row shippingAndQuantity">
        <ShippingAndQuantity />
      </div>
      {/* footer in footer.js and layout.js */}
        {/* <Footer /> */}
    </div>
  );
};
