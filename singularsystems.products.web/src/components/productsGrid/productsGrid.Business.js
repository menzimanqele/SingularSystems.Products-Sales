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
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params) => {
              const product = params.row;
              const onClick = (e) => {
                e.stopPropagation(); 
                handleViewProductImage({url:product.image, desc:product.description});
              };

              const productSummaryHandler = (e)=>{
                handleProductSummary(product.id);
              };
        
              return [<MmsTwoToneIcon onClick={onClick}></MmsTwoToneIcon>,<SummarizeTwoToneIcon onClick={productSummaryHandler}></SummarizeTwoToneIcon>];
            }
          },
       ];
       return columnsItems;
    }

}