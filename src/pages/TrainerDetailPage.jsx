import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import ClickAccordion from "../components/Accordion"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/Table";
import ContactForm from "../components/forms/ContactForm";
import AlertBox from "../components/AlertBox";

const TrainerDetailPage = () => {
const { id } = useParams();
const [trainer, setTrainer] = useState(null);
const [plans, setPlans] = useState(null);
const [visible, setVisible] = useState(false);

useEffect(() => {
      const fetchData = async() =>{
      const response = await fetch('/data/users.json');
      const j_response = await response.json();
      const trainer = j_response.users.find((trainer) => trainer.id === parseInt(id));
      setTrainer(trainer);
      console.log(trainer);

      const response_plans = await fetch('/data/plans.json');
      const j_response_plans = await response_plans.json();
      const filteredPlans = j_response_plans.trainingPlans.filter((plan) => plan.trainerId === parseInt(id));
      setPlans(filteredPlans);
    }

    fetchData();
  }, [id]);

  const handleClick = (value) =>{
    setVisible(value);
  }

  const handleSubmit = (formdata) => {
    setPlans((prevPlans) => [...prevPlans, formdata]);
    setVisible(false);
  };

  if (!trainer) {
    return <p>Trenér nebyl nalezen!</p>;
  }

  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <AlertBox visible={visible} title={'Schůzka úspěšně sjednána'} description={'Vaše žádost o schůzku s trenérem byla úspěšně odeslána. Brzy vás bude kontaktovat s potvrzením termínu.'}/>
    <div className="d-flex w-100">
        <div className="flex flex-column gap-4 w-50 justify-content-start align-items-start">
        <Header title={trainer.name}/>
        <img src={`../Images/${trainer.img}`} alt="" />
        <p>{trainer.description}</p>
        </div>
        <div className="d-flex w-50 gap-4 flex-column">
        <h4>Sjednat schůzku</h4>
        <ContactForm handleClick={handleClick}/>
        </div>
    </div>
    <h4>Tréninkové plány</h4>
    <List data={plans} type={'plans'}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default TrainerDetailPage