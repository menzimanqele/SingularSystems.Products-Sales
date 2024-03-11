import { Product } from "../../entities/products/Product";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import { ProductGridBusiness } from "./productsGrid.Business";
/**
 * Product list 
 * @param {typeof<Array<Product>>} products 
 * @callback handleViewProductImage 
 * @callback handleProductSummary
 */
export function ProductsGrid({ products, handleViewProductImage,handleProductSummary }) {

    const productGridBusiness = new ProductGridBusiness();
    return (
        <>
            <Box sx={{ height: '100%', width: '100%' }}>
                <DataGrid rows={products} columns={productGridBusiness.columns(handleViewProductImage,handleProductSummary)} />
            </Box>
        </>
    )


}