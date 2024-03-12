import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { ProductList } from "../pages/products/productList/productList";
import { productListPath, productSalesPath } from "./navigationPaths";
import { ProductSales } from "../pages/products/productSales/productSales";


export function AppRoutes() {
  return(

  <BrowserRouter>
    <Routes>
      <Route key="dashboard" path="/" element={<Dashboard />}></Route>
      <Route key="productList" path={productListPath} element={<ProductList />}></Route>
      <Route key="productSales" path={productSalesPath} element={<ProductSales />}></Route>
    </Routes>
  </BrowserRouter>
  );

}
