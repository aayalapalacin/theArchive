import React, { useEffect, useState } from "react";
import RecommendationListItem from "./recomendation_list_item";
import "../../../styles/archive_recommendation/recommendation_list.css";
import { paginateRecommendationList } from "../../../util/levi_datatbase_util";
import PageNavigation from "./page_navigation";

const RecommendationList = ({ pc9, numPerPage = 6 }) => {
  const [recommendationList, setRecommendationList] = useState(
    paginateRecommendationList(pc9, numPerPage) //
  );
  const [curPage, setCurPage] = useState(0);

  return (
    <div className="recommendation-list-container">
      <div className="recommendation-list-header">
        <div className="tenPx">Based on the PC9 code</div>
        <div className="fourteenPx">The Archive Reccomends</div>
      </div>
      <div className="recommendation-list">
        {recommendationList[curPage]?.map((match) => (
          <RecommendationListItem product={match} />
        ))}
      </div>
      <PageNavigation
        numPages={recommendationList.length}
        curPage={curPage}
        setCurPage={setCurPage}
      />
    </div>
  );
};

export default RecommendationList;
