import React from "react";
import PostComments from "../PostComments";
import { Flex, Label, Text, Switch, Box, Tabs } from "gestalt";


export default function PostCommentsSelect() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChange = ({ activeTabIndex, event }) => {
    event.preventDefault();
    setActiveIndex(activeTabIndex)
  };

  const tabs = [
    { href: "https://cuisfeed.com", text: "Post Comments",  }, // indicator: "dot"
    { href: "https://cuisfeed.com", text: "Recipe Reviews" },
  ];

  return (
    <div>
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

      {
        activeIndex === 0 ? <PostComments title="Comments"/> : <PostComments title="Reviews"/>
      }

    </div>


  );
}