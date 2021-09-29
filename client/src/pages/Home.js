import React from "react";

import Feed from '../components/Feed';
import FollowCard from '../components/FollowCard';
import FindFollowers from '../components/FindFollowers';

import { useQuery } from "@apollo/client";
import { MY_FEED, GET_ME_PROFILE } from "../utils/queries";
import { Spinner } from "gestalt";

export default function Home() {

  const { loading: loading1, data: follow } = useQuery(GET_ME_PROFILE, {
    // fetchPolicy: "no-cache",
  });
  const { loading: loading_feed, data: feed } = useQuery(MY_FEED);
  let feedData = feed?.myFeed || {};
  let followData = follow?.me || {};

  // pass loading down to the components - follow (feed spinner is in the Feed component)
  if (loading1) {
    return (
      <div style={{marginTop: "120px", width: "70%", justifyContent: "center"}}>
        <Spinner show={true} accessibilityLabel="loading home"/>
      </div>
      )
  }

  return(
    // add padding for edges
    <section
      className="topic-container"
    >
      <div className="middle-bar">
        <Feed
          feedData={feedData}
          loading={loading_feed}
        />
      </div>
      <div className="right-bar">
        <FindFollowers/>
        <FollowCard/>
      </div>
    </section>
  );
};