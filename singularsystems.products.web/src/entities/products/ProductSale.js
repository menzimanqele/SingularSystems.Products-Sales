export class ProductSale{
    constructor(jsonData){
        this.saleId = '',
        this.productId='';
        this.salePrice='';
        this.saleQty='';
        this.saleDate='';

        Object.assign(this,jsonData);
    }
}