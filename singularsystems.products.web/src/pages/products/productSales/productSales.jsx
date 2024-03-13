
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductSalesComponent } from "../../../components/productSalesSummary/productSalesSummaryComponent";
import Link from '@mui/material/Link';
import { productListPath } from "../../../routing/navigationPaths";
import { Logger } from "../../../jsUtils/logging/logger";
import { ProductSaleSummary } from "../../../entities/products/ProductSaleSummary";
import { useProductService } from "../../../services/productApi/useProductService";


/**
 * Product Sales Page 
 */
export function ProductSales() {
    const { state: { productId, productDescription } } = useLocation();
    const [productSalesSummary, setProductSalesSummary] = useState([]);
    const logger = new Logger();
    const productService =  useProductService();

    useEffect(()=>{
getData();
    },[])

    useEffect(() => {
        if (productId) {
            const results = getProductSales(productId);
            setProductSalesSummary(results);
        }
    }, [productId]);
    const productSalesData = [
        {
            "saleId": 310,
            "productId": 3,
            "salePrice": 48.72,
            "saleQty": 426,
            "saleDate": "2024-02-18"
        },
        {
            "saleId": 311,
            "productId": 3,
            "salePrice": 46.32,
            "saleQty": 459,
            "saleDate": "2024-02-19"
        },
        {
            "saleId": 312,
            "productId": 3,
            "salePrice": 36,
            "saleQty": 1383,
            "saleDate": "2024-02-19"
        },
        {
            "saleId": 313,
            "productId": 3,
            "salePrice": 34.8,
            "saleQty": 774,
            "saleDate": "2024-02-20"
        },
        {
            "saleId": 314,
            "productId": 3,
            "salePrice": 29.28,
            "saleQty": 999,
            "saleDate": "2024-02-21"
        },
        {
            "saleId": 315,
            "productId": 3,
            "salePrice": 39.36,
            "saleQty": 981,
            "saleDate": "2024-02-23"
        },
        {
            "saleId": 316,
            "productId": 3,
            "salePrice": 37.92,
            "saleQty": 549,
            "saleDate": "2024-02-24"
        },
        {
            "saleId": 317,
            "productId": 3,
            "salePrice": 52.8,
            "saleQty": 792,
            "saleDate": "2024-02-25"
        },
        {
            "saleId": 318,
            "productId": 3,
            "salePrice": 51.12,
            "saleQty": 867,
            "saleDate": "2024-02-26"
        },
        {
            "saleId": 319,
            "productId": 3,
            "salePrice": 62.16,
            "saleQty": 981,
            "saleDate": "2024-02-27"
        },
        {
            "saleId": 320,
            "productId": 3,
            "salePrice": 60,
            "saleQty": 738,
            "saleDate": "2024-02-28"
        },
        {
            "saleId": 321,
            "productId": 3,
            "salePrice": 49.08,
            "saleQty": 1248,
            "saleDate": "2024-02-29"
        },
        {
            "saleId": 322,
            "productId": 3,
            "salePrice": 54.41,
            "saleQty": 444,
            "saleDate": "2024-03-01"
        },
        {
            "saleId": 323,
            "productId": 3,
            "salePrice": 68.4,
            "saleQty": 1020,
            "saleDate": "2024-03-02"
        },
        {
            "saleId": 324,
            "productId": 3,
            "salePrice": 59.28,
            "saleQty": 618,
            "saleDate": "2024-03-03"
        },
        {
            "saleId": 325,
            "productId": 3,
            "salePrice": 64.8,
            "saleQty": 1416,
            "saleDate": "2024-03-04"
        },
        {
            "saleId": 326,
            "productId": 3,
            "salePrice": 49.68,
            "saleQty": 759,
            "saleDate": "2024-03-05"
        },
        {
            "saleId": 327,
            "productId": 3,
            "salePrice": 50.66,
            "saleQty": 318,
            "saleDate": "2024-03-06"
        },
        {
            "saleId": 328,
            "productId": 3,
            "salePrice": 53.33,
            "saleQty": 1365,
            "saleDate": "2024-03-07"
        },
        {
            "saleId": 329,
            "productId": 3,
            "salePrice": 63.84,
            "saleQty": 858,
            "saleDate": "2024-03-08"
        },
        {
            "saleId": 330,
            "productId": 3,
            "salePrice": 62.4,
            "saleQty": 1104,
            "saleDate": "2024-03-09"
        },
        {
            "saleId": 710,
            "productId": 7,
            "salePrice": 113.68,
            "saleQty": 2856,
            "saleDate": "2024-02-18"
        },
        {
            "saleId": 711,
            "productId": 7,
            "salePrice": 108.08,
            "saleQty": 3458,
            "saleDate": "2024-02-19"
        },
        {
            "saleId": 712,
            "productId": 7,
            "salePrice": 84,
            "saleQty": 1225,
            "saleDate": "2024-02-19"
        },
        {
            "saleId": 713,
            "productId": 7,
            "salePrice": 81.2,
            "saleQty": 2660,
            "saleDate": "2024-02-20"
        },
        {
            "saleId": 714,
            "productId": 7,
            "salePrice": 68.32,
            "saleQty": 931,
            "saleDate": "2024-02-21"
        },
        {
            "saleId": 715,
            "productId": 7,
            "salePrice": 91.84,
            "saleQty": 959,
            "saleDate": "2024-02-23"
        },
        {
            "saleId": 716,
            "productId": 7,
            "salePrice": 88.48,
            "saleQty": 2373,
            "saleDate": "2024-02-24"
        },
        {
            "saleId": 717,
            "productId": 7,
            "salePrice": 123.2,
            "saleQty": 2527,
            "saleDate": "2024-02-25"
        },
        {
            "saleId": 718,
            "productId": 7,
            "salePrice": 119.28,
            "saleQty": 2597,
            "saleDate": "2024-02-26"
        },
        {
            "saleId": 719,
            "productId": 7,
            "salePrice": 145.04,
            "saleQty": 2240,
            "saleDate": "2024-02-27"
        },
        {
            "saleId": 720,
            "productId": 7,
            "salePrice": 140,
            "saleQty": 1813,
            "saleDate": "2024-02-28"
        },
        {
            "saleId": 721,
            "productId": 7,
            "salePrice": 114.52,
            "saleQty": 3465,
            "saleDate": "2024-02-29"
        },
        {
            "saleId": 722,
            "productId": 7,
            "salePrice": 126.95,
            "saleQty": 2345,
            "saleDate": "2024-03-01"
        },
        {
            "saleId": 723,
            "productId": 7,
            "salePrice": 159.6,
            "saleQty": 1729,
            "saleDate": "2024-03-02"
        },
        {
            "saleId": 724,
            "productId": 7,
            "salePrice": 138.32,
            "saleQty": 1484,
            "saleDate": "2024-03-03"
        },
        {
            "saleId": 725,
            "productId": 7,
            "salePrice": 151.2,
            "saleQty": 3192,
            "saleDate": "2024-03-04"
        },
        {
            "saleId": 726,
            "productId": 7,
            "salePrice": 115.92,
            "saleQty": 1288,
            "saleDate": "2024-03-05"
        },
        {
            "saleId": 727,
            "productId": 7,
            "salePrice": 118.22,
            "saleQty": 1526,
            "saleDate": "2024-03-06"
        },
        {
            "saleId": 728,
            "productId": 7,
            "salePrice": 124.43,
            "saleQty": 2996,
            "saleDate": "2024-03-07"
        },
        {
            "saleId": 729,
            "productId": 7,
            "salePrice": 148.96,
            "saleQty": 2660,
            "saleDate": "2024-03-08"
        },
        {
            "saleId": 730,
            "productId": 7,
            "salePrice": 145.6,
            "saleQty": 742,
            "saleDate": "2024-03-09"
        }
    ];

    /**
     *  Get product sales for a product 
     * @param {int} productId 
     */
    function getProductSales(productId) {
        logger.info('productList', 'getProductSales', 'getting product sales', productId);

        if (productId === undefined) {
            logger.error('productList', 'getProductSales', 'product is invalid cannot get product sales', productId);
        }
        const results = productSalesData.filter(filterItem => filterItem.productId === productId).map(item => new ProductSaleSummary(item));
        return results;
    }

    async function getData(){
        await productService.getAllProducts(
            ()=> alert('error'),
            async (data)=> alert(data.length)
        );
    }

    return (
        <>
            <div className='App'>
                <Link href={productListPath}>Back to Products </Link>
                <ProductSalesComponent
                    productSales={productSalesSummary}
                    productDescription={productDescription}
                ></ProductSalesComponent>
            </div>
        </>
    )
}