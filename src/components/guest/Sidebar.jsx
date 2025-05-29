import {
  AiFillPlusCircle,
  AiOutlineUnorderedList,
  AiFillCustomerService,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 bg-gray-900 text-white flex flex-col justify-between p-6">
      {/* Top Section: Logo & Menu */}
      <div>
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-wide text-white">Ridho<span className="text-green-400">.</span></h1>
          <p className="text-sm text-gray-400">Admin Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-4">
          <SidebarItem icon={<MdDashboard size={20} />} label="Dashboard" />
          <SidebarItem icon={<AiOutlineUnorderedList size={20} />} label="Orders" />
          <SidebarItem icon={<AiFillCustomerService size={20} />} label="Customer" />
          <SidebarItem icon={<FaChevronDown size={14} />} label="More" />
        </nav>
      </div>

      {/* Footer Card */}
      <div className="bg-gray-800 p-4 rounded-lg flex gap-3 items-center relative">
        <div className="flex-1">
          <p className="text-sm text-gray-200">
            Organize your menu easily!
          </p>
          <button className="mt-2 bg-green-400 text-sm text-white px-3 py-1 rounded-md hover:bg-green-500 flex items-center gap-1">
            <AiFillPlusCircle />
            Add Menu
          </button>
        </div>
        <img
          src="https://avatar.iran.liara.run/public/28"
          alt="Admin Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-xs text-gray-500 text-center">
        <p className="font-semibold">Ridho Admin</p>
        <p>&copy; 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer px-2 py-2 rounded-md hover:bg-gray-800 transition">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
