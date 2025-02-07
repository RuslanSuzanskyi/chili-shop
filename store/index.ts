import { getAllProducts } from '@/services/getProducts';
import {create} from 'zustand';

type UseProducts = {
  products: any[];
  loading: boolean;
  getAllProducts: () => Promise<void>;
  getProductsBySearch: (value: string) => Promise<void>;
}

export const useProducts = create<UseProducts>((set) => ({
  products: [],
  loading: false,
  getAllProducts: async () => {
    set({loading: true})
    const products = await getAllProducts()
    set({products, loading:false})
  },
  getProductsBySearch: async (search) => {
    set({loading: true})
    const products = await getProductsBySearch(search)
    set({products, loading:false})
  }
}));