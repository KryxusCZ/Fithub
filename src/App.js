import './App.css'
import { Routes, Route,} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TrainingPlansPage from './pages/TrainingPlansPage';
import UsersPage from './pages/UsersPage';
import TrainingDetailPage from './pages/TrainingDetail';
import UserEdit from './pages/UserEditPage';
import AddTrainingPage from './pages/AddTrainingPage';
import TrainersPage from './pages/TrainersPage';
import ProtectedUserRoute from './protectedRoutes/ProtectedUserRoute';
import TrainerDetailPage from './pages/TrainerDetailPage';
import ProtectedAdminRoute from './protectedRoutes/ProtectedAdminRoute';
import 'bootstrap/dist/css/bootstrap.css';
import MealPlanner from './pages/MealPlanner';
import MealsPlansPage from './pages/MealsPlansPage';
import UserProfilePage from './pages/UserProfilePage';


function App() {

  return (
    <div className='App'>
    <Routes>
          <Route path='/login' element = {<LoginPage />}/>
      <Route element = {<ProtectedUserRoute/>}>
          <Route path='/dashboard' element = {<DashboardPage/>}/>
          <Route path='/training-plans' element = {<TrainingPlansPage/>}/>
          <Route path='/trainers' element = {<TrainersPage/>}/>
          <Route path='/training-detail/:id' element = {<TrainingDetailPage/>}/>
          <Route path='/user-detail/:id' element = {<UserEdit/>}/>
          <Route path='/user-profile' element = {<UserProfilePage/>}/>
          <Route path='/trainer-detail/:id' element = {<TrainerDetailPage/>}/>
          <Route path='/add-training' element = {<AddTrainingPage/>}/>
          <Route path='/meal-planner' element = {<MealPlanner/>}/>
          <Route path='/meal-planner/:id' element = {<MealPlanner/>}/>
          <Route path='/meal-plans' element = {<MealsPlansPage/>}/>
      </Route>
      <Route element = {<ProtectedAdminRoute/>}>
          <Route path='/users' element = {<UsersPage/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App
