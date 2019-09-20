import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateProject = ({createProject, history}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const reset = () => {
    setTitle('');
    setContent('');
  }

  const handleSubmit = (e) => {
    const project = {title, content};
    e.preventDefault();
    createProject(project);
    reset();
    history.push('/');
  }

  return (
    <Form>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter your project title" onChange={(e) => setTitle(e.target.value)} value={title}/>
      </Form.Group>
      <Form.Group controlId="Form.ControlTextarea">
        <Form.Label>Project Content</Form.Label>
        <Form.Control as="textarea" rows="5" onChange={(e) => setContent(e.target.value)} value={content}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
  )
}

export default CreateProject;
