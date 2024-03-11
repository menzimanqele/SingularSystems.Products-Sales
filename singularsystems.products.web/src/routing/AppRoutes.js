import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { ProductList } from "../pages/products/productList/productList";
import { productListPath } from "./navigationPaths";


export function AppRoutes() {
  return(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path={productListPath} element={<ProductList />}></Route>
    </Routes>
  </BrowserRouter>
  );

}
