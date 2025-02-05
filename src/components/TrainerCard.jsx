import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
//import img from '../Images/trainer1.jpeg';

const TrainerCard = ({id, img, name, description})=> {
const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/trainer-detail/${id}`)}>Zobrazit více</Button>
      </Card.Body>
    </Card>
  );
}

export default TrainerCard;