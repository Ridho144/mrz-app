import {
  AiFillPlusCircle,
  AiOutlineUnorderedList,
  AiFillCustomerService,
} from "react-icons/ai";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

//File Fix Untuk Listmenu/Sidebar
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
      ${
        isActive
          ? "text-hijau bg-green-200 font-extrabold"
          : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
      }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <AiOutlineUnorderedList size={20} />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <AiFillCustomerService size={20} />
            <span>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/error400" className={menuClass}>
            <AiFillPlusCircle size={20} />
            <span>Error 400</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/error401" className={menuClass}>
            <AiFillPlusCircle size={20} />
            <span>Error 401</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/error403" className={menuClass}>
            <AiFillPlusCircle size={20} />
            <span>Error 403</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/user" className={menuClass}>
            <FiUsers size={20} />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/products" className={menuClass}>
            <MdFastfood className="mr-4 text-xl" />
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
