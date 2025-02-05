import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useUser } from '../context/UserContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-dark shadow-lg py-3 px-2 border-bottom border-secondary w-100">
      <Container fluid>
        <Navbar.Brand href="" className="text-white fw-bold fs-3" onClick={()=>navigate('/dashboard')}>FitHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link className="text-white fw-semibold" onClick={()=>navigate('/user-profile')}>Profil</Nav.Link>
          </Nav>
          <Navbar.Text className="text-white ms-4">
            Přihlášen jako: <span className="fw-bold text-info">{user.email}</span>
          </Navbar.Text>
          <Button variant="outline-light" className="ms-3">Odhlásit se</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;