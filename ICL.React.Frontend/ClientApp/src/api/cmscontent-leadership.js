import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const newCMSContentLeadership = async (values) => {
  return await axios.post(`${apiRoutes.cmscontentleadership}`, values);
};

export const getCMSContentLeadership = async () => {
  return await axios.get(`${apiRoutes.cmscontentleadership}`);
};
export const getCMSContentLeadershipByRol = async (values) => {
    if (values.queryKey[0].length <= 0) {
        return "";
    }
    return await axios.get(`${apiRoutes.cmscontentleadershipbyrol}` + "/" + values.queryKey[0]);
};
export const getCMSContentLeadershipByName = async (values) => {
    if (values.queryKey[0].length <= 0) {
        return "";
    }
    return await axios.get(`${apiRoutes.cmscontentleadershipbyname}` + "/" + values.queryKey[0]);
};