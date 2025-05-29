import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./frameworklist";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";


createRoot(document.getElementById("root")).render(
  <div>
    <ProductList />
    <ResponsiveDesign />
  </div>
);
