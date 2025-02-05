import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUser } from '../context/UserContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Aside = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const logout = () => {
    Cookies.remove('user');
    navigate('/login');
  };

  return (
    <div className="bg-dark vh-100 p-3 text-white" style={{ width: '250px' }}>
      <ul className="nav flex-column list-group gap-4 cursor-pointer">
        <li
          className="nav-item text-white cursor-pointer d-flex align-items-center cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          <i className="bi bi-house-door me-2"></i> Domů
        </li>
        <li
          className="nav-item text-white cursor-pointer d-flex align-items-center"
          onClick={() => navigate('/training-plans')}
        >
          <i className="bi bi-clipboard-check me-2"></i> Tréninkové plány
        </li>
        <li
        className="nav-item text-white cursor-pointer d-flex align-items-center"
        onClick={() => navigate('/meal-plans')}
        >
        <i className="bi bi-egg-fried me-2"></i> Jídelníčky
      </li>
        <li
          className="nav-item text-white cursor-pointer d-flex align-items-center"
          onClick={() => navigate('/trainers')}
        >
          <i className="bi bi-person-lines-fill me-2"></i> Trenéři
        </li>
        {user.role === 'admin' && (
          <li
            className="nav-item text-white cursor-pointer d-flex align-items-center"
            onClick={() => navigate('/users')}
          >
            <i className="bi bi-person-circle me-2"></i> Uživatelé
          </li>
        )}
        <li
          className="nav-item text-white cursor-pointer d-flex align-items-center"
          onClick={() => logout()}
        >
          <i className="bi bi-box-arrow-right me-2"></i> Odhlásit se
        </li>
      </ul>
    </div>
  );
};

export default Aside;