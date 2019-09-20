import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Oh snap! You got an login error!</Alert.Heading>
      <p>
        Please login again.
      </p>
    </Alert>
  );
}

