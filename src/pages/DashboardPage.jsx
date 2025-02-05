import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import InfoCard from "../components/Card";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import MealPlanCard from "../components/MealCard";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <div className="page flex">
      <Navigation />
      <div className="page-container flex">
        <Aside />
        <div className="content flex flex-column gap-4">
          <Header title={"Vítejte v aplikaci FitHub"} type={"Vítejte"} />

          <div className="d-flex gap-4 flex-wrap">
            <InfoCard name={"Trenéři"} description={"Přehled všech trenérů"} header={"Fitko"} onClick={()=>navigate('/trainers')}/>
            <InfoCard name={"Tréninkové plány"} description={"Přehled všech plánů"} header={"Fitko"} onClick={()=>navigate('/training-plans')}/>
            {(user.role === 'admin' || user.role === 'trenér') && (<InfoCard name={"Přidat tréninkový plán"} description={"Přidat plán"} header={"Fitko"} onClick={()=>navigate('/add-training')}/>)}
            {(user.role === 'admin') &&(<InfoCard name={"Uživatelé"} description={"Přehled všech uživatelů"} header={"Komunita"} onClick={()=>navigate('/users')}/>)}
            <InfoCard name={"Jídleníčky"} description={"Sledujte svůj pokrok"} header={"Strava"} onClick={()=>navigate('/meal-plans')}/>
            {(user.role === 'admin' || user.role === 'trenér') &&(<InfoCard name={"Přidat jídleníček"} description={"Přidání dalšího jídelníčku"} header={"Strava"} onClick={()=>navigate('/meal-planner')}/>)}
            <InfoCard name={"Profil"} description={"Informace o Vás"} header={"Strava"} onClick={()=>navigate('/user-profile')}/>
            <InfoCard name={"Statistiky"} description={"Sledujte svůj pokrok"} header={"Analýzy"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
