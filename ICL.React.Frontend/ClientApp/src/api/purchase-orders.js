import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getPurchaseOrders = async () => {
    return await axios.get('https://icl-dwh-backend.azurewebsites.net/api/PurchaseOrder');
};