import React from "react";
// import "../node_modules/gestalt/dist/gestalt.css"
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";

export default function SignUp(props) {

  const ModalWithHeading = ({
    onDismiss,
  }) => {

    return (
      <Modal
        accessibilityModalLabel="Sign Up"
        heading="Sign Up"
        onDismiss={onDismiss}
        footer={
          <Flex alignItems="center" justifyContent="end">
            <Button inline color="red" text="Sign Up"/>
          </Flex>
        }
        size="sm"
      >
        <Box paddingX={8}>
          <Box marginBottom={8}>
            <TextField
              id="name"
              onChange={({ value }) => console.log(value)}
              placeholder='Like "Places to go" or "Recipes to Make"'
              label="Name"
              type="text"
            />
          </Box>
          <Checkbox
            checked={false}
            id="secret"
            label="Keep this board secret"
            subtext="So only you and collaborators can see it."
            name="languages"
            onChange={({ checked }) => {
              console.log(checked);
            }}
          />
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
        color="blue" 
        size="lg" 
        text="Sign Up"
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