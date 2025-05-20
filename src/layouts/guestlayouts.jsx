import { Outlet } from "react-router-dom";
import header from "../components/guest/Header";
import Sidebar from "../components/guest/Sidebar";
import Header from "../components/guest/Header";
export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
