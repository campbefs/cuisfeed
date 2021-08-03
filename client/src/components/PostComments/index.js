import React from "react";
import { Flex, Label, Text, Switch, Box, Tabs } from "gestalt";


export default function PostComments() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChange = ({ activeTabIndex, event }) => {
    event.preventDefault();
    setActiveIndex(activeTabIndex)
  };

  const tabs = [
    { href: "https://pinterest.com", text: "Post Comments",  }, // indicator: "dot"
    { href: "https://pinterest.com", text: "Recipe Reviews" },
  ];

  return (
    <Box marginTop={5}>
      <Flex alignItems="center" direction="column" gap={4}>
        <Box padding={1}>
          <Tabs
            activeTabIndex={activeIndex}
            onChange={handleChange}
            tabs={tabs}
            // wrap={wrap}
          />
        </Box>
      </Flex>
    </Box>

  );
}