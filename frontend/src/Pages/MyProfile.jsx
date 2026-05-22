import DashboardLayout from '../components/DashboardLayout';

const MyProfile = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">My Profile</h1>
          <p className="text-slate-400 text-sm mt-1">View and update your personal information</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProfile;
