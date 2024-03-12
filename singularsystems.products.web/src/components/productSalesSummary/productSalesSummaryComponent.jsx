
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import { ProductSaleSummaryBusiness } from './productSaleSummary.Business';
import { uuid } from '../../jsUtils/uuid';

/**
 * Product Sales component
 * @param {Array<ProductSales>} productSales 
 * @param {string} productDescription
 */
export function ProductSalesComponent({ productSales, productDescription }) {

    const productSaleBusiness = new ProductSaleSummaryBusiness();

    return (
        <>
            <h1>Product sales overwiew for : {productDescription}</h1>
            <Box sx={{ height: '100%', width: '100%' }}>
                <DataGrid rows={productSales} columns={productSaleBusiness.columns} getRowId={(row) => uuid()} />
            </Box>
        </>
    );

};