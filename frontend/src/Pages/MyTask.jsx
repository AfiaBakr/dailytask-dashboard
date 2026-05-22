import DashboardLayout from '../components/DashboardLayout';

const MyTask = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">My Tasks</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and track all your tasks</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyTask;
