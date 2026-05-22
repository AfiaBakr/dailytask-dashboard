import DashboardLayout from '../components/DashboardLayout';

const AdminSetting = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Settings</h1>
          <p className="text-slate-400 text-sm mt-1">System configuration and admin preferences</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminSetting;
