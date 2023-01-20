import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const newUser = async (values) => {
  return await axios.post(`${apiRoutes.user}`, values);
};

export const getUsers = async () => {
  return await axios.get(`${apiRoutes.user}`);
};