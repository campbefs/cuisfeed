import React from 'react';

import { Box, Card, Text, Link, Avatar, Button } from "gestalt";


export default function CardExample() {
  return (
    <Box maxWidth={236} padding={2} column={12} margin={8}>
      <Card image={<Avatar name="Nicholas" src="https://i.pinimg.com/originals/bd/35/1e/bd351eff6c29b993ec26ccd9545c8d1c.jpg" />}>
        <Text align="center" weight="bold">
          <Link href="https://pinterest.com">
            <Box paddingX={3} paddingY={2}>
              Nicholas
            </Box>
          </Link>
        </Text>
        <Button
          accessibilityLabel="Follow Nicholas"
          color="red"
          text="Follow"
        />
      </Card>
    </Box>
  );
}