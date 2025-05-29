import { AiFillPlusCircle, AiOutlineUnorderedList, AiFillCustomerService } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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
          <NavLink id="menu-2" to="/aboutus" className={menuClass}>
            <AiOutlineUnorderedList size={20} />
            <span>About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/ulasan" className={menuClass}>
            <AiFillCustomerService size={20} />
            <span>Ulasan Pengguna</span>
          </NavLink>
        </li>
         
      </ul>
    </div>
  );
}
