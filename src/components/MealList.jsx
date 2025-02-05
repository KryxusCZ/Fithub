import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MealList = ({ meals }) => {
  return (
    <div className="container mt-5 p-4 rounded shadow bg-light">
      <h2 className="mb-4 text-center text-primary">🍽️ Všechny jídelníčky</h2>
      {meals.length > 0 ? (
        <div className="row">
          {meals.map((meal, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">{meal.name}</h5>
                  <p className="card-text">{meal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">Žádné jídelníčky zatím nebyly přidány.</p>
      )}
    </div>
  );
};

export default MealList;