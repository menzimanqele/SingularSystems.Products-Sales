import { ProductService } from "./ProductsService"
import { Product } from "../../entities/products/Product";
import { ProductSaleSummary } from "../../entities/products/ProductSaleSummary";

export const useProductService = ()=>{
    const service = new ProductService();

    async function getAllProducts(cbCancel, cbSuccess){
            const results = await service.getAllProducts();
            if(results.data){
                await cbSuccess(results.data.map(item=> new Product(item)));
            }    
    }               

    async function getProductsSalesSummaryByProductId(cbCancel, cbSuccess,id){
        const results = await service.getProductsSalesSummaryByProductId(id);
        if(results.data){
            await cbSuccess(results.data.map(item=> new ProductSaleSummary(item)));
        }    
}    

    return{
        getAllProducts,
        getProductsSalesSummaryByProductId
    }
}