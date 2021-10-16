// import React, { useEffect, useState } from "react";
// import { LocalDiningTwoTone } from '@material-ui/icons';
import FeedCard from '../FeedCard';
import { useQuery } from '@apollo/client';
import { Spinner } from "gestalt";
import { GET_ME } from '../../utils/queries';

export default function Feed({feedData, loading}) {

  const { loading: loading2, data: data } = useQuery(GET_ME, 
      { fetchPolicy: "no-cache" }
    );

  const me = data?.me || {};


  if (loading || loading2 ) {
    return (
        <div style={{marginTop: "120px", width: "70%", justifyContent: "center"}}>
          <Spinner show={true} accessibilityLabel="loading feed"/>
        </div>
    )
  }
  
  return (
    <section id="feed-container">

      {
        feedData.length === 0 ? 'no data' :
        feedData.map((postdata) => {
          return <FeedCard postdata={postdata} me={me} key={postdata._id} />
        })
      }
      
    </section>
  )
}