import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import getPostsData from "../services/getPostsData";
import PostDataContext from "../context/PostsDataContext";

export const usePostData = () => {
  const postsContext = useContext(PostDataContext);
  const posts = postsContext.postsData;
  const setPosts = (value) => {
    return postsContext.setPosts(value);
  };
  const {
    isLoading: fetchUsersPostsLoader,
    mutate: fetchPosts,
    isError: postsError,
  } = useMutation({
    mutationFn: getPostsData,
    onSuccess: (res) => {
      const rawPostsData = res?.data;
      rawPostsData.map((post) => {
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const no = getRandomInt(1, 50);

        function getRandomDate() {
          const year = getRandomInt(2000, 2023); // Generate a random year between 2000 and 2023
          const month = getRandomInt(1, 12); // Generate a random month between 1 and 12
          const day = getRandomInt(1, 28); // Generate a random day between 1 and 28 (adjust for months with fewer days)

          const formattedDate = `${year}-${month
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

          return formattedDate;
        }

        const randomDate = getRandomDate();
        post["date_created"] = randomDate;
        post["no_of_comments"] = no;

        return post;
      });

      setPosts(rawPostsData);
    },
  });
  return { posts, fetchUsersPostsLoader, fetchPosts, postsError, setPosts };
};
