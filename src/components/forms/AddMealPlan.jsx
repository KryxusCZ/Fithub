import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MealForm = ({ handleClick, data }) => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [recipient, setRecipient] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      const allMeals = data.flatMap(plan => plan.meals);
      setMeals(allMeals);

      const user = data.flatMap(plan => plan.user);
      if (user) {
        setRecipient(user);
      }
    }
  }, [data]);

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (mealName && mealDescription && recipient) {
      setMeals([...meals, { name: mealName, description: mealDescription, recipient }]);
      setMealName("");
      setMealDescription("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/users.json');
      const j_response = await response.json();
      setUsers(j_response.users);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-6 p-4 rounded shadow bg-white w-100">
      <h2 className="mb-4 text-center text-primary">📋 Přidat jídelníček</h2>
      <form onSubmit={handleAddMeal} className="mb-4">
        <div className="mb-3">
          <label htmlFor="recipient" className="form-label fw-bold">Vyberte sportovce:</label>
          <select
            className="form-select"
            id="recipient"
            value={recipient || ""} // Předvyplněný vybraný uživatel
            onChange={(e) => setRecipient(parseInt(e.target.value))}
            required
          >
            <option value="">Vyberte sportovce...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="mealName" className="form-label fw-bold">Název jídla:</label>
          <input
            type="text"
            className="form-control"
            id="mealName"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Zadejte název jídla"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mealDescription" className="form-label fw-bold">Popis jídla:</label>
          <textarea
            className="form-control"
            id="mealDescription"
            rows="3"
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder="Zadejte popis jídla"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100">✅ Přidat jídlo</button>
      </form>

      <h3 className="mb-3 text-center text-secondary">🍽️ Seznam jídelníčků</h3>
      {meals.length > 0 ? (
        <ul className="list-group">
          {meals.map((meal, index) => (
            <li key={index} className="list-group-item shadow-sm mb-2 rounded">
              <h5 className="text-primary">{meal.name}</h5>
              <p>{meal.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted">Žádné jídlo zatím nebylo přidáno.</p>
      )}
    </div>
  );
};

export default MealForm;