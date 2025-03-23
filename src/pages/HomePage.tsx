import { useTitle } from '../hooks/useTitle';
import { useSelector } from 'react-redux';
import { SD_Role } from '../utils/SD';
import OperatorHomePage from '../components/homePage/OperatorHomePage';
import UserHomePage from '../components/homePage/UserHomePage';
import AdminHomePage from '../components/homePage/AdminHomePage';

const HomePage = () => {
  useTitle('Home');
  const { user } = useSelector((state: any) => state.auth);
  const renderRoleBasedContent = () => {
    switch (user?.role) {
      case SD_Role.ADMIN:
        return <AdminHomePage />;
      case SD_Role.OPERATOR:
        return <OperatorHomePage />;
      case SD_Role.USER:
        return <UserHomePage />;
      default:
        return <div>Loading...</div>;
    }
  };

  return <div className="space-y-6">{renderRoleBasedContent()}</div>;
};

export default HomePage;
