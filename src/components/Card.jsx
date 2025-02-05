import Card from 'react-bootstrap/Card';

const InfoCard = ({header, name, onClick})=> {
  return (
    <Card border="secondary" style={{ width: '20rem' }} bg='dark' text='white' onClick={onClick}>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
  );
}

export default InfoCard;