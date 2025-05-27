import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/orders";
// import Customers from "./pages/customers";
// import NotFoundPage from "./pages/notfound";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// import AddCustomer from "./pages/addCustomer";
// import AddOrder from "./pages/addOrders";
// import AuthLayout from "./layouts/authlayouts";
// import Login from "./pages/auth/login";
// import Register from "./pages/auth/register";
// import Forgot from "./pages/auth/forgot";
// import MainLayouts from "./layouts/mainlayouts";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/orders"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const AddCustomer = React.lazy(() => import("./pages/addCustomer"));
const AddOrder = React.lazy(() => import("./pages/addOrders"));
const Login = React.lazy(() => import("./pages/auth/login"));
const Forgot = React.lazy(() => import("./pages/auth/forgot"));
const Register = React.lazy(() => import("./pages/auth/register"));
const AuthLayout = React.lazy(() => import("./layouts/authlayouts"));
const MainLayouts = React.lazy(() => import("./layouts/mainlayouts"));
const Customers = React.lazy(() => import("./pages/customers"));
const NotFoundPage = React.lazy(() => import("./pages/notfound"));
const Loading = React.lazy(() => import("./components/loading"));
const User = React.lazy(() => import("./pages/user"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

//Quiz
const GuestLayout = React.lazy(() => import("./layouts/guestlayouts"));
const DashboardGuest = React.lazy(() => import("./pages/guest/dashboardguest"));
const AboutUs = React.lazy(() => import("./pages/guest/aboutus"));
const Produk = React.lazy(() => import("./pages/guest/produk"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<MainLayouts />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/addOrders" element={<AddOrder />} />
          <Route path="/user" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/dashboardguest" element={<DashboardGuest />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/produk" element={<Produk />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
