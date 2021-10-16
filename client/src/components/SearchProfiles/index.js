import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import ProfileCard from "../ProfileCard";
import { Spinner } from "gestalt";
import { SEARCH_USERS, GET_FOLLOWING } from "../../utils/queries";

export default function SearchProfiles(props) {
  const { currentSearchPage, searchInput } = props;

  const { loading, data } = useQuery(SEARCH_USERS,
    {
      variables: { username: searchInput },
      // fetchPolicy: "no-cache"
  });

  const { loading: loading1, data: data1, refetch } = useQuery(GET_FOLLOWING);

  let user_data = data?.searchUsers;
  let following_data = data1?.getFollowing.following;

  console.log('user_data', data);
  console.log('data1', data1);
  


  if (loading || loading1) {
    // return <div>Loading...</div>
    return (
      <>
        <div style={{marginTop: "80px"}}>
          <Spinner show={true} accessibilityLabel="loading"/>
        </div>
      </>
    )
  }

  return (
    <>
      {
        user_data.map((profile) => {
          return (
            <ProfileCard 
              id={profile._id} 
              username={profile.username} 
              key={profile._id}
              loading1={loading1}
              following_data={following_data}
              refetch={refetch}
            />
          )
        })
    }
    </>
  )
}