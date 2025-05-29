import { AiFillApple } from "react-icons/ai";
import "./assets/tailwind.css";
import { createRoot } from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <Sidebar />
    <div id="main-content" className="flex-1 p-4">
      <Header />
      {/* <PageHeader /> */}
      <Dashboard />
    </div>
  </div>
);
