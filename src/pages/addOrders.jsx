import { useState } from "react";

export default function AddOrder() {
  const [form, setForm] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Added:", form);
    alert("Order berhasil ditambahkan!");
    setForm({
      orderId: "",
      customerName: "",
      status: "Pending",
      totalPrice: "",
      orderDate: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Tambah Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="orderId"
          type="text"
          placeholder="ID Order (misal: ORD1031)"
          value={form.orderId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="customerName"
          type="text"
          placeholder="Nama Customer"
          value={form.customerName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          name="totalPrice"
          type="number"
          placeholder="Total Harga (Rp)"
          value={form.totalPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="orderDate"
          type="date"
          value={form.orderDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Simpan Order
        </button>
      </form>
    </div>
  );
}
