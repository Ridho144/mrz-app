import customers from "../data/customers";
import { Link, NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


export default function Customers() {
  return (
    <div>
      <Link
        to="/addCustomer"
        className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        <FaUserPlus />
        Tambah Customer
      </Link>

      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Customer ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.customerId} className="border-t">
              <td className="p-2">{cust.customerId}</td>
              <td className="p-2">{cust.customerName}</td>
              <td className="p-2">{cust.email}</td>
              <td className="p-2">{cust.phone}</td>
              <td className="p-2">{cust.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
