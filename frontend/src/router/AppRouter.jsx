import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import About from '../Pages/About';

// Overviews
import UserOverView from '../Pages/UserOverView';
import AdminOverView from '../Pages/AdminOverView';

// User pages
import MyTask from '../Pages/MyTask';
import MyProfile from '../Pages/MyProfile';
import Setting from '../Pages/Setting';

// Admin pages
import AllUser from '../Pages/AllUser';
import Analytics from '../Pages/Analytics';
import AdminSetting from '../Pages/AdminSetting';

import DashboardLayout from '../components/DashboardLayout';

// Renders the correct overview based on logged-in role
// const OverViewRouter = () => {
//   const { user, loader } = useAuthContext();
//   if (loader) return null;
//   return user?.role === 'admin' ? <AdminOverView /> : <UserOverView />;
// };
const OverViewRouter = () => {
  const { user, loader } = useAuthContext();

  if (loader) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <h1>No User Found</h1>;
  }

  if (user.role === "admin") {
    return <AdminOverView />;
  }

  return <UserOverView />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* About — handles its own layout based on auth state */}
        <Route path="/about" element={<About />} />

        {/* Dashboard overview — role-aware */}
        <Route path="/dashboard" element={<DashboardLayout><OverViewRouter /></DashboardLayout>} />

        {/* User pages */}
        <Route path="/tasks" element={<MyTask />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/settings" element={<Setting />} />

        {/* Admin pages */}
        <Route path="/users" element={<AllUser />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin-settings" element={<AdminSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
