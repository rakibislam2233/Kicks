import { IProduct } from "@/interface/products.interface";
import { api } from "./baseApi";

export const getAllProducts = async () => {
  const res = await api.get<IProduct[]>("/products", {
    next: {
      tags: ["products"],
      revalidate: 60 * 60 * 24,
    },
  });
  return res;
};

export const getSingleProduct = async (id: number) => {
  const res = await api.get<IProduct>(`/products/${id}`);
  return res;
};
