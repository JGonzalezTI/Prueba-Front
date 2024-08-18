'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  rating: number;
  reviews_number: number;
  summary: string;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('/api/products'); // Usa el proxy de next.config para evitar CORS
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
