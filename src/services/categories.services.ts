"use server";

import { api } from "./baseApi";

export const getAllCategories = async () => {
  const res = await api.get("/categories");
  return res;
};
