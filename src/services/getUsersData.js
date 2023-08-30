import api from "./BaseUrl";
import paths from "./paths";

const getUsersData = () => {
  const response = api
    .get(paths.getUsers)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return response;
};

export default getUsersData;
