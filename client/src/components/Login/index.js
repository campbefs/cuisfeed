// see SignupForm.js for comments
import React, { useState } from 'react';
import { Button, Form, Segment } from "semantic-ui-react";
import './login.css'

// import { loginUser } from '../utils/API';
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';


const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  //code brought in after
  const[loginUser, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData}
      });

      Auth.login(data.login.token)

    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='loginForm' >
    <Segment compact padded>
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <h1>Welcome Back!</h1>
        <Form.Field>
          <label>Email</label>
          <input 
          type='email'
          placeholder='Your email address'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input 
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required
          />
        </Form.Field>
        <Button disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
        >Submit</Button>
      </Form>
    </Segment>
    </div>
  );
}

export default Login;