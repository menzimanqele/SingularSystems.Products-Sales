export class ProductSaleSummaryBusiness{

    get columns (){
        const columnsItems =[ 
     
            { field: "saleId", headerName: "Sale Id", width: 150 }, 
            { field: "salePrice", headerName: "Price", width: 150 },
            { field: "saleQty", headerName: "Qty", width: 150 },
            { field: "saleDate", headerName: "Sale Date", width: 300 },
           ];
           return columnsItems;
    }
}