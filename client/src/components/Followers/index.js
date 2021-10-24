import React, { useState } from "react";
// import "../node_modules/gestalt/dist/gestalt.css"
import { Text, Box, Link, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";

import { Avatar, Typography } from '@material-ui/core';
import { Row, Item } from '@mui-treasury/components/flex';
import { makeStyles, StylesContext } from "@material-ui/styles";
import { BasicProfile } from '../BasicProfile';

// import Auth from '../../utils/auth';

// import { useMutation } from '@apollo/client';

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
  white: {
    backgroundColor: '#ffffff'
  },
}));

export default function Followers(props) {

  const { number, type, users } = props;

  console.log(type, users);

  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  // const [ formState, setFormState ] = useState( {username: '', email: '', password: ''});
  // const { username, email, password } = formState;


  const ModalWithHeading = ({
    onDismiss,
  }) => {

    return (
      <>
        <Modal
          accessibilityModalLabel="Following List"
          heading={type}
          onDismiss={onDismiss}
          // footer={
          // }
          size="sm"
        >

          {users.map((user) => {
            return (
              <BasicProfile
                marginBottom="20px"
                paddingLeft="20px"
                username={user.username}
              />
            )
          })}

        </Modal>
      </>
    );
  };

  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <React.Fragment>
      <Link
        inline
        // className='followers' 
        // color="blue"
        // size="lg" 
        onClick={() => setShouldShow(true)}
        hoverStyle="none"
        tapStyle="compress"
      >
        <Text weight="bold">{number} {type}</Text>
      </Link>
      {shouldShow && (
        <Layer zIndex={modalZIndex}>
          <ModalWithHeading onDismiss={() => setShouldShow(false)} />
        </Layer>
      )}
    </React.Fragment>

  );
}