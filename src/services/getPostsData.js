import api from "./BaseUrl";
import paths from "./paths";

const getPostsData = () => {
  const response = api
    .get(paths.getPosts)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return response;
};

export default getPostsData;
