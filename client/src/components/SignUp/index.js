import React, { useState } from "react";
// import "../node_modules/gestalt/dist/gestalt.css"
import { Text, Box, Button, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";
import Auth from '../../utils/auth';
import { validateEmail } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

export default function SignUp(props) {

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const [ formState, setFormState ] = useState( {username: '', email: '', password: ''});
  const { username, email, password } = formState;

  const [addUser, { error }] = useMutation(ADD_USER);

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log(e.nativeEvent.target.username.value);
    // console.log(e.nativeEvent.target.password.value);
    // console.log(e.nativeEvent.target.username.id);
    // console.log(e.nativeEvent.target.password.id);

    let usernameValue = e.nativeEvent.target.username.value;
    let passwordValue = e.nativeEvent.target.password.value;
    let emailValue = e.nativeEvent.target.email.value;

    console.log('email', emailValue);

    // add some validation
    if ('1' === 'email') { // email validation is built into gestalt
      const isValid = validateEmail(e.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
        return;
      }
    } else if (!usernameValue) {
        setErrorMessage(`Username is required`);
        return;
    } else if (!emailValue) {
        setErrorMessage(`Email is required`);
        return;
    } else if (!passwordValue) { 
      setErrorMessage(`Password is required`);
      return;
    } else {
        setErrorMessage('');
    }

    if (!errorMessage) {
      // setFormState( {...formState, username: e.nativeEvent.target.username.value });
      // setFormState( {...formState, password: e.nativeEvent.target.password.value });

      try {
        const { data } = await addUser({
          variables: { username: usernameValue, email: emailValue, password: passwordValue }
        });
        
        Auth.login(data.addUser.token);
      } catch (err) {
        console.error(err);
        setErrorMessage('Username/email already exists...');
      }

    }
    
  }


  const ModalWithHeading = ({
    onDismiss,
  }) => {

    return (
      <form onSubmit={handleSubmit}>
        <Modal
          accessibilityModalLabel="Sign Up Form"
          heading="Sign Up"
          onDismiss={onDismiss}
          footer={
            <>
              {errorMessage && (
                <div>
                  {/* <p className="error-text">{errorMessage}</p> */}
                  <div style={{marginLeft: "8px"}}><Text color="red" align="start">{errorMessage}</Text></div>
                  
                </div>
              )}
              <Flex alignItems="center" justifyContent="end">
                <Button 
                  inline color="red" text="Sign Up"
                  type="submit"
                />
              </Flex>
            </>

          }
          size="sm"
        >
          <Box paddingX={8}>
            <Box marginBottom={5}>
              <TextField
                id="username"
                // onChange={({ value }) => {
                //   setValue(value);
                // }}
                onChange={({ value }) => null}
                placeholder="Add Username"
                label="Username"
                // value={value}
                type="text"
                autoComplete="username"
              />
            </Box>
          </Box>

          <Box paddingX={8}>
            <Box marginBottom={5}>
              <TextField
                id="email"
                onChange={({ value }) => null}
                placeholder='Email'
                label="Email"
                type="email"
                // onBlur={handleChange}
              />
            </Box>
          </Box>

          <Box paddingX={8}>
            <Box marginBottom={1}>
              <TextField
                id="password"
                onChange={({ value }) => null}
                placeholder='Password'
                label="Password"
                type="password"
                // onBlur={handleChange}
              />
            </Box>
          </Box>
          

        </Modal>
      </form>
    );
  };

  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <React.Fragment>
      <Button
        inline
        className='signup-button' 
        color="blue"
        size="lg" 
        text="Sign Up"
        onClick={() => setShouldShow(true)}
      />
      {shouldShow && (
        <Layer zIndex={modalZIndex}>
          <ModalWithHeading onDismiss={() => setShouldShow(false)} />
        </Layer>
      )}
    </React.Fragment>

  );
}