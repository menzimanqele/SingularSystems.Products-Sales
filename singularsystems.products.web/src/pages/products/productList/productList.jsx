import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../../../App.css'
import { ProductsGrid } from '../../../components/productsGrid/productsGrid';
import { Logger } from '../../../jsUtils/logging/logger';
import { productSalesPath } from '../../../routing/navigationPaths';
import { useProductService } from "../../../services/productApi/useProductService";
import { ProgressAlert } from '../../../components/alerts/progressAlert';


export function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productService = useProductService();
  const logger = new Logger();


  useEffect(() => {
    getData();
  }, []);

  /**
   * handler for Product image 
   * @param {url:'', desc:''} metaData 
   */
  function handleViewProductImage(metaData) {
    logger.info('productList', 'handleViewProductImage', 'view product image', metaData);
  }

  /**
   * handler for Product Summary
   * @param {id:'', productDescription:''}   
   */
  function handleProductSummary(product) {
    logger.info('productList', 'handleProductSummary', 'view product summary product id', product);

    if (product.id === undefined) {
      logger.error('productList', 'handleProductSummary', 'product is invalid cannot get product sales', product.id);
    } else {
      navigate(productSalesPath, { state: { productId: product.id, productDescription: product.description } });
    }
  }

  async function getData() {
  
    await productService.getAllProducts(
      async() => alert('error getting products from the server'),
      async (data) => setProducts(data)
    );
  }

  return (
    <div className='App'>
      <h1>Product list </h1>
      {products.length==0? <ProgressAlert></ProgressAlert>:
          <ProductsGrid
        products={products}
        handleViewProductImage={handleViewProductImage}
        handleProductSummary={handleProductSummary}
      ></ProductsGrid>
      }
    </div>
  )
};