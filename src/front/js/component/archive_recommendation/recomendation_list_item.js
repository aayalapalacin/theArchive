import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/archive_recommendation/recommendation_list_item.css";
import { getRandomJeanImage } from "../../../util/levi_datatbase_util";
import ArchiveMatchScore from "./archive_match_score";

const RecommendationListItem = ({ product = {} }) => {
  if (!("ImgFront" in product)) product.ImgFront = getRandomJeanImage();
  return (
    <div className="recommendation-list-item-container">
      <Link to="/browsingPage" state={{ jean: product }}>
        <div className="recommendation-list-item-image">
          <ArchiveMatchScore archiveRating={product?.match} />
          <img src={product?.ImgFront} />
        </div>
        <div className="recommendation-list-item-details">
          <div>{product?.Product_Name_Taxonomy_US}</div>
          <div>
            <strong>${product?.Price || 99.99}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationListItem;
