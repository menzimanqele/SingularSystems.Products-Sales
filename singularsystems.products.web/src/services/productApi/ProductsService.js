import { HttpService } from "../../jsUtils/http/HttpService";
import { Logger } from "../../jsUtils/logging/logger";

export class ProductService extends HttpService{
    constructor(){
       // super(process.env.REACT_APP_PRODUCTS_URL);
       super('http://localhost:5000')
        this.logger = new Logger();
   
    }


    async getAllProducts(){
        const results = await this.get('products');

        if(results) return results;

        const message =`Failed to retrive products`;
        this.logger.error('ProductService','getAllProducts',message,results);
        return {error : message};
    }
}