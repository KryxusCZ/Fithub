import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const  AlertBox =({visible, title, description})=> {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {description}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Zavřít
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default AlertBox;