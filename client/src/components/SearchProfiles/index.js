import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import ProfileCard from "../ProfileCard";
import { Spinner } from "gestalt";
import { SEARCH_USERS } from "../../utils/queries";

export default function SearchProfiles(props) {
  const { currentSearchPage, searchInput } = props;

  const { loading, data } = useQuery(SEARCH_USERS,
    {
      variables: { username: searchInput },
      // fetchPolicy: "no-cache"
    });

  let user_data = data?.searchUsers;

  useEffect( () => {
    console.log('user data', user_data);
  }, [data]);

  if (loading) {
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
            <ProfileCard id={profile._id} username={profile.username} key={profile._id}/>
          )
        })
    }
      {/* <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard /> */}
    </>
  )
}