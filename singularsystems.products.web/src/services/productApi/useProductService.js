import { ProductService } from "./ProductsService"

export const useProductService = ()=>{
    const service = new ProductService();

    async function getAllProducts(cbCancel, cbSuccess){
            const results = await service.getAllProducts();
            if(results.data){
                await cbSuccess(results.data);
            }   
    }               

    return{
        getAllProducts
    }
}