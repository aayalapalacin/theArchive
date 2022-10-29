import React, { useEffect, useState } from "react";
import { ArchiveMatch, MatchPc9 } from "../../../util/levi_datatbase_util";
import ArchiveHeader from "./archive_header";
import Pc9Result from "./pc9_result";
import RecommendationList from "./recommendation_list";
import RetiredFavorite from "./retired_favorite";

const ArchiveRecommendation = ({ pc9 }) => {
  const [matchingJean, setMatchingJean] = useState(MatchPc9(pc9));

  // useEffect( () => {
  //     console.log('archiveRecommendations')
  //     console.log(archiveRecommendations)
  // }, [archiveRecommendations])

  return (
    <div>
      <ArchiveHeader />
      <Pc9Result matchingJean={matchingJean} />
      <RetiredFavorite />
      <RecommendationList pc9={pc9} />
    </div>
  );
};

export default ArchiveRecommendation;
