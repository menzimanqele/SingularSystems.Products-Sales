export class Product{
    constructor(jsonData){
        this.id = 0;
        this.description ='';
        this.salePrice=0;
        this.category='';
        this.image='';

        Object.assign(this, jsonData);
    }
}