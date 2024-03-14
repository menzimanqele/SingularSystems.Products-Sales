
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductSalesComponent } from "../../../components/productSalesSummary/productSalesSummaryComponent";
import Link from '@mui/material/Link';
import { productListPath } from "../../../routing/navigationPaths";
import { useProductService } from "../../../services/productApi/useProductService";
import { ProgressAlert } from "../../../components/alerts/progressAlert";

/**
 * Product Sales Page 
 */
export function ProductSales() {
    const { state: { productId, productDescription } } = useLocation();
    const [productSalesSummary, setProductSalesSummary] = useState([]);
    const productService = useProductService();


    useEffect(() => {
        if (productId) {
            getProductSalesSummaryByProductId();
        }
    }, [productId]);


    async function getProductSalesSummaryByProductId() {
        await productService.getProductsSalesSummaryByProductId(
            async () => alert('error getting products sales summary from the server'),
            async (data) => setProductSalesSummary(data), productId
        );
    }

    return (
        <>
            <div className='App'>
                <Link href={productListPath}>Back to Products </Link>
                {productSalesSummary.lenght == 0 ? <ProgressAlert></ProgressAlert> :
                    <ProductSalesComponent
                        productSales={productSalesSummary}
                        productDescription={productDescription}
                    ></ProductSalesComponent>
                }
            </div>

        </>
    )
}