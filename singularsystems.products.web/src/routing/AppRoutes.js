import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { ProductList } from "../pages/products/productsList/productList";

export function AppRoutes() {
  return(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="product-list" element={<ProductList />}></Route>
    </Routes>
  </BrowserRouter>
  );

}
