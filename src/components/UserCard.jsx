import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
//import img from '../Images/trainer1.jpeg';

const UserCard = ({id, img, name, height, weight, age, plan_name})=> {
const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} className='w-25'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='d-flex gap-4' >
          <div>
          <span>{height}</span>
          </div>
          <div>
          <span>{weight}</span>
          </div>
          <div>
          <span>{age}</span>
          </div>
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/trainer-detail/${id}`)}>Zobrazit více</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;