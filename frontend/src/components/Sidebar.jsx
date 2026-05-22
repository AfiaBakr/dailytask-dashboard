import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import api from '../config/service';
import { useNavigate } from 'react-router-dom';

const adminItems = [
  { name: 'Overview', icon: '📊', path: '/dashboard' },
  { name: 'All Users', icon: '👥', path: '/users' },
  { name: 'Analytics', icon: '📈', path: '/analytics' },
  { name: 'About', icon: 'ℹ️', path: '/about' },
  { name: 'Settings', icon: '⚙️', path: '/admin-settings' },
];

const userItems = [
  { name: 'Overview', icon: '📊', path: '/dashboard' },
  { name: 'My Tasks', icon: '📋', path: '/tasks' },
  { name: 'My Profile', icon: '👤', path: '/profile' },
  { name: 'About', icon: 'ℹ️', path: '/about' },
  { name: 'Settings', icon: '⚙️', path: '/settings' },
];

export default function Sidebar() {
  const { loader, user, setUser } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.get('/api/v1/auth/logout');
      setUser(null);
      localStorage.removeItem('user');
      navigate('/login');
    } catch (err) {
      console.log('Logout error:', err);
    }
  };

  if (loader) return null;

  const items = user?.role === 'admin' ? adminItems : userItems;

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 h-screen flex flex-col fixed left-0 top-0 z-40 border-r border-slate-800">

      {/* Logo / Brand */}
      <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-800">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-xs font-black text-white shadow">DT</div>
        <span className="font-bold text-white tracking-tight">
          {user?.role === 'admin' ? 'Admin Panel' : 'My Dashboard'}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="px-3 pb-3">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <span className="text-base">🚪</span>
          Logout
        </button>
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-slate-800 flex items-center gap-3">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow">
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-white truncate">{user?.name || 'User'}</p>
          <p className="text-xs text-slate-400 capitalize">{user?.role || 'user'}</p>
        </div>
      </div>

    </aside>
  );
}
