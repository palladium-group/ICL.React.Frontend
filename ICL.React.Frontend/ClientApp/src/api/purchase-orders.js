import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getPurchaseOrders = async () => {
    return await axios.get(`${apiRoutes.purchaseOrder}`);
};

export const getPurchaseOrderWithParam = async ({ queryKey }) => {
    const [, path] = queryKey;
    return await axios.get(`${apiRoutes.purchaseOrder}/${path}`);
};