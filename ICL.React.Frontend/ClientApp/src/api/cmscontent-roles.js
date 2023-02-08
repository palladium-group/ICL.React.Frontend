import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const newCMSContentRoles = async (values) => {
  return await axios.post(`${apiRoutes.cmscontentroles}`, values);
};

export const getCMSContentRoles = async () => {
  return await axios.get(`${apiRoutes.cmscontentroles}`);
};

export const GetCMSContentRolessByID = async (values) => {
    if (values.queryKey[0].length <= 0) { 
        return "";
    }
    return await axios.get(`${apiRoutes.cmscontentrolesbyid}` + "/" + values.queryKey[0] + "/" + values.queryKey[1]);
};
