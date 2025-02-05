import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import List from "../components/Table";
import Header from "../components/Header";
import Filters from "../components/Filters";
import TrainerCard from "../components/TrainerCard";
import { useState, useEffect } from "react";
const TrainersPage = () => {
   const [trainers, setTrainers] = useState([]);
   
   useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch('/data/users.json');
      const j_response = await response.json();
      const trainers = j_response.users.filter((trainer) => trainer.role === 'trenér');
      setTrainers(trainers);
    }

    fetchData();
      }, []);

  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={'Trénéři'} type={'Fitnes'}/>
    <div className="d-flex w-100 gap-4">
    {
        trainers.map(trainer => {
            return(
                <TrainerCard img={`../Images/${trainer.img}`} id={trainer.id} name={trainer.name} description={trainer.description}/>
            )
        })
    }
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default TrainersPage