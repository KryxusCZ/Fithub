import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Filters = ({ data, handeInput, handeSelect }) => {
  return (
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Hledat">
          <Form.Control
            type="text"
            placeholder="Hledat..."
            onChange={(e) => handeInput(e.target.value)}
          />
        </FloatingLabel>
      </Col>
      {data && data.length > 0 && (
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Vyberte možnost">
            <Form.Select
              aria-label="Floating label select example"
              onChange={(e) => handeSelect(e.target.value)}
            >
              <option>Vyberte</option>
              {data.map((item, index) => (
              <option key={index} value={item.id}>
                {item}
              </option>
            ))}
            </Form.Select>
          </FloatingLabel>
        </Col>
      )}
    </Row>
  );
};

export default Filters;