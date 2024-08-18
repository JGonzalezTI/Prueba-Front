'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};

export const useProduct = (id: string) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};
