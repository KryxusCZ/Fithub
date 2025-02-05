import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import List from "../components/Table";
import Header from "../components/Header";
import Filters from "../components/Filters";
import AddTrainingForm from "../components/forms/AddTrainingForm";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const MealsPlansPage = () => {
  const [query, setQuery] = useState('');
  const [mealPlans, setMealPlans] = useState([]);  // Opravený název
  const [filteredPlans, setFilteredPlans] = useState([]);  // Filtrované plány
  const [visible, setVisible] = useState(false);
  const {user} = useUser();
  const navigate = useNavigate();

  const handleInput = (value) => {
    setQuery(value);
  };

  const handleSubmit = (formData) => {
    setMealPlans((prevPlans) => [...prevPlans, formData]);
    setVisible(false);
  };

  // Načti data pouze jednou
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/meal_plans.json');
        if (!response.ok) throw new Error(`Chyba: ${response.status}`);
        const data = await response.json();
        const finded_plans = data.mealPlans.filter(p => p.user === user.id);
        if(user.role === 'admin'){
          setMealPlans(data.mealPlans);
          setFilteredPlans(data.mealPlans);
        }
        else{
          setMealPlans(finded_plans);
          setFilteredPlans(finded_plans); 
        } 
      } catch (error) {
        console.error('Chyba při načítání:', error);
      }
    };

    fetchData();
  }, []);

  // Filtrování lokálně při změně `query`
  useEffect(() => {
    const filtered = mealPlans.filter((plan) =>
      plan.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlans(filtered);
  }, [query, mealPlans]);

  return (
    <div className="page flex">
      <Navigation />
      <div className="page-container flex">
        <Aside />
        <div className="content flex">
          <Header
            title="Jídelníčky"
            type="Strava"
            name="Přidat jídelníček"
            onClick={() => navigate('/meal-planner')}
          />
          <Filters  handeInput={handleInput} />
          <List data={filteredPlans} type="meal_plans" />
        </div>
      </div>
    </div>
  );
};

export default MealsPlansPage;