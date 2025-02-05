import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Header from "../components/Header";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import MealForm from "../components/forms/AddMealPlan";
import { useParams } from "react-router-dom";

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/meal_plans.json');
      const j_response = await response.json();
      const plan = j_response.mealPlans.find((plan) => plan.id === parseInt(id));
      if (plan) {
        setMeals([plan]);
      } else {
        setMeals([]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="page flex">
      <Navigation />
      <div className="page-container flex">
        <Aside />
        <div className="content flex">
          <Header
            title="Přidat jídelníček"
            type="Strava"
            name="Přidat jídelníček"
            onClick={() => navigate('/meal-planner')}
          />
          <MealForm data={meals}/>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;