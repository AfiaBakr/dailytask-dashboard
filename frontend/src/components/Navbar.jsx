import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import api from '../config/service';

const Navbar = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.get('/api/v1/auth/logout');
      setUser(null);
      localStorage.removeItem('user');
      navigate('/');
    } catch (err) {
      console.log('Logout error:', err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
            <span className="text-white text-xs font-black">DT</span>
          </div>
          <span className="text-white font-bold text-base tracking-tight">Daily Task</span>
        </Link>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            /* ── Logged-in state ── */
            <div className="flex items-center gap-3">
              {/* Avatar + name */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
                <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  {user.name?.charAt(0)?.toUpperCase()}
                </div>
                <span className="text-slate-300 text-sm font-medium">{user.name}</span>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full capitalize">
                  {user.role}
                </span>
              </div>
              {/* Dashboard link */}
              <Link
                to="/dashboard"
                className="text-slate-400 hover:text-white text-sm transition-colors px-3 py-1.5"
              >
                Dashboard
              </Link>
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-sm px-4 py-1.5 rounded-xl transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          ) : (
            /* ── Guest state — Home + About + Login button ── */
            <div className="flex items-center gap-4">
              <Link
                to="/home"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-px"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1224] border-t border-white/[0.06] px-5 py-4 space-y-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 py-1">
                <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  {user.name?.charAt(0)?.toUpperCase()}
                </div>
                <span className="text-slate-300 text-sm">{user.name}</span>
                <span className="text-xs text-indigo-400 capitalize">({user.role})</span>
              </div>
              <Link to="/dashboard" className="block text-slate-300 hover:text-white text-sm py-1" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <button onClick={handleLogout} className="block text-red-400 text-sm py-1">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/home"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 text-indigo-400 font-semibold text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
