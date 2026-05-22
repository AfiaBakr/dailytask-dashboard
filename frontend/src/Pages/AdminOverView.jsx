import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const statCards = [
  { label: 'Total Users', value: '128', icon: '👥', color: 'from-indigo-500 to-indigo-600', shadow: 'shadow-indigo-500/20' },
  { label: 'Total Blogs', value: '47', icon: '📝', color: 'from-purple-500 to-purple-600', shadow: 'shadow-purple-500/20' },
  { label: 'Active Today', value: '32', icon: '🟢', color: 'from-emerald-500 to-emerald-600', shadow: 'shadow-emerald-500/20' },
  { label: 'Pending Tasks', value: '9', icon: '⏳', color: 'from-rose-500 to-rose-600', shadow: 'shadow-rose-500/20' },
];

const recentUsers = [
  { name: 'Afia Bakr', email: 'afia@example.com', role: 'admin', joined: 'May 22, 2026' },
  { name: 'Hira Iqram', email: 'hira@example.com', role: 'user', joined: 'May 21, 2026' },
  { name: 'Sara Khan', email: 'sara@example.com', role: 'user', joined: 'May 20, 2026' },
  { name: 'Ali Raza', email: 'ali@example.com', role: 'user', joined: 'May 19, 2026' },
  { name: 'Zara Ahmed', email: 'zara@example.com', role: 'user', joined: 'May 18, 2026' },
];

const quickLinks = [
  { label: 'All Users', path: '/users', icon: '👥', desc: 'Manage registered users' },
  { label: 'Analytics', path: '/analytics', icon: '📈', desc: 'View charts & reports' },
  { label: 'Settings', path: '/admin-settings', icon: '⚙️', desc: 'System configuration' },
];

const AdminOverView = () => {
  const { user } = useAuthContext();

  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-7 text-white shadow-xl shadow-purple-500/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-white/20 border border-white/30 px-2.5 py-0.5 rounded-full font-bold tracking-wide uppercase">
              🛡️ Admin
            </span>
          </div>
          <h2 className="text-3xl font-black mt-2">{user?.name || 'Admin'}</h2>
          <p className="text-purple-200 text-sm mt-1">Full system access — manage users, content, and analytics.</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-xl shadow-lg ${card.shadow}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800">{card.value}</p>
              <p className="text-slate-500 text-sm">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links + Recent Users */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h3 className="font-bold text-slate-800 mb-4">Admin Actions</h3>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="text-xl w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-purple-600 transition-colors">{link.label}</p>
                  <p className="text-xs text-slate-400">{link.desc}</p>
                </div>
                <svg className="w-4 h-4 text-slate-300 ml-auto group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Users */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Recent Users</h3>
            <Link to="/users" className="text-xs text-purple-500 hover:text-purple-600 font-semibold transition-colors">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentUsers.map((u, i) => (
              <div key={i} className="px-6 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-sm">
                    {u.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">{u.name}</p>
                    <p className="text-xs text-slate-400">{u.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${
                    u.role === 'admin'
                      ? 'bg-purple-500/10 text-purple-600 border-purple-500/20'
                      : 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
                  }`}>
                    {u.role === 'admin' ? '🛡️ Admin' : '👤 User'}
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:block">{u.joined}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminOverView;
