import ProductsList from '@/components/ProductList/ProductList';
import React from 'react';


const HomePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '24px', marginTop: '2em' }}>Mas Vistos</h1>
      <ProductsList />
    </div>
  );
};

export default HomePage;


