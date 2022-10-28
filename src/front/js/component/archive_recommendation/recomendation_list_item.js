import React from "react";
import "../../../styles/archive_recommendation/recommendation_list_item.css";
import ArchiveMatchScore from "./archive_match_score";

const RecommendationListItem = ({ product = {}, score }) => {
  return (
    <div className="recommendation-list-item-container">
      <div className="recommendation-list-item-image">
        <ArchiveMatchScore score={score} />
        <img
          src={
            product?.image ||
            "https://lsco.scene7.com/is/image/lsco/125010406-dynamic1-pdp?fmt=avif&qlt=40&resMode=bisharp&op_usm=0.6,0.6,8&fit=crop,0&wid=375&hei=500"
          }
        />
      </div>
      <div className="recommendation-list-item-details">
        <div>{product?.Product_Name_Taxonomy_US}</div>
        <div>
          <strong>${product?.price || 99.99}</strong>
        </div>
      </div>
    </div>
  );
};

export default RecommendationListItem;
