import React, { useState } from "react";
import { Text, Box, Button, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, TextField } from "gestalt";
import Auth from '../../utils/auth';
import { validateEmail } from '../../utils/helpers';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

export default function Login(props) {

  // const [userFormData, setUserFormData] = useState({ username: '', password: ''});
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  // const [ formState, setFormState ] = useState( {username: '', password: ''});
  // const { username, email, password } = formState;

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  // function handleChange(e) {
  //   // e.event.preventDefault();
  //   console.log(e);
  //   console.log('target', e.event.target.id);
  //   console.log('value', e.value);

  //   if (e.event.target.id === 'email') {
  //     const isValid = validateEmail(e.value);

  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.value.length) {
  //       setErrorMessage(`${e.event.target.id} is required`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }

  //   if (!errorMessage) {
  //     setFormState( {...formState, [e.event.target.id]: e.value });
  //   }

  // }

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log(e.nativeEvent.target.username.value);
    // console.log(e.nativeEvent.target.password.value);
    // console.log(e.nativeEvent.target.username.id);
    // console.log(e.nativeEvent.target.password.id);

    let usernameValue = e.nativeEvent.target.username.value
    let passwordValue = e.nativeEvent.target.password.value


    // add some validation
    if ('1' === 'email') { // not using this part for login. '1' substituted
      const isValid = validateEmail(e.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
        return;
      }
    } else if (!usernameValue) {
        setErrorMessage(`Username is required`);
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
        const { data } = await loginUser({
          variables: { username: usernameValue, password: passwordValue }
        });
        
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
        setErrorMessage('Invalid Credentials');
      }

    } 
    
  }


  const ModalWithHeading = ({
    onDismiss,
  }) => {

    return (
      <form onSubmit={handleSubmit}>
        <Modal
          accessibilityModalLabel="Login Credentials"
          heading="Login"
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
                  inline color="red" text="Login"
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

                // id="username"
                // onChange={({ value }) => setFormState( {...formState, username: value })}
                // placeholder='Username'
                // label="Username"
                // // defaultValue={username}
                // value={username}
                // type="text"
                // onBlur={handleChange}
              />
            </Box>
          </Box>

          <Box paddingX={8}>
            <Box marginBottom={3}>
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