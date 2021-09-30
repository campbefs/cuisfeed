import React from 'react';

import { Box, Card, Text, Link, Avatar, Button } from "gestalt";


export default function CardExample(props) {

  const { id, username } = props;

  let profileLink = `/profile/${username}`

  return (
    <Box maxWidth={236} padding={2} column={12} margin={8}>
      <Card image={
            <Link href={profileLink}>
              <Avatar name={username} src="https://i.pinimg.com/originals/bd/35/1e/bd351eff6c29b993ec26ccd9545c8d1c.jpg" />
            </Link>}>
        <Text align="center" weight="bold">
          <Link href={profileLink}>
            <Box paddingX={3} paddingY={2}>
              {username}
            </Box>
          </Link>
        </Text>
        <Button
          accessibilityLabel="Follow Nicholas"
          color="blue"
          text="Follow"
        />
      </Card>
    </Box>
  );
}