import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Form, Segment } from "semantic-ui-react";
import '../Login/login.css'
// import { createUser } from '../utils/API';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations'


const SignUp = () => {


  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  
  const[addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    
        // use try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...userFormData}
        });
        console.log(data);

        Auth.login(data.addUser.token)
  
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
        {/* show alert if server response is bad */}
        <h1>Become a Cuisfeed member today!</h1>
        <Form.Field>
          <label>Username</label>
          <input 
          type='text'
          placeholder='Your username'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username}
          required
          />
        </Form.Field>
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

        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        <Button>Already a member? Login here. </Button>
      </Form>
    </Segment>
    </div>
  );
}

export default SignUp;
