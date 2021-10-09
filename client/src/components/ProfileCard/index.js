import React, { useEffect } from 'react';

import { Box, Card, Text, Link, Button, Avatar as AvatarG } from "gestalt";
import { Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { useMutation } from '@apollo/client';
import { ADD_FOLLOW } from '../../utils/mutations';

const useStyles = makeStyles((theme) => ({
  medium: {
    width: "220px",
    height: "220px",
    fontSize: "100px",
  },
  gray: {
    color: "blue"
  }
}));


export default function CardExample(props) {

  const { id, username, following_data, loading1, refetch } = props;

  const [addFollow] = useMutation(ADD_FOLLOW);

  let profileLink = `/profile/${username}`
  const styles = useStyles();
  let following = true;

  let followArr = [];

  for (let i=0; i < following_data.length; i++ ) {
    followArr.push(following_data[i]._id);
  }

  const followUser = async () => {
    try {
      console.log('id', id);
      await addFollow({
        variables: {followId: id}
      });
      // alert('Follow added!')
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  // Is user already being followed?

  // if (followArr.includes(id)) {
  //   // console.log('id matches', id);
  //   // console.log('follow_arr', followArr);
  //   following = true;
  // } else {
  //   // console.log('id doesnt match', id);
  //   following = false;
  // }

      // console.log('id matches', id);
    // console.log('follow_arr', followArr);
  
  // console.log('id', id);
  // console.log('follow_arr', followArr);
  // console.log('following', followArr.includes(id));

  // Nick pic: src="https://i.pinimg.com/originals/bd/35/1e/bd351eff6c29b993ec26ccd9545c8d1c.jpg"

  if (loading1) {
    return <div>Still loading</div>
  }

  return (
    <Box maxWidth={236} padding={2} column={12} margin={8}>
      <Card image={
            <Link href={profileLink}>
              <Avatar 
                alt={username}
                className={styles.medium}
              > 
                {username.charAt(0).toUpperCase()}
              </Avatar>
              {/* <AvatarG name={username} outline="true"> {username.charAt(0).toUpperCase()}</AvatarG> */}
            </Link>}>
        <Text align="center" weight="bold">
          <Link href={profileLink}>
            <Box paddingX={3} paddingY={2}>
              {username}
            </Box>
          </Link>
        </Text>
        { !followArr.includes(id) ? (
          <Button
            accessibilityLabel="Follow user"
            color="blue"
            text="Follow"
            onClick={followUser}
          />
        ) : (
          <Button
            accessibilityLabel="Following confirmation button"
            color="blue"
            text="Following"
            selected
            disabled
            onClick={followUser}
          />
        )
      }
      </Card>
    </Box>
  );
}