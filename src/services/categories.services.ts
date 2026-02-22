"use server";
import { ICategory } from "@/interface/category.interface";
import { api } from "./baseApi";

export const getAllCategories = async () => {
  const res = await api.get<ICategory[]>("/categories");
  return res;
};
