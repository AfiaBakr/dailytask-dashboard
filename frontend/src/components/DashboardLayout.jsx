import React from 'react';
import Sidebar from './Sidebar';
import { useAuthContext } from '../context/AuthContext';

export default function DashboardLayout({ children }) {
  const { loader, user } = useAuthContext();

  if (loader) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content — offset by sidebar width */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">

        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
          <div>
            <h1 className="text-base font-semibold text-slate-800">Dashboard</h1>
            <p className="text-xs text-slate-400 capitalize">{user?.role || 'user'} panel</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <button className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors" aria-label="Notifications">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            {/* Avatar */}
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}
