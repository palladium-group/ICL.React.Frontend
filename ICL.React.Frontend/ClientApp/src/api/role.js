import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const newRole = async (values) => {
  return await axios.post(`${apiRoutes.role}`, values);
};

export const getRoles = async () => {
  return await axios.get(`${apiRoutes.role}`);
};