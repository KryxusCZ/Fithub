import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useUser } from '../context/UserContext';

const Header = ({title, type, onClick, name}) => {
    const { user } = useUser();
    return (
    <div className='w-100 d-flex justify-content-between'>
    <h3>
        {title} <Badge bg="secondary">{type}</Badge>
    </h3>
    {name && (user.role === 'trenér' || user.role === 'admin') && (
        <Button variant="dark" onClick={onClick}>{name}</Button>
    )}
    </div>
    );
}

export default Header;