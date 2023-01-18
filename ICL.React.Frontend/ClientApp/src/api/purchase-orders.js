import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const
    s = async () => {
    return await axios.get(`${apiRoutes.purchaseOrder}`);
};

export const getCustomerOrders = async () => {
    return await axios.get(`${apiRoutes.customerOrder}`);
};

export const getPurchaseOrderWithParam = async ({ queryKey }) => {
    const [, path] = queryKey;
    return await axios.get(`${apiRoutes.customerOrder}/${path}`);
};

