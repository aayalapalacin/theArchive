
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../styles/waist_and_length.css";


export const WaistAndLength = ({product, model = {height: `5'9"`, waist: '27'}}) => {
  const [waistSize, setWaistSize] = useState();
  const [length, setLength] = useState();

  // Selection Choices
  const waistSizeOptions = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
  const lengthOptions = [26, 28, 30];
  //

  const test = () => {
    console.log('im here', model)
  }

  
  const updateWaistSize = (e) => setWaistSize(e.target.value);
  const updateLength = (e) => setLength(e.target.value);
  

  return (
    <div className="waist-length-container">
      <label for="waist-size">Waist</label>
      <div onChange={(e) => updateWaistSize(e)} className="size-radio hide-in-mobile-view">
        {test()}

        {waistSizeOptions.map((sizeOption) => {
          return(
            <label>
              <input
                type="radio"
                value={sizeOption}
                checked={waistSize == sizeOption}
                name="waistSize"
              />
              <div>{sizeOption}</div>
            </label>
          )
        })}
      </div>
      <label for="length">Length</label>
      <div onChange={(e) => updateLength(e)} className="size-radio">
        {lengthOptions.map((lengthOption) => {
          return(
            <label>
              <input
                type="radio"
                value={lengthOption}
                checked={length == lengthOption}
                name="length"
              />
              <div>{lengthOption}</div>
            </label>
          )
        })}
      </div>
      <div className='size-guide'>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-chart-simple"/>
          <span>Size Guide</span>
        </div>
        <p><strong>Fit:</strong> Customers say {product ? product.fit : '________'}</p>
        <p>Model is {test()} {model.height} wearing a size {model.waist} waist</p>
      </div>
    </div>
  );
};
