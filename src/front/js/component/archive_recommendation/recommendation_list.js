import React, { useEffect, useState } from "react";
import RecommendationListItem from "./recomendation_list_item";
import "../../../styles/archive_recommendation/recommendation_list.css";
import { ArchiveMatch } from "../../../util/levi_datatbase_util";

const RecommendationList = ({ pc9 }) => {
  const [recomendationList, setRecommendationList] = useState(
    ArchiveMatch(pc9)
  );

  useEffect(() => {
    console.log("recommendationList");
    console.log(recomendationList);
  }, [recomendationList]);
  return (
    <div className="recommendation-list-container">
      <div className="recommendation-list-header">
        <div className="tenPx">Based on the PC9 code</div>
        <div className="fourteenPx">The Archive Reccomends</div>
      </div>
      <div className="recommendation-list">
        {recomendationList[0]?.map((match) => (
          <RecommendationListItem product={match} archiveRating={100} />
        ))}
        {recomendationList[1]?.map((match) => (
          <RecommendationListItem product={match} archiveRatinv={85} />
        ))}
        {recomendationList[2]?.map((match) => (
          <RecommendationListItem product={match} archiveRating={75} />
        ))}
        {recomendationList[3]?.map((match) => (
          <RecommendationListItem product={match} archiveRating={50} />
        ))}
        {recomendationList[4]?.map((match) => (
          <RecommendationListItem product={match} archiveRating={25} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
