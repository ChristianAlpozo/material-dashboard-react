import clientAxios from "../config/axios";

const getLeadsPerMonth = async () => {
  const response = await clientAxios.get(`/oportunidades/getLeadsPerMonth`);
  return response.data;
};

export default getLeadsPerMonth;
