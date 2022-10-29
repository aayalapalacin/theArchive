import React, { useEffect } from "react";
import "../../../styles/product_show/click_photo.css";

function Click_photo({ jean }) {
  console.log("jean", jean);
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={
                jean?.ImgFront ||
                "https://lsco.scene7.com/is/image/lsco/A09640003-front-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
              }
              class="d-block w-100"
              alt="photo1"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src={
                jean?.ImgFront ||
                "https://lsco.scene7.com/is/image/lsco/A09640003-side-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
              }
              class="d-block w-100"
              alt="photo2"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src={
                jean?.ImgFront ||
                "https://lsco.scene7.com/is/image/lsco/A09640003-back-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
              }
              class="d-block w-100"
              alt="photo3"
            />{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            
          </div>
          <div class="carousel-item">
            
          </div>
          <div class="carousel-item">
            
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="">Next</span>
        </button>
      </div> */}
    </div>
  );
}

export default Click_photo;
