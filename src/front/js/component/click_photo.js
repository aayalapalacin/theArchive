import React from "react";

function Click_photo() {
  return (
    <div>
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
            id="v-pills-photo1-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-photo1"
            type="button"
            role="tab"
            aria-controls="v-pills-photo1"
            aria-selected="true"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-dynamic1-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=150&hei=150"
              alt="highRiseCoat"
            />
          </button>
          <button
            class="nav-link"
            id="v-pills-photo2-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-photo2"
            type="button"
            role="tab"
            aria-controls="v-pills-photo2"
            aria-selected="false"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=150&hei=150"
              alt="highRiseHat"
            />
          </button>

          <button
            class="nav-link"
            id="v-pills-photo3-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-photo3"
            type="button"
            role="tab"
            aria-controls="v-pills-photo3"
            aria-selected="false"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-side-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=150&hei=150"
              alt="highRiseHatSize"
            />
          </button>
          <button
            class="nav-link"
            id="v-pills-photo4-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-photo4"
            type="button"
            role="tab"
            aria-controls="v-pills-photo4"
            aria-selected="false"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-back-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=150&hei=150"
              alt="highRiseBack"
            />
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-photo1"
            role="tabpanel"
            aria-labelledby="v-pills-photo1-tab"
            tabindex="0"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-dynamic1-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=655"
              alt="highRiseCoatBig"
            />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-photo2"
            role="tabpanel"
            aria-labelledby="v-pills-photo2-tab"
            tabindex="0"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-front-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=655"
              alt="highRiseHat"
            />
          </div>

          <div
            class="tab-pane fade"
            id="v-pills-photo3"
            role="tabpanel"
            aria-labelledby="v-pills-photo3-tab"
            tabindex="0"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-side-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=600&amp;hei=655"
              alt="highRiseHatSideBig"
            />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-photo4"
            role="tabpanel"
            aria-labelledby="v-pills-photo4-tab"
            tabindex="0"
          >
            <img
              src="https://lsco.scene7.com/is/image/lsco/188830016-back-pdp?fmt=jpeg&amp;qlt=70,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0.8,1,10,0&amp;fit=crop,0&amp;wid=750&amp;hei=690"
              alt="highRiseBackBig"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Click_photo;
