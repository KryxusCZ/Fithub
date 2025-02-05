import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const LoginFunction = async(e) => {
        e.preventDefault();
        const response = await fetch('/data/users.json');
        const j_response = await response.json();
        const user = j_response.users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            Cookies.set('user', JSON.stringify({ id: user.id, email: user.email, role: user.role }), {
                expires: 7,
            });
            navigate('/dashboard');
        } else {
            alert('Zadali jste špatné heslo nebo email');
        }
    };

    return (
        <div className="d-flex w-50 justify-content-center align-items-center vh-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #6a11cb, #2575fc)' }}>
            <Form className='w-75 bg-white p-5 rounded-4 shadow-lg d-flex flex-column gap-4 align-items-start justify-content-center'>
                <h2 className='text-dark text-center w-100'>Přihlásit se</h2>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Emailová adresa</Form.Label>
                    <Form.Control type="email" placeholder="Zadejte email" onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-3" />
                </Form.Group>

                <Form.Group className="mb-4 w-100" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>Heslo</Form.Label>
                    <Form.Control type="password" placeholder="Zadejte heslo" onChange={(e) => setPassword(e.target.value)} className="p-3 rounded-3" />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100 py-3 rounded-3 fw-bold' onClick={LoginFunction}>
                    Přihlásit se
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;