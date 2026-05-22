import DashboardLayout from '../components/DashboardLayout';

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Analytics</h1>
          <p className="text-slate-400 text-sm mt-1">Charts, reports, and system insights</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
