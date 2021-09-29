import React, { useEffect, useState } from "react";
import FeedCard from '../FeedCard';



export default function Feed({feedData, loading}) {

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
        feedData.map((postdata) => {
          return <FeedCard postdata={postdata} key={postdata._id} />
        })
      }
      
      {}

    </section>
  )
}