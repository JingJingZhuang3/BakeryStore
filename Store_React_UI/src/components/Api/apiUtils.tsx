import axios from "axios";
import { API_BASE_URL } from "../../constants/constant";

export const retrieveAllitems= async () => {
  const response = await axios.get(
    API_BASE_URL + "/api/store/item"
  );

  return response.data;
};
