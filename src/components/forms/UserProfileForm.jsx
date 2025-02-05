import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const UserProfile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    height: user.height,
    weight: user.weight,
    age: user.age,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setShowModal(false);
    console.log('Updated user data:', formData);
  };

  useEffect(() => {
    if (user && user.img) {
      setImg(`/Images/${user.img}`);
    } else {
      setImg('/Images/default.jpg');
      console.log('test') ; // Ujisti se, že tato cesta je správná.
    }
  }, [user]);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Vytvoření cesty k souboru
      setImg(imageUrl); // Uložení cesty do stavu
    }
  };

  return (
    <div className="w-100">
      <Card className="p-4">
        <div className="d-flex align-items-center">
          <img
            src={img}
            alt="Profile"
            className="rounded-circle me-4"
            width="100"
            height="100"
          />
          <div>
            <h3>{formData.name}</h3>
            <p>{formData.email}</p>
          </div>
        </div>

        <div className="mt-3">
          <p><strong>Výška:</strong> {formData.height} cm</p>
          <p><strong>Váha:</strong> {formData.weight} kg</p>
          <p><strong>Věk:</strong> {formData.age} let</p>
        </div>

        <Button variant="primary"  onClick={() => setShowModal(true)}>
          Upravit profil
        </Button>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upravit profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Jméno</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Výška (cm)</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Váha (kg)</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Věk</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleFileChange}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Zavřít
          </Button>
          <Button variant="primary"  onClick={handleSave}>
            Uložit změny
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
