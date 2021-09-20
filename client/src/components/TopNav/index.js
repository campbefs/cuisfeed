import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading, SearchField, Flex, IconButton, Layer, Popover, Box,
        Text,
        FixedZIndex} from 'gestalt';
import Auth from '../../utils/auth';
import Badge from '@material-ui/core/Badge';
import { Redirect } from 'react-router';
import { withStyles, makeStyles } from '@material-ui/core/styles';



function Nav(props) {

  const {
    currentPage,
    setCurrentPage,
    searchSubmit,
    setSearchSubmit
  } = props;

  const [ searchInput, setSearchInput ] = useState('');

  // linking out
  const [toNext, setToNext] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(false);

  const anchorRef = React.useRef();

  const fixedZindex = new FixedZIndex(6);

  // const StyledBadge = withStyles((theme) => ({
  //   badge: {
  //     right: 4,
  //     top: 5,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: '0 4px',
  //   },
  // }))(Badge);

  // if a person searches & redirects, this switches the indicator back to false
  useEffect(() => {
    setToNext(false);
  }, [toNext]); // Only re-run the effect if count changes


  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!searchInput) {
      alert("Please enter text to search");
      return false;
    }

    setCurrentPage('Search');
    // window.location.replace(`/search/${searchInput}`);

    setSearchSubmit(searchSubmit+1);
    setToNext(true);
    
  }

  let url = `/search/?q=${searchInput}`

  return ( 
    <header id='header'>

      {toNext ? <Redirect to={url} /> : null}

      <Flex gap={4} alignItems="center" flex="grow">
        <Link id="home-link" to='/home'>
          <Heading size="lg" id="head-title">Cuisfeed</Heading>
        </Link>
        <Link id="home-link" to='/home'>
          <div id="top-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABGElEQVRoQ+2Z0Q3CMAxEr5vAaEwCbMIIsAmjwASgoID4SIsVW41trj9VpdT1+dlO605IekxJdeGvhB0A7CvJI4By/TAmewZQbF+N7X7MtYitIaw4cAOwrWdzfSOFFTE7ACdzVUCzxn4R09Zly765th5iFDaDIQQxabd8d9eilcI0haetsbTEeoIaIhUp7CsCIYilrTEKq/tXmH2MzSNa8yAxEuvJgcY92nfFHjdCbNAUxhrryQHW2PLAlMOcaMMcoyp4mXE1MLUSdgewyTbivtTPmFV/SlgRGWpH2+GGOr/0cApzi2bGMRIjMScRYCo6ASF2g8TEoXKykMScgBC7QWLiUDlZSGJOQIjdIDFxqJwsJDEnIMRuPAHZTaA39FQ9CQAAAABJRU5ErkJggg=="
              alt="cookbook"
            />
          </div>
        </Link>

        <Flex.Item flex="grow">
          <form onSubmit={handleFormSubmit}>
            <SearchField
              accessibilityLabel="Search Recipes or Chefs"
              accessibilityClearButtonLabel="Clear search field"
              id="top-search-bar"
              onChange={({ value }) => setSearchInput(value)} // this has to be 'value'
              placeholder="Search"
              value={searchInput}
              onBlur={() => setSearchInput("")}
            />
          </form>
        </Flex.Item>

        <React.Fragment>
          <Badge badgeContent={2} color="secondary">
            <IconButton
              accessibilityLabel="Open the options menu"
              accessibilityControls="menu"
              accessibilityExpanded={selectedMenu}
              accessibilityHaspopup
              selected={selectedMenu}
              icon="bell"
              // iconColor="red"
              onClick={() => {
                setSelectedMenu(!selectedMenu);
              }}
              ref={anchorRef}
            />
          </Badge>
          {selectedMenu && (
            <Layer
              zIndex={fixedZindex}
            >
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
                    <Link Home to='/home'>
                      <Text weight="bold">
                        Notification1
                      </Text>
                    </Link>
                  </Box>
                  <Box padding={2}>
                    <Link to='/myprofile'>
                      <Text weight="bold">
                        Notification2
                      </Text>
                    </Link>
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
            selected={selectedAccount}
            icon="person"
            size="md"
            onClick={() => setSelectedAccount(!selectedAccount)}
            ref={anchorRef}
          />
          {selectedAccount && (
            <Layer
              zIndex={fixedZindex}
            >
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
                      About Cuisfeed
                    </Text>
                  </Box>
                  <Box padding={2}>
                    <Text weight="bold">
                      My Account
                    </Text>
                  </Box>
                  <Box padding={2}>
                    <Text weight="bold">
                      Give Feedback
                    </Text>
                  </Box>
                  <Box padding={2}>
                    <Link onClick={Auth.logout}>
                      <Text weight="bold">
                        Logout
                      </Text>
                    </Link>
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