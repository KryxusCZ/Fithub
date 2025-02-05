import Accordion from 'react-bootstrap/Accordion';

const ClickAccordion =({data})=> {
  return (
    <Accordion className='w-50'>
    {
       data.days.map((item, index) => {
        return(
        <Accordion.Item eventKey={index + 1}>
        <Accordion.Header>{item.day}</Accordion.Header>
        <Accordion.Body>
          {item.description}
          <div className='d-flex flex-column gap-2'>
          {item.exercises.map((exercise, index) => (
          <span key={index}>{(index+1)+'. ' + exercise}</span>
          ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
        )
       })
    }
    </Accordion>
  );
}

export default ClickAccordion;