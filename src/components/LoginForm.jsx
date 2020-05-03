import React from 'react';
import { Button, Form, Input, Label } from 'semantic-ui-react';

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Form onSubmit={submitFormHandler} id='login-form'>
      <Label style={{ padding: '12px', marginRight: '10px' }}>Email</Label>
      <Input style={{ padding: '14px', marginRight: '10px' }} 
      name='email' type='email' id='email'></Input>

      <Label style={{ padding: '12px', marginRight: '10px' }}>Password</Label>
      <Input style={{ padding: '14px', marginRight: '10px' }} 
      name="password" type="password" id="password"></Input>

      <Button id="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
