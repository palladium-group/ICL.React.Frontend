import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getPurchaseOrders = async () => {
  return await axios.get(apiRoutes.purchaseOrder);
};

export const newPurchaseOrder = async (values) => {
  return await axios.post(apiRoutes.purchaseOrder, values);
};