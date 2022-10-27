import React from "react";
import '../../../styles/archive_recommendation/recommendation_list_item.css'
import ArchiveMatchScore from "./archive_match_score";

const RecommendationListItem = ({product = {}, score}) => {
    return(
        <div className='recommendation-list-item-container'>
            <div className="recommendation-list-item-image">
                <img src="" />
                <ArchiveMatchScore score={score}/>
            </div>
        </div>
    )
}

export default RecommendationListItem