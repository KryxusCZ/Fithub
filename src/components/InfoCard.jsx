import Card from 'react-bootstrap/Card';

const InfoCard =({text, onClick})=> {
  return (
    <Card className='cursor-pointer' onClick={()=>onClick}> 
      <Card.Body>{text}</Card.Body>
    </Card>
  );
}

export default InfoCard;