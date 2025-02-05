import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useUser } from "../context/UserContext";
import UserProfile from "../components/forms/UserProfileForm";

const UserProfilePage = () => {
const { user } = useUser();
const [findedUser, setFindedUser] = useState(null);

useEffect(() => {
  const fetchData = async() =>{
    const response = await fetch('/data/users.json');
    const j_response = await response.json();
    const finded_user = j_response.users.find((u) => u.id === user.id);
    setFindedUser(finded_user);
  }

  fetchData();
  }, [user]);

  if (!findedUser) {
    return <p>Uživatel nebyl nalezen!</p>;
  }

  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={'Váš profil'}/>
    <UserProfile user={findedUser}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default UserProfilePage