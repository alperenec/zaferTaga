import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashboardComp from "../components/DashboardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-56">
        <DashSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Profile */}
        {tab === "profile" && <DashProfile />}

        {/* Posts */}
        {tab === "posts" && <DashPosts />}

        {/* Users */}
        {tab === "users" && <DashUsers />}

        {/* Dashboard */}
        {(tab === "dash" || !tab) && <DashboardComp />}
      </div>
    </div>
  );
}
