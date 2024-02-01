import axios from "axios";
const apiEndPt = "http://10.0.2.2:3000/api";

const getMenuItems = async () => {
  const menuItemsResp = await axios
    .get(`${apiEndPt}/menu`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return menuItemsResp;
};

export { getMenuItems };
