import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Task Management',
    desc: 'Create, assign, and track tasks with a clean drag-and-drop interface.',
    color: 'from-indigo-500/20 to-indigo-600/5',
    border: 'border-indigo-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Live Analytics',
    desc: 'Visualize progress with real-time charts and performance insights.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Role-Based Access',
    desc: 'Separate Admin and User dashboards with secure JWT authentication.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Collaboration',
    desc: 'Invite teammates, assign roles, and work together seamlessly.',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Smart Notifications',
    desc: 'Stay on top of deadlines with instant alerts and reminders.',
    color: 'from-rose-500/20 to-rose-600/5',
    border: 'border-rose-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Cloud Storage',
    desc: 'Upload and manage blog images via Cloudinary with zero hassle.',
    color: 'from-sky-500/20 to-sky-600/5',
    border: 'border-sky-500/20',
  },
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50K+', label: 'Tasks Completed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9★', label: 'User Rating' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-36 pb-24">
        {/* Glow blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          Daily Task — v1.0
        </div>

        {/* Headline */}
        <h1 className="relative text-5xl md:text-7xl font-black leading-[1.1] max-w-4xl mb-6 tracking-tight">
          The smarter way to{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              manage your tasks
            </span>
            {/* underline decoration */}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 10 Q150 2 298 10" stroke="url(#u)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="u" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#e879f9" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="relative text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          A powerful, role-based dashboard for you to organize daily tasks, track progress, and collaborate in real time.
        </p>

        {/* Single CTA — Login */}
        <Link
          to="/login"
          className="relative inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 text-base group"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Sign In to Dashboard
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <p className="text-slate-500 text-sm mt-4">
          No account?{' '}
          <Link to="/register" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
            Create one free
          </Link>
        </p>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white mb-1">{s.value}</p>
              <p className="text-slate-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">Everything you need</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Built for productivity</h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Every feature is designed to help you stay focused, organized, and in control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200`}
              >
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-center shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
          <h2 className="text-3xl font-black text-white mb-3">Ready to get started?</h2>
          <p className="text-indigo-200 mb-8 text-sm">Join thousands of students already using ClassTask.</p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In Now
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Daily Task Dashboard. Built by Afia Bakr.
      </footer>
    </div>
  );
};

export default Home;
