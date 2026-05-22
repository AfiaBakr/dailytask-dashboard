import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const statCards = [
  { label: 'Total Tasks', value: '24', icon: '📋', color: 'from-indigo-500 to-indigo-600', bg: 'shadow-indigo-500/20' },
  { label: 'Completed', value: '18', icon: '✅', color: 'from-emerald-500 to-emerald-600', bg: 'shadow-emerald-500/20' },
  { label: 'In Progress', value: '4', icon: '🔄', color: 'from-amber-500 to-amber-600', bg: 'shadow-amber-500/20' },
  { label: 'Pending', value: '2', icon: '⏳', color: 'from-rose-500 to-rose-600', bg: 'shadow-rose-500/20' },
];

const recentTasks = [
  { title: 'Create a Web App', status: 'Completed', date: 'May 20, 2026' },
  { title: 'Pick CNIC', status: 'Completed', date: 'May 19, 2026' },
  { title: 'Attend Webinar', status: 'In Progress', date: 'May 21, 2026' },
  { title: 'Calculate Monthly Expenditure', status: 'In Progress', date: 'May 22, 2026' },
  { title: 'Fill the Admission Form', status: 'Pending', date: 'May 23, 2026' },
];

const statusStyle = {
  Completed: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  'In Progress': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  Pending: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
};

const quickLinks = [
  { label: 'My Tasks', path: '/tasks', icon: '📋', desc: 'View and manage your tasks' },
  { label: 'My Profile', path: '/profile', icon: '👤', desc: 'Update your profile info' },
  { label: 'Settings', path: '/settings', icon: '⚙️', desc: 'Manage preferences' },
];

const UserOverView = () => {
  const { user } = useAuthContext();

  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-7 text-white shadow-xl shadow-indigo-500/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />
        <div className="relative">
          <p className="text-indigo-200 text-sm font-medium mb-1">Welcome back 👋</p>
          <h2 className="text-3xl font-black">{user?.name || 'User'}</h2>
          <p className="text-indigo-200 text-sm mt-1">
            Role: <span className="capitalize font-semibold text-white">{user?.role || 'user'}</span>
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => (
          <div
            key={card.label}
            className={`bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-xl shadow-lg ${card.bg}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800">{card.value}</p>
              <p className="text-slate-500 text-sm">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links + Recent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h3 className="font-bold text-slate-800 mb-4">Quick Access</h3>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="text-xl w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">{link.label}</p>
                  <p className="text-xs text-slate-400">{link.desc}</p>
                </div>
                <svg className="w-4 h-4 text-slate-300 ml-auto group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Recent Tasks</h3>
            <Link to="/tasks" className="text-xs text-indigo-500 hover:text-indigo-600 font-semibold transition-colors">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentTasks.map((task, i) => (
              <div key={i} className="px-6 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-slate-700">{task.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{task.date}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyle[task.status]}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserOverView;
