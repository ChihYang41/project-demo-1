import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AlertDismissible from '../utils/AlertDismissible';
import { Redirect } from 'react-router-dom';

const LogIn = ({authError, logIn, auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    const credentials = {email, password};
    e.preventDefault();
    logIn(credentials);
    reset();
  }

  if(auth.uid) return <Redirect to="/" />

  return (
    <Form>
      { authError && <AlertDismissible> login failed </AlertDismissible>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>

    </Form>
  )
}

export default LogIn;
