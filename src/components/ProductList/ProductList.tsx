
'use client';

import { useProducts } from '@/hooks/useProducts';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard'


const ProductsList: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className='productList-container'>
      {products.map((product: any, index: any) => (
        <ProductCard key={product.id} {...product} index={index} />
      ))}
    </div>
  );
};

export default ProductsList;
