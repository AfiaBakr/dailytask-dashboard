import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import DashboardLayout from "../components/DashboardLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "Task Management",
    desc: "Efficiently create, assign, and manage tasks with priority levels, deadlines, and real-time status updates to stay organized and productive.",
    color: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-100",
    badge: "Core",
    badgeColor: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Role-Based Access",
    desc: "Secure role-based system that provides separate dashboards for Admins and Users, ensuring controlled access and personalized experience.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    badge: "Security",
    badgeColor: "bg-purple-100 text-purple-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Live Analytics",
    desc: "Track performance with real-time analytics including task completion rates, user activity insights, and system-level monitoring.",
    color: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100",
    badge: "Insights",
    badgeColor: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-amber-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "User Management",
    desc: 'Admins can manage users efficiently by viewing profiles, assigning roles, controlling access, and monitoring activity across the platform.',
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
    badge: "Admin",
    badgeColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Blog with Image Upload",
    desc: 'Create and publish blog posts with image uploads via Cloudinary, enabling content sharing, announcements, and knowledge distribution.',
    color: "bg-sky-50 border-sky-100",
    iconBg: "bg-sky-100",
    badge: "Content",
    badgeColor: "bg-sky-100 text-sky-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-rose-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Authentication",
    desc: 'Robust authentication system using JWT stored in HTTP-only cookies with encrypted passwords via bcrypt for maximum security.',
    color: "bg-rose-50 border-rose-100",
    iconBg: "bg-rose-100",
    badge: "Auth",
    badgeColor: "bg-rose-100 text-rose-600",
  },
];

const techStack = [
  { name: "React 19", icon: "⚛️" },
  { name: "Tailwind CSS v4", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express 5", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Mongoose", icon: "🔗" },
  { name: "JWT", icon: "🔐" },
  { name: "Bcrypt", icon: "🔒" },
  { name: "Cloudinary", icon: "☁️" },
  { name: "Multer", icon: "📁" },
  { name: "Axios", icon: "📡" },
  { name: "Vite", icon: "⚡" },
];

// ─── Shared content ───────────────────────────────────────────────────────────

const AboutContent = ({ isDashboard }) => {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className={isDashboard ? "" : "pt-24 px-4 max-w-5xl mx-auto"}>
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-500 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          About This App
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-3">
          What is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Daily Task?
          </span>
        </h1>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
          <span className="font-semibold text-slate-700">Daily Task</span> is a
          modern, user-friendly web application designed to streamline task
          management and enhance productivity. It offers a powerful role-based
          system where users and administrators have dedicated dashboards
          tailored to their needs. Users can efficiently create, manage, and
          track their daily tasks, while administrators gain full control over
          user management, content, and system activities.
          <br />
          <br />
          The platform also includes a built-in blogging system that allows
          users to publish content with image uploads, encouraging knowledge
          sharing and engagement. With real-time updates, secure authentication
          using JWT, and a fully responsive interface, Daily Task ensures a
          smooth, fast, and reliable experience across all devices.
          <br />
          <br />
          Overall, the application is designed as a complete productivity
          solution that combines task management, user control, and content
          publishing into one seamless ecosystem.
        </p>
      </div>

      {/* Features Grid */}
      <div className={isDashboard ? "" : "px-4 max-w-5xl mx-auto"}>
        <h2 className="text-lg font-bold text-slate-700 mb-5">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} border rounded-2xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center`}
                >
                  {f.icon}
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badgeColor}`}
                >
                  {f.badge}
                </span>
              </div>
              <h3 className="text-slate-800 font-bold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div
        className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${isDashboard ? "" : "mx-4 max-w-5xl md:mx-auto"}`}
      >
        <h2 className="text-lg font-bold text-slate-700 mb-5">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-semibold text-slate-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className={isDashboard ? "" : "px-4 max-w-5xl mx-auto"}>
        <h2 className="text-lg font-bold text-slate-700 mb-5">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              step: "01",
              title: "Sign Up",
              desc: "Create an account and choose your role — User or Admin.",
              icon: "✍️",
            },
            {
              step: "02",
              title: "Access Dashboard",
              desc: "Get redirected to your role-specific dashboard automatically.",
              icon: "🎯",
            },
            {
              step: "03",
              title: "Manage & Track",
              desc: "Create tasks, publish blogs, manage users, and track progress.",
              icon: "📈",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-4"
            >
              <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-md shadow-indigo-500/20">
                {s.step}
              </div>
              <div>
                <p className="text-lg mb-1">{s.icon}</p>
                <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Daily Task Dashboard. Built by Afia Bakr.
      </footer>

      {/* CTA */}
      {/* <div
        className={`bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-7 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-indigo-500/20 ${isDashboard ? "" : "mx-4 max-w-5xl md:mx-auto mb-16"}`}
      >
        <div>
          <h3 className="text-xl font-black">Ready to get started?</h3>
          <p className="text-indigo-200 text-sm mt-1">
            Sign in to access your dashboard and start managing tasks.
          </p>
        </div>
        <Link
          to="/login"
          className="shrink-0 bg-white text-indigo-700 font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm shadow"
        >
          Sign In →
        </Link>
      </div> */}
    </div>
  );
};

// ─── Main export — renders with Navbar (public) or DashboardLayout (logged in) ─

const About = () => {
  const { user, loader } = useAuthContext();

  // While auth is loading, show nothing to avoid layout flash
  if (loader) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  // Logged-in users → dashboard layout with sidebar
  if (user) {
    return (
      <DashboardLayout>
        <AboutContent isDashboard={true} />
      </DashboardLayout>
    );
  }

  // Public visitors → home navbar + plain background
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <AboutContent isDashboard={false} />
      </div>
    </div>
  );
};

export default About;
