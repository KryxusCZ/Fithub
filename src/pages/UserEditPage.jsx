import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import ClickAccordion from "../components/Accordion"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import UserForm from "../components/forms/UserForm";

const UserEdit = () => {
const { id } = useParams();
const [user, setUser] = useState(null);

useEffect(() => {
  const fetchData = async() =>{
    const response = await fetch('/data/users.json');
    const j_response = await response.json();
    const user = j_response.users.find((user) => user.id === parseInt(id));
    setUser(user);
  }

  fetchData();
  }, [id]);

  if (!user) {
    return <p>Uživatel nebyl nalezen!</p>;
  }

  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={user.name}/>
    <UserForm data={user}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default UserEdit