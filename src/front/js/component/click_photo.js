import React, { useEffect } from "react";
import "../../styles/click_photo.css";

const leviDatabase = [
  {
    Identifier: "523490025",
    Product_Name_Taxonomy_US: "Wedgie Fit Skinny Women's Jeans (Plus Size)",
    Size_Group_Taxonomy_US: "Womens_Plus_Size",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Wedgie,Skinny,Taper",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Black",
  },
  {
    Identifier: "349640047",
    Product_Name_Taxonomy_US: "Wedgie Straight Fit Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Wedgie",
    Stretch_Taxonomy_US: null,
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "188820452",
    Product_Name_Taxonomy_US: "721 High Rise Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: null,
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "A15600003",
    Product_Name_Taxonomy_US: "Low Pitch Bootcut Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Bootcut,Low Pitch",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "188850025",
    Product_Name_Taxonomy_US: "715 Bootcut Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Bootcut",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "177800065",
    Product_Name_Taxonomy_US: "710 Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny,Super Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "362530000",
    Product_Name_Taxonomy_US: "Orange Tab Slim Leg Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Slim",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Dark Wash",
  },
  {
    Identifier: "527970310",
    Product_Name_Taxonomy_US: "720 High Rise Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Super Skinny,Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Dark Wash",
  },
  {
    Identifier: "527970067",
    Product_Name_Taxonomy_US: "720 High Rise Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Super Skinny,Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "227910108",
    Product_Name_Taxonomy_US: "Mile High Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny,Super Skinny,Mile High",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "362000180",
    Product_Name_Taxonomy_US: "501 Original Fit Cropped Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Boyfriend,Straight",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "564770027",
    Product_Name_Taxonomy_US: "721 High Rise Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Black",
  },
  {
    Identifier: "188820357",
    Product_Name_Taxonomy_US: "721 High Rise Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: null,
    Color_Group_Taxonomy_US: "Black",
  },
  {
    Identifier: "227910147",
    Product_Name_Taxonomy_US: "Mile High Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny,Super Skinny,Mile High",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Black",
  },
  {
    Identifier: "188820166",
    Product_Name_Taxonomy_US: "721 High Rise Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Dark Wash",
  },
  {
    Identifier: "196310153",
    Product_Name_Taxonomy_US: "314 Shaping Straight Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "227910039",
    Product_Name_Taxonomy_US: "Mile High Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny,Super Skinny,Mile High",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "188850077",
    Product_Name_Taxonomy_US: "715 Bootcut Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Bootcut",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "228610030",
    Product_Name_Taxonomy_US: "Wedgie Fit Ankle Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Wedgie,Taper",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "White",
  },
  {
    Identifier: "362000241",
    Product_Name_Taxonomy_US: "501® Original Cropped Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: null,
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Dark Wash",
  },
  {
    Identifier: "A36250002",
    Product_Name_Taxonomy_US: "726 High Rise Flare Women's Jeans (Plus Size)",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: null,
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "726930111",
    Product_Name_Taxonomy_US: "Ribcage Straight Ankle Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Ribcage,Straight",
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "188820262",
    Product_Name_Taxonomy_US: "721 High Rise Skinny Plaid Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "188810005",
    Product_Name_Taxonomy_US: "711 Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny",
    Stretch_Taxonomy_US: null,
    Color_Group_Taxonomy_US: "Dark Wash",
  },
  {
    Identifier: "362000236",
    Product_Name_Taxonomy_US: "501® Original Cropped Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: null,
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "A19670001",
    Product_Name_Taxonomy_US: "Ribcage Cropped Bootcut Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Bootcut,Ribcage",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "579590001",
    Product_Name_Taxonomy_US: "Mile High Super Skinny Ankle Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Skinny,Super Skinny,Mile High",
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
  {
    Identifier: "362530001",
    Product_Name_Taxonomy_US: "Orange Tab Slim Leg Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Slim",
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "125010307",
    Product_Name_Taxonomy_US: "501® Original Fit Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: "Boyfriend,Straight",
    Stretch_Taxonomy_US: "Non Stretch",
    Color_Group_Taxonomy_US: "Light Wash",
  },
  {
    Identifier: "527970340",
    Product_Name_Taxonomy_US: "720 High Rise Super Skinny Women's Jeans",
    Size_Group_Taxonomy_US: "Womens",
    Gender_Taxonomy_US: "Women",
    Fit_Taxonomy_US: null,
    Stretch_Taxonomy_US: "Stretch",
    Color_Group_Taxonomy_US: "Medium Wash",
  },
];
console.log(leviDatabase, "leviDatabase");

let oneHundredPercentMatch = [];
let eightyFivePercentMatch = [];
let seventyFivePercentMatch = [];
let fiftyPercentMatch = [];
let twentyFivePercentMatch = [];
let input = "362530001";
let inputProduct = leviDatabase.filter((item) => item.Identifier == input);

for (let i = 0; i < leviDatabase.length; i++) {
  if (leviDatabase[i].Identifier != input) {
    if (
      leviDatabase[i].Size_Group_Taxonomy_US ==
        inputProduct[0].Size_Group_Taxonomy_US &&
      leviDatabase[i].Gender_Taxonomy_US ==
        inputProduct[0].Gender_Taxonomy_US &&
      leviDatabase[i].Fit_Taxonomy_US == inputProduct[0].Fit_Taxonomy_US &&
      leviDatabase[i].Stretch_Taxonomy_US ==
        inputProduct[0].Stretch_Taxonomy_US &&
      leviDatabase[i].Color_Group_Taxonomy_US ==
        inputProduct[0].Color_Group_Taxonomy_US
    ) {
      oneHundredPercentMatch.push(leviDatabase[i]);
    } else if (
      leviDatabase[i].Size_Group_Taxonomy_US ==
        inputProduct[0].Size_Group_Taxonomy_US &&
      leviDatabase[i].Gender_Taxonomy_US ==
        inputProduct[0].Gender_Taxonomy_US &&
      leviDatabase[i].Fit_Taxonomy_US == inputProduct[0].Fit_Taxonomy_US &&
      leviDatabase[i].Stretch_Taxonomy_US == inputProduct[0].Stretch_Taxonomy_US
    ) {
      eightyFivePercentMatch.push(leviDatabase[i]);
    } else if (
      leviDatabase[i].Size_Group_Taxonomy_US ==
        inputProduct[0].Size_Group_Taxonomy_US &&
      leviDatabase[i].Gender_Taxonomy_US ==
        inputProduct[0].Gender_Taxonomy_US &&
      leviDatabase[i].Fit_Taxonomy_US == inputProduct[0].Fit_Taxonomy_US
    ) {
      seventyFivePercentMatch.push(leviDatabase[i]);
    } else if (
      leviDatabase[i].Size_Group_Taxonomy_US ==
        inputProduct[0].Size_Group_Taxonomy_US &&
      leviDatabase[i].Gender_Taxonomy_US == inputProduct[0].Gender_Taxonomy_US
    ) {
      fiftyPercentMatch.push(leviDatabase[i]);
    } else if (
      leviDatabase[i].Gender_Taxonomy_US == inputProduct[0].Gender_Taxonomy_US
    ) {
      twentyFivePercentMatch.push(leviDatabase[i]);
    } else {
      break;
    }
  }
}
console.log("25", twentyFivePercentMatch);
console.log("50", fiftyPercentMatch);
console.log("75", seventyFivePercentMatch);
console.log("85", eightyFivePercentMatch);
console.log("100", oneHundredPercentMatch);
function Click_photo() {
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
              src="https://lsco.scene7.com/is/image/lsco/A09640003-front-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
              class="d-block w-100"
              alt="photo1"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src="https://lsco.scene7.com/is/image/lsco/A09640003-side-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
              class="d-block w-100"
              alt="photo2"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src="https://lsco.scene7.com/is/image/lsco/A09640003-back-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=552"
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
