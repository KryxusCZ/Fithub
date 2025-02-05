import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import ClickAccordion from "../components/Accordion"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTrainingForm from "../components/forms/AddTrainingForm";

const AddTrainingPage = () => {
const { id } = useParams();
const [user, setUser] = useState(null);

useEffect(() => {
  }, [id]);


  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={'Přidat plán'}/>
    <AddTrainingForm/>
    </div>
    </div>
    </div>
    </>
  )
}

export default AddTrainingPage