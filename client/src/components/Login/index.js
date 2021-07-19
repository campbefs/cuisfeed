import React from "react";
// import "../node_modules/gestalt/dist/gestalt.css"
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";

export default function Login(props) {

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
        color="red" 
        size="lg" 
        text="Login"
        onClick={() => setShouldShow(true)}
      />
      {/* <Button
        inline
        text="View Modal"
        onClick={() => setShouldShow(true)}
      /> */}
      {shouldShow && (
        <Layer zIndex={modalZIndex}>
          <ModalWithHeading onDismiss={() => setShouldShow(false)} />
        </Layer>
      )}
    </React.Fragment>

  );
}