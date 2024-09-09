import { logout } from '../api';
import { useNavigate } from 'react-router-dom';
const AccountPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default AccountPage;