import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Click_photo from "../component/product_show/click_photo";
import Size_and_color from "../component/product_show/size_and_color";
import { WaistAndLength } from "../component/product_show/waist_and_length";
import Name_and_review from "../component/product_show/name_and_review";
import AddToBag from "../component/product_show/add_to_bag";
import WhatsMySize from "../component/product_show/whats_my_size";
import { Footer } from "../component/footer";
import ProductPrice from "../component/product_show/product_price";
import ShippingAndQuantity from "../component/product_show/shipping_and_quantity";
import { Link, useLocation } from "react-router-dom";

export const Home = ({}) => {
  const location = useLocation();
  const { jean } = location.state;

  return (
    <div className="container px-0 ">
      {/* navbar in navbar.js and layout.js */}

      <div>
        <hr class="solid" />
        <img src="https://i.imgur.com/Byxw9LD.png" height="20px"></img>
        <text>Visit the Archive for a perfect fit.</text>
        <img src="https://i.imgur.com/hVTiMmi.png" height="20px"></img>
        <hr class="solid" />
      </div>

      <div className="row reviews px-3">
        <Name_and_review jean={jean} />
      </div>

      <div className="row productPrice hide-in-mobile-view">
        <ProductPrice jean={jean} />
      </div>
      <div className="row clickPhotos">
        <Click_photo jean={jean} />
      </div>

      <div className="border border-muted rounded">
        <p className="h7">Archive</p>
        <p>
          This item is a {jean?.match || "XX"}% match to your preferences, but
          may be on the tighter side.
        </p>

        <div>
          <a href="" className=" text-dark font-weight-bold">
            View Fit Details
          </a>
        </div>

        <div>
          <a href="" className="text-danger">
            Browse Similar Products
          </a>
        </div>
      </div>

      <div className="row sizeColor">
        <Size_and_color jean={jean} />
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
        <ProductPrice jean={jean} />
      </div>
      <div className="row shippingAndQuantity">
        <ShippingAndQuantity />
      </div>

      {/* footer in footer.js and layout.js */}
      {/* <Footer /> */}
    </div>
  );
};
