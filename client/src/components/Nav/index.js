import React from 'react';
import { Heading, SearchField, Flex, IconButton, Layer, Popover, Box,
        Text} from 'gestalt';

function Nav() {
  const [value, setValue ] = React.useState('');

  const [selectedMenu, setSelectedMenu] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState(false);

  const anchorRef = React.useRef();

  return (
    <header id='header'>

      <Flex gap={4} alignItems="center" flex="grow">
        <Heading size="lg" id="head-title">Cuisfeed</Heading>
        <div id="top-icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABGElEQVRoQ+2Z0Q3CMAxEr5vAaEwCbMIIsAmjwASgoID4SIsVW41trj9VpdT1+dlO605IekxJdeGvhB0A7CvJI4By/TAmewZQbF+N7X7MtYitIaw4cAOwrWdzfSOFFTE7ACdzVUCzxn4R09Zly765th5iFDaDIQQxabd8d9eilcI0haetsbTEeoIaIhUp7CsCIYilrTEKq/tXmH2MzSNa8yAxEuvJgcY92nfFHjdCbNAUxhrryQHW2PLAlMOcaMMcoyp4mXE1MLUSdgewyTbivtTPmFV/SlgRGWpH2+GGOr/0cApzi2bGMRIjMScRYCo6ASF2g8TEoXKykMScgBC7QWLiUDlZSGJOQIjdIDFxqJwsJDEnIMRuPAHZTaA39FQ9CQAAAABJRU5ErkJggg=="/>
        </div>

        <Flex.Item flex="grow">
          <SearchField
            accessibilityLabel="Search Recipes"
            accessibilityClearButtonLabel="Clear search field"
            id="top-search-bar"
            onChange={({value}) => setValue(value)}
            placeholder="Search Recipes"
            value={value}
          />
        </Flex.Item>

        <React.Fragment>
          <IconButton
            accessibilityLabel="Open the options menu"
            accessibilityControls="menu"
            accessibilityExpanded={selectedMenu}
            accessibilityHaspopup
            selectedMenu={selectedMenu}
            icon="menu"
            onClick={() => setSelectedMenu(!selectedMenu)}
            ref={anchorRef}
          />
          {selectedMenu && (
            <Layer>
              <Popover
                anchor={anchorRef.current}
                idealDirection="down"
                onDismiss={() => setSelectedMenu(false)}
                positionRelativeToAnchor={false}
                size="md"
              >
                <Box
                  id="menu"
                  direction="column"
                  display="flex"
                  padding={2}
                >
                  <Box padding={2}>
                    <Text weight="bold">
                      Option 1
                    </Text>
                  </Box>
                  <Box padding={2}>
                    <Text weight="bold">
                      Option 2
                    </Text>
                  </Box>
                </Box>
              </Popover>
            </Layer>
          )}
        </React.Fragment>

        <React.Fragment>
          <IconButton
            accessibilityLabel="Open the account menu"
            accessibilityControls="person"
            accessibilityExpanded={selectedAccount}
            accessibilityHaspopup
            selectedMenu={selectedAccount}
            icon="person"
            size="md"
            onClick={() => setSelectedAccount(!selectedAccount)}
            ref={anchorRef}
          />
          {selectedAccount && (
            <Layer>
              <Popover
                anchor={anchorRef.current}
                idealDirection="down"
                onDismiss={() => setSelectedAccount(false)}
                positionRelativeToAnchor={false}
                size="md"
              >
                <Box
                  id="menu"
                  direction="column"
                  display="flex"
                  padding={2}
                >
                  <Box padding={2}>
                    <Text weight="bold">
                      My Account
                    </Text>
                  </Box>
                  <Box padding={2}>
                    <Text weight="bold">
                      Logout
                    </Text>
                  </Box>
                </Box>
              </Popover>
            </Layer>
          )}
        </React.Fragment>

      </Flex>

    </header>
    
  )
}


export default Nav;