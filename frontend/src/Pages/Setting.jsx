import DashboardLayout from '../components/DashboardLayout';

const Setting = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Settings</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your account preferences</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Setting;
