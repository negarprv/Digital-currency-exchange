import axios from "axios";

const BASE_ULR =
  "http://api.coinlayer.com/api/list?access_key=4c11b9def5d72fe2cf9aa0b2acb850e3";

const getCoin = async () => {
  const response = await axios.get(BASE_ULR);
  return response.data;
};

export { getCoin };
