import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getPurchaseOrders = async () => {
    return await axios.get('https://localhost:7014/api/PurchaseOrder');
};