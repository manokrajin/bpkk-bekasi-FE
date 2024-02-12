import axios from "axios";

const baseUrlLocal = "http://127.0.0.1:3333/v1";
const baseUrlServer ="http://192.168.220.81/api/v1/";

let baseUrl = baseUrlServer;

export const loadAllCompanyProfile = async () => {
  try {
    const response = await axios.get(`${baseUrl}/company-profile`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadTkmPemulaPost = async () => {
  try {
    const response = await axios.get(`${baseUrl}/post`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadCarouselImage = async () => {
  try {
    const response = await axios.get(`${baseUrl}/media`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
