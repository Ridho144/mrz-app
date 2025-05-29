import { useState } from "react";

export default function AddCustomer() {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Added:", form);
    // Di sini kamu bisa kirim data ke backend atau update state global
    alert("Customer berhasil ditambahkan!");
    setForm({ customerName: "", email: "", phone: "", loyalty: "Bronze" });
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Tambah Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="customerName"
          type="text"
          placeholder="Nama Customer"
          value={form.customerName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Nomor HP"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="loyalty"
          value={form.loyalty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Simpan Customer
        </button>
      </form>
    </div>
  );
}
