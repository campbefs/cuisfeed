// import React, { useEffect, useState } from "react";
import { LocalDiningTwoTone } from '@material-ui/icons';
import FeedCard from '../FeedCard';
import { Spinner } from "gestalt";


export default function Feed({feedData, loading}) {

  if (loading) {
    return (
        <div style={{marginTop: "120px", width: "70%", justifyContent: "center"}}>
          <Spinner show={true} accessibilityLabel="loading"/>
        </div>
    )
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