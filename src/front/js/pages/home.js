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
import { Link } from "react-router-dom";
import ArchiveMatchScore from "../component/archive_recommendation/archive_match_score";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container px-0 ">
      {/* navbar in navbar.js and layout.js */}

      <div className="text-center">
        <hr class="solid" />
        <div className="text-center">
          <p>
            <img src="https://i.imgur.com/Byxw9LD.png" height="20px" /> Visit
            the Archive for a perfect fit.{" "}
            <img src="https://i.imgur.com/hVTiMmi.png" height="20px" />
          </p>
        </div>
        <hr class="solid" />
      </div>

      <div className="row reviews px-3">
        <Name_and_review />
      </div>

      <div className="row productPrice hide-in-mobile-view">
        <ProductPrice />
      </div>
      <div className="row clickPhotos">
        <Click_photo />
      </div>

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
      <Link to="/archive"> ***Archive Page Link DELETE LATE **** </Link>

      {/* footer in footer.js and layout.js */}
      {/* <Footer /> */}
    </div>
  );
};
