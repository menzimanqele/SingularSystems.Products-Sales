import { HttpService } from "../../jsUtils/http/HttpService";
import { Logger } from "../../jsUtils/logging/logger";

export class ProductService extends HttpService{
    constructor(){
        this.logger = new Logger();
        return super( process.env.REACT_APP_PRODUCTS_URL);
    }


    async getAllProducts(){
        const results = await this.httpHandler.get('products');

        if(results) return results;

        const message =`Failed to retrive products`;
        this.logger.error('ProductService','getAllProducts',message,results);
        return {error : message};
    }
}