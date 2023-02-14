import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const newCMSContentImpact = async (values) => {
  return await axios.post(`${apiRoutes.cmscontentimpact}`, values);
};

export const getCMSContentImpact = async () => {
  return await axios.get(`${apiRoutes.cmscontentimpact}`);
};

export const getCMSContentImpactByRol = async (values) => {
    if (values.queryKey[0].length <= 0) {
        return "";
    }
    return await axios.get(`${apiRoutes.cmscontentimpactbyrol}` + "/" + values.queryKey[0]);
};

export const getCMSContentImpactByName = async (values) => {
    if (values.queryKey[0].length <= 0) {
        return "";
    }
    return await axios.get(`${apiRoutes.cmscontentimpactbyname}` + "/" + values.queryKey[0]);
};