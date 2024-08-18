// src/app/(shop)/product/[id]/page.tsx
"use client"; // Agrega esta línea para convertir el componente en un Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProduct } from '../../../../hooks/useProduct';
import { error } from 'console';

type ProductDetailProps = {
  params: {
    id: string;
  };
};

const ProductDetailPage: React.FC<ProductDetailProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const { data: product, isLoading, isError } = useProduct(id);

console.log('isError', isError)

  if (isLoading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>{product.summary}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Rating: {product.rating} stars</p>
      <p>{product.reviews_number} reviews</p>
    </div>
  );
};

export default ProductDetailPage;
