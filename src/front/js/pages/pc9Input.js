import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../styles/pc9Input.css";

function Pc9Input() {
  return (
    <div>
      <div className="row archiveBackBtn">
        <div className="col-1">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="chevron-left"
          ></FontAwesomeIcon>
        </div>
        <div className="col-11">
          <p className="archiveBackTitle">the Archive</p>
        </div>
      </div>
      <div className="row myLeviJeanTitle">
        <span class="MY-LEVIS-JEANS">MY LEVI’S JEANS</span>
      </div>
      <div className="row 2of2">
        <span class="-of-2">2 of 2</span>
      </div>
      <div className="row pc9Instructions">
        <span class="Input-the-pc9-code-serial-number-found-on-the-back-of-the-care-tag">
          Input the pc9 code (serial number) found on the back of the care tag.
        </span>
      </div>
      <div className="row pc9Img"></div>
      <div className="row pc9Input"></div>
      <div className="row submit"></div>
    </div>
  );
}

export default Pc9Input;
