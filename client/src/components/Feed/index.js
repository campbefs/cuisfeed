import React, { useEffect, useState } from "react";
import FeedCard from '../FeedCard';

// import { MY_PROFILE } from "../../utils/queries";


export default function Feed({feedData, loading}) {

  // const { loading: loading, data: feed } = useQuery(MY_PROFILE, 
  //     { fetchPolicy: "no-cache"}
  //   );
  // let postData = post?.myProfile || {};

  console.log('feedData', feedData);

  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <section id="feed-container">

      {/* demo */}
      {/* <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/> */}

      {
        feedData.length === 0 ? 'no data' :
        feedData.map((postData) => {
          return <FeedCard post={postData}/>
        })
      }
      
      {}

    </section>
  )
}