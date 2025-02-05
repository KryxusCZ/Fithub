import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({handleClick}) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
          subject,
          message,
          date,
        };
        console.log(formData);
    
        handleClick(true);
      };
    return (
        <Form className='w-100' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Téma debaty</Form.Label>
          <Form.Control type="text" placeholder="Napište předmět zprávy" onChange={(e)=>setSubject(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Zpráva pro trenéra</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>setMessage(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Datum schůzky</Form.Label>
          <Form.Control type="date" placeholder="Napište předmět zprávy" onChange={(e)=>setDate(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      );
    }

export default ContactForm