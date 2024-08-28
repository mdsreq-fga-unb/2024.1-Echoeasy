import { api } from "./api";

export const getAllDocuments = async () => {
  const response = await api.get("/documentos/all");
  return response.data;
};
