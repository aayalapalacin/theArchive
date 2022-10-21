import React, { useState } from "react";
import "../../styles/waist_and_length.css";


export const WaistAndLength = () => {
  const [waistSize, setWaistSize] = useState();
  const [length, setLength] = useState();

  // Selection Choices
  const waistSizeOptions = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
  const lengthOptions = [26, 28, 30];
  //

  
  const updateWaistSize = (e) => setWaistSize(e.target.value);
  const updateLength = (e) => setLength(e.target.value);
  

  return (
    <div className="waist-length-container">
      <label for="waist-size">Waist</label>
      <div onChange={(e) => updateWaistSize(e)} className="size-radio">
        {waistSizeOptions.map((sizeOption) => {
          return(
            <label>
              <input
                type="radio"
                value={sizeOption}
                checked={waistSize == sizeOption}
                name="waistSize"
              />
              <span>{sizeOption}</span>
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
              <span>{lengthOption}</span>
            </label>
          )
        })}
      </div>
    </div>
  );
};
