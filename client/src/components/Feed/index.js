import React, { useEffect, useState } from "react";
import FeedCard from '../FeedCard';


export default function Feed({feedData, loading}) {

  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <section id="feed-container">
      {/* <div className="feed-post-container">Feed</div> */}
      {/* <FeedCard/> */}
      
      {feedData.map((postData) => {
        return <FeedCard post={postData}/>
      })}

    </section>
  )
}