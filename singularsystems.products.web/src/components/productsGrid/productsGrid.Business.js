import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
export class ProductGridBusiness{

     columns(handleViewProductImage, handleProductSummary){
       const columnsItems =[ 
        { field: "id", headerName: "ID", width: 150 },
        { field: "description", headerName: "Description", width: 150 },
        { field: "salePrice", headerName: "Sale Price", width: 150 },
        { field: "category", headerName: "Category", width: 300 },
        {
            field: "productImageAction",
            headerName: "Product Image",
            sortable: false,
            width: 150,
            renderCell: (params) => {
              const product = params.row;
              const cbClickProductImage = (e) => {
                e.stopPropagation(); 
                handleViewProductImage({url:product.image, desc:product.description});
              };
              return <MmsTwoToneIcon onClick={cbClickProductImage} key='productImageAction'></MmsTwoToneIcon>;
            }
          },
          {
            field: "SalesSummaryAction",
            headerName: "Sales Summary",
            sortable: false,
            width: 150,
            renderCell: (params) => {
              const product = params.row;
             
              const cbClickProductSummary = (e)=>{
                e.stopPropagation(); 
                handleProductSummary({id:product.id,description:product.description});
              };
              return<SummarizeTwoToneIcon onClick={cbClickProductSummary} key='productSalesSummaryAction'></SummarizeTwoToneIcon>;
            }
          }
       ];
       return columnsItems;
    }

}