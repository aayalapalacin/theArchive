import React from 'react'
import PageNavigation from './page_navigation'
import Pc9Result from './pc9_result'

import RecommendationList from './recommendation_list'
import RetiredFavorite from './retired_favorite'

const ArchiveRecommendation = ({jean}) => {
    return(
        <div>
            <Pc9Result />
            <RetiredFavorite />
            <RecommendationList />
            <PageNavigation />
        </div>
    )
    
}

export default ArchiveRecommendation