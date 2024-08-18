

// src/app/(shop)/page.tsx
import ProductsList from '@/components/ProductList/ProductList';
import React from 'react';


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductsList />
    </div>
  );
};

export default HomePage;


