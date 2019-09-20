import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const SignUp = ({ signUp, auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
    setNickname('');
  }

  const handleSubmit = (e) => {
    const newUser = { email, password, nickname };
    e.preventDefault();
    signUp(newUser);
    reset();
  }

  if(auth.uid) return <Redirect to="/"/>

  return (
    <Form>
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
      <Form.Group controlId="formBasicNickname">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Nickname" onChange={(e) => setNickname(e.target.value)} value={nickname}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default SignUp;
