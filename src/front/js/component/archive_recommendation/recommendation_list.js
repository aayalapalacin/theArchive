import React from 'react'
import RecommendationListItem from './recomendation_list_item';
import '../../../styles/archive_recommendation/recommendation_list.css'

const RecommendationList = ({oneHundredPercentMatch = [{1:1}], eightyFivePercentMatch = [{1:1},{2:2}], seventyFivePercentMatch,
                             fiftyPercentMatch, twentyFivePercentMatch}) => {

    return (
        <div className='recommendation-list-container'>
             <div className='recommendation-list-header'>
                <div>Based on the PC9 code</div>
                <div>The Archive Reccomends</div>
            </div>
            <div className='recommendation-list'>
                {oneHundredPercentMatch.map( match => (
                     <RecommendationListItem product={match} archiveRating={100}/>
                ))}
                {eightyFivePercentMatch?.map( match => (
                    <RecommendationListItem product={match} archiveRatinv={85} />
                ))}
                {seventyFivePercentMatch?.map( match => (
                    <RecommendationListItem product={match} archiveRating={75} />
                ))}
                {fiftyPercentMatch?.map( match => (
                    <RecommendationListItem product={match} archiveRating={50} />
                ))}
                {twentyFivePercentMatch?.map( match => (
                    <RecommendationListItem product={match} archiveRating={25} />
                ))}
             </div>
        </div>
    )
    
}

export default RecommendationList;