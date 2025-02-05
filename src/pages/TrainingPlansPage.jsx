import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import List from "../components/Table";
import Header from "../components/Header";
import Filters from "../components/Filters";
import AddTrainingForm from "../components/forms/AddTrainingForm";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const TrainingPlansPage = () => {
  const [query, setQuery] = useState('');
  const [trainingPlans, setTrainingPlans] = useState([]);  // Opravený název
  const [filteredPlans, setFilteredPlans] = useState([]);  // Filtrované plány
  const [visible, setVisible] = useState(false);
  const {user} = useUser();

  const handleInput = (value) => {
    setQuery(value);
  };

  const handleSubmit = (formData) => {
    setTrainingPlans((prevPlans) => [...prevPlans, formData]);
    setVisible(false);
  };

  // Načti data pouze jednou
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/plans.json');
        if (!response.ok) throw new Error(`Chyba: ${response.status}`);
        const data = await response.json();
        const finded_plans = data.trainingPlans.filter(p => p.user === user.id);
        if(user.role === 'admin'){
          setTrainingPlans(data.trainingPlans);
          setFilteredPlans(data.trainingPlans);
        }
        else{
          setTrainingPlans(finded_plans);
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
    const filtered = trainingPlans.filter((plan) =>
      plan.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlans(filtered);
  }, [query, trainingPlans]);

  return (
    <div className="page flex">
      <Navigation />
      <div className="page-container flex">
        <Aside />
        <div className="content flex">
          <Header
            title="Tréninkové plány"
            type="Fitnes"
            name="Přidat tréninkový plán"
            onClick={() => setVisible(true)}
          />
          {visible && <AddTrainingForm handleSubmitData={handleSubmit} />}
          {!visible && <Filters  handeInput={handleInput} />}
          {!visible && <List data={filteredPlans} type="plans" />}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlansPage;