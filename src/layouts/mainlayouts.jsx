import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayouts() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
