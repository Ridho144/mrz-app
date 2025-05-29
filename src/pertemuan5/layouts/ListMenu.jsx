import { AiFillPlusCircle } from "react-icons/ai"; 
import { AiOutlineUnorderedList } from "react-icons/ai"; 
import { AiFillCustomerService } from "react-icons/ai"; 
import { MdDashboard } from "react-icons/md"; 


export default function ListMenu() {
  return ( <div id="sidebar-menu" className="mt-10">
    <ul id="menu-list" className="space-y-3">
      <li>
        <div
          id="menu-1"
          className="hover:text-merah flex cursor-pointer 
                        items-center rounded-xl p-4 
                        font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <MdDashboard />
          Dashboard
        </div>
      </li>
      <li>
        <div
          id="menu-2"
          className="hover:text-biru flex cursor-pointer 
                        items-center rounded-xl p-4 font-medium
                         text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <AiOutlineUnorderedList />
          Orders
        </div>
      </li>
      <li>
        <div
          id="menu-3"
          className="hover:text-kuning flex cursor-pointer items-center 
                        rounded-xl p-4 font-medium
                         text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <AiFillCustomerService />
          Customers
        </div>
      </li>
    </ul>
  </div>);
 
}
