import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getPurchaseOrders = async () => {
    return await axios.get(`${apiRoutes.purchaseOrder}`);
};