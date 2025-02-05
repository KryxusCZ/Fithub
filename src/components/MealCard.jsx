import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MealPlanCard = ({ title, description }) => {
  return (
    <Card className="shadow-sm rounded-4 p-3 bg-light border-0" style={{ width: "82%" }}>
      <Card.Body>
        <Card.Title className="fw-bold fs-4 text-primary">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Button variant="outline-primary" className="w-100">Zobrazit detail</Button>
      </Card.Body>
    </Card>
  );
};

export default MealPlanCard;