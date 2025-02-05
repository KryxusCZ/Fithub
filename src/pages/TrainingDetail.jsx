import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import ClickAccordion from "../components/Accordion"
import InfoCard from "../components/InfoCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const TrainingDetailPage = () => {
const { id } = useParams();
const [trainingPlan, setTrainingPlan] = useState(null);

useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch('/data/plans.json');
      const j_response = await response.json();
      const plan = j_response.trainingPlans.find((plan) => plan.id === parseInt(id));
      setTrainingPlan(plan);
    }

    fetchData();
  }, [id]);

  if (!trainingPlan) {
    return <p>Tréninkový plán nenalezen!</p>;
  }

  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={trainingPlan.name}/>
    <p>{trainingPlan.description}</p>
    <ClickAccordion data={trainingPlan}/>
    <div className="w-50 d-flex flex-column gap-2">
    <h4>Typy a rady k tomuto plánu</h4>
    {
  trainingPlan.tips.map((tip, index) => (
    <InfoCard key={index} text={tip} />
  ))
}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default TrainingDetailPage