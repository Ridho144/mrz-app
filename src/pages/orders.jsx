import orders from "../data/orders";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export default function Orders() {
  const StatusBadge = ({ status }) => {
    let colorClass = "";

    switch (status) {
      case "Completed":
        colorClass = "bg-green-100 text-green-700";
        break;
      case "Pending":
        colorClass = "bg-yellow-100 text-yellow-700";
        break;
      case "Cancelled":
        colorClass = "bg-red-100 text-red-700";
        break;
      default:
        colorClass = "bg-gray-100 text-gray-600";
    }

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClass}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div>
      <Link
        to="/addOrders"
        className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
      >
        <FaCartPlus />
        Tambah Order
      </Link>

      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Order ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total Price</th>
            <th className="p-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="border-t">
              <td className="p-2">{order.orderId}</td>
              <td className="p-2">{order.customerName}</td>
              <td className="p-2">
                <StatusBadge status={order.status} />
              </td>
              <td className="p-2">Rp {order.totalPrice}</td>
              <td className="p-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
