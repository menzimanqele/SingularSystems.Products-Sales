import { useEffect, useState } from 'react';
import '../../../App.css'
import { Product } from '../../../entities/products/Product'
import { ProductsGrid } from '../../../components/productsGrid/productsGrid';
import { Logger } from '../../../jsUtils/logging/logger';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const logger = new Logger

  useEffect(() => {
    const productResult = getProducts();
    setProducts(productResult);
  }, []);

  const data = [
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

  function getProducts() {

    const products = data.map(item => new Product(item));
    return products;
  };

  /**
   * handler for Product image 
   * @param {url:'', desc:''} metaData 
   */
  function handleViewProductImage(metaData) {
    logger.info('productList:handleViewProductImage', 'view product image', metaData);
  }

  /**
   * handler for Product Summary
   * @param {int} productId 
   */
  function handleProductSummary(productId) {
    logger.info('productList:handleProductSummary', 'view product summary product id',productId);
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