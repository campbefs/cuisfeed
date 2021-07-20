import React, { useState } from "react";
// import "../node_modules/gestalt/dist/gestalt.css"
import { Box, Button, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";
import Auth from '../../utils/auth';
import google from '../../assets/images/Google__G__Logo.svg'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

export default function Login(props) {

  const [userFormData, setUserFormData] = useState({ username: '', password: ''});



  const ModalWithHeading = ({
    onDismiss,
  }) => {

    return (
      <Modal
        accessibilityModalLabel="Login Credentials"
        heading="Login"
        onDismiss={onDismiss}
        footer={
          <Flex alignItems="center" justifyContent="end">
            <Button inline color="red" text="Login"/>
          </Flex>
        }
        size="sm"
      >
        <Box paddingX={8}>
          <Box marginBottom={8}>
            <TextField
              id="username"
              onChange={({ value }) => console.log(value)}
              placeholder='Username'
              label="Username"
              type="text"
            />
          </Box>
        </Box>

        <Box paddingX={8}>
          <Box marginBottom={8}>
            <TextField
              id="password"
              onChange={({ value }) => console.log(value)}
              placeholder='Password'
              label="Password"
              type="password"
            />
          </Box>
        </Box>


      </Modal>
    );
  };

  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <React.Fragment>
      <Button 
        inline
        className='login-button' 
        // color="red"
        size="lg" 
        text="Login"
        onClick={() => setShouldShow(true)}
        id="test1"
      />
      {shouldShow && (
        <Layer zIndex={modalZIndex}>
          <ModalWithHeading onDismiss={() => setShouldShow(false)} />
        </Layer>
      )}
    </React.Fragment>

  );
}