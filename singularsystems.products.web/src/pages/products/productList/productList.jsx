import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../../../App.css'
import { Product } from '../../../entities/products/Product'
import { ProductsGrid } from '../../../components/productsGrid/productsGrid';
import { Logger } from '../../../jsUtils/logging/logger';
import { productSalesPath } from '../../../routing/navigationPaths';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const logger = new Logger();
  
  useEffect(() => {
    const productResult = getProducts();
    setProducts(productResult);
  }, []);

  const productsData = [
    {
      "id": 1,
      "description": "Apples",
      "salePrice": 15.33,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/10256309/pexels-photo-10256309.jpeg"
    },
    {
      "id": 2,
      "description": "Oranges",
      "salePrice": 11.57,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg"
    },
    {
      "id": 3,
      "description": "Potatoes",
      "salePrice": 9.99,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg"
    },
    {
      "id": 4,
      "description": "Spinach",
      "salePrice": 12,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/3298064/pexels-photo-3298064.jpeg"
    },
    {
      "id": 5,
      "description": "Grapes",
      "salePrice": 19.99,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg"
    },
    {
      "id": 6,
      "description": "Strawberries",
      "salePrice": 9.99,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg"
    },
    {
      "id": 7,
      "description": "Plums",
      "salePrice": 25,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/248440/pexels-photo-248440.jpeg"
    },
    {
      "id": 8,
      "description": "Beans",
      "salePrice": 16,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/4815956/pexels-photo-4815956.jpeg"
    },
    {
      "id": 9,
      "description": "Leeks",
      "salePrice": 5.5,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/4935722/pexels-photo-4935722.jpeg"
    },
    {
      "id": 10,
      "description": "Onions",
      "salePrice": 10.5,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/2920402/pexels-photo-2920402.jpeg"
    },
    {
      "id": 11,
      "description": "Peppers",
      "salePrice": 25.99,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/48840/pexels-photo-48840.jpeg"
    },
    {
      "id": 12,
      "description": "Bananas",
      "salePrice": 14.5,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg"
    },
    {
      "id": 13,
      "description": "Pears",
      "salePrice": 11,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/2067574/pexels-photo-2067574.jpeg"
    },
    {
      "id": 14,
      "description": "Mangos",
      "salePrice": 25,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg"
    },
    {
      "id": 15,
      "description": "Broccoli",
      "salePrice": 16.2,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/3722583/pexels-photo-3722583.jpeg"
    },
    {
      "id": 16,
      "description": "Cabbage",
      "salePrice": 11,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/3283450/pexels-photo-3283450.jpeg"
    },
    {
      "id": 17,
      "description": "Beetroot",
      "salePrice": 25,
      "category": "Vegetable",
      "image": "https://images.pexels.com/photos/7511800/pexels-photo-7511800.jpeg"
    },
    {
      "id": 18,
      "description": "Apricot",
      "salePrice": 16.2,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/4058752/pexels-photo-4058752.jpeg"
    },
    {
      "id": 19,
      "description": "Figs",
      "salePrice": 25,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/33791/fig-sliced-plate-wooden-table.jpg"
    },
    {
      "id": 20,
      "description": "Cherries",
      "salePrice": 16.2,
      "category": "Fruit",
      "image": "https://images.pexels.com/photos/966416/pexels-photo-966416.jpeg"
    }
  ];

  const productSalesData = [
    {
      "saleId": 310,
      "productId": 3,
      "salePrice": 48.72,
      "saleQty": 426,
      "saleDate": "2024-02-18"
    },
    {
      "saleId": 311,
      "productId": 3,
      "salePrice": 46.32,
      "saleQty": 459,
      "saleDate": "2024-02-19"
    },
    {
      "saleId": 312,
      "productId": 3,
      "salePrice": 36,
      "saleQty": 1383,
      "saleDate": "2024-02-19"
    },
    {
      "saleId": 313,
      "productId": 3,
      "salePrice": 34.8,
      "saleQty": 774,
      "saleDate": "2024-02-20"
    },
    {
      "saleId": 314,
      "productId": 3,
      "salePrice": 29.28,
      "saleQty": 999,
      "saleDate": "2024-02-21"
    },
    {
      "saleId": 315,
      "productId": 3,
      "salePrice": 39.36,
      "saleQty": 981,
      "saleDate": "2024-02-23"
    },
    {
      "saleId": 316,
      "productId": 3,
      "salePrice": 37.92,
      "saleQty": 549,
      "saleDate": "2024-02-24"
    },
    {
      "saleId": 317,
      "productId": 3,
      "salePrice": 52.8,
      "saleQty": 792,
      "saleDate": "2024-02-25"
    },
    {
      "saleId": 318,
      "productId": 3,
      "salePrice": 51.12,
      "saleQty": 867,
      "saleDate": "2024-02-26"
    },
    {
      "saleId": 319,
      "productId": 3,
      "salePrice": 62.16,
      "saleQty": 981,
      "saleDate": "2024-02-27"
    },
    {
      "saleId": 320,
      "productId": 3,
      "salePrice": 60,
      "saleQty": 738,
      "saleDate": "2024-02-28"
    },
    {
      "saleId": 321,
      "productId": 3,
      "salePrice": 49.08,
      "saleQty": 1248,
      "saleDate": "2024-02-29"
    },
    {
      "saleId": 322,
      "productId": 3,
      "salePrice": 54.41,
      "saleQty": 444,
      "saleDate": "2024-03-01"
    },
    {
      "saleId": 323,
      "productId": 3,
      "salePrice": 68.4,
      "saleQty": 1020,
      "saleDate": "2024-03-02"
    },
    {
      "saleId": 324,
      "productId": 3,
      "salePrice": 59.28,
      "saleQty": 618,
      "saleDate": "2024-03-03"
    },
    {
      "saleId": 325,
      "productId": 3,
      "salePrice": 64.8,
      "saleQty": 1416,
      "saleDate": "2024-03-04"
    },
    {
      "saleId": 326,
      "productId": 3,
      "salePrice": 49.68,
      "saleQty": 759,
      "saleDate": "2024-03-05"
    },
    {
      "saleId": 327,
      "productId": 3,
      "salePrice": 50.66,
      "saleQty": 318,
      "saleDate": "2024-03-06"
    },
    {
      "saleId": 328,
      "productId": 3,
      "salePrice": 53.33,
      "saleQty": 1365,
      "saleDate": "2024-03-07"
    },
    {
      "saleId": 329,
      "productId": 3,
      "salePrice": 63.84,
      "saleQty": 858,
      "saleDate": "2024-03-08"
    },
    {
      "saleId": 330,
      "productId": 3,
      "salePrice": 62.4,
      "saleQty": 1104,
      "saleDate": "2024-03-09"
    },
    {
      "saleId": 710,
      "productId": 7,
      "salePrice": 113.68,
      "saleQty": 2856,
      "saleDate": "2024-02-18"
    },
    {
      "saleId": 711,
      "productId": 7,
      "salePrice": 108.08,
      "saleQty": 3458,
      "saleDate": "2024-02-19"
    },
    {
      "saleId": 712,
      "productId": 7,
      "salePrice": 84,
      "saleQty": 1225,
      "saleDate": "2024-02-19"
    },
    {
      "saleId": 713,
      "productId": 7,
      "salePrice": 81.2,
      "saleQty": 2660,
      "saleDate": "2024-02-20"
    },
    {
      "saleId": 714,
      "productId": 7,
      "salePrice": 68.32,
      "saleQty": 931,
      "saleDate": "2024-02-21"
    },
    {
      "saleId": 715,
      "productId": 7,
      "salePrice": 91.84,
      "saleQty": 959,
      "saleDate": "2024-02-23"
    },
    {
      "saleId": 716,
      "productId": 7,
      "salePrice": 88.48,
      "saleQty": 2373,
      "saleDate": "2024-02-24"
    },
    {
      "saleId": 717,
      "productId": 7,
      "salePrice": 123.2,
      "saleQty": 2527,
      "saleDate": "2024-02-25"
    },
    {
      "saleId": 718,
      "productId": 7,
      "salePrice": 119.28,
      "saleQty": 2597,
      "saleDate": "2024-02-26"
    },
    {
      "saleId": 719,
      "productId": 7,
      "salePrice": 145.04,
      "saleQty": 2240,
      "saleDate": "2024-02-27"
    },
    {
      "saleId": 720,
      "productId": 7,
      "salePrice": 140,
      "saleQty": 1813,
      "saleDate": "2024-02-28"
    },
    {
      "saleId": 721,
      "productId": 7,
      "salePrice": 114.52,
      "saleQty": 3465,
      "saleDate": "2024-02-29"
    },
    {
      "saleId": 722,
      "productId": 7,
      "salePrice": 126.95,
      "saleQty": 2345,
      "saleDate": "2024-03-01"
    },
    {
      "saleId": 723,
      "productId": 7,
      "salePrice": 159.6,
      "saleQty": 1729,
      "saleDate": "2024-03-02"
    },
    {
      "saleId": 724,
      "productId": 7,
      "salePrice": 138.32,
      "saleQty": 1484,
      "saleDate": "2024-03-03"
    },
    {
      "saleId": 725,
      "productId": 7,
      "salePrice": 151.2,
      "saleQty": 3192,
      "saleDate": "2024-03-04"
    },
    {
      "saleId": 726,
      "productId": 7,
      "salePrice": 115.92,
      "saleQty": 1288,
      "saleDate": "2024-03-05"
    },
    {
      "saleId": 727,
      "productId": 7,
      "salePrice": 118.22,
      "saleQty": 1526,
      "saleDate": "2024-03-06"
    },
    {
      "saleId": 728,
      "productId": 7,
      "salePrice": 124.43,
      "saleQty": 2996,
      "saleDate": "2024-03-07"
    },
    {
      "saleId": 729,
      "productId": 7,
      "salePrice": 148.96,
      "saleQty": 2660,
      "saleDate": "2024-03-08"
    },
    {
      "saleId": 730,
      "productId": 7,
      "salePrice": 145.6,
      "saleQty": 742,
      "saleDate": "2024-03-09"
    }
  ];

  function getProducts() {
    const products = productsData.map(item => new Product(item));
    return products;
  };

  /**
   * handler for Product image 
   * @param {url:'', desc:''} metaData 
   */
  function handleViewProductImage(metaData) {
    logger.info('productList','handleViewProductImage', 'view product image', metaData);
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
      navigate(productSalesPath,{state:{productId:product.id,productDescription:product.description}});
    }
  }

  getProducts();
  return (
    <div className='App'>
      <h1>Product list </h1>

      <ProductsGrid
        products={products}
        handleViewProductImage={handleViewProductImage}
        handleProductSummary={handleProductSummary}
      ></ProductsGrid>

    </div>
  )
};