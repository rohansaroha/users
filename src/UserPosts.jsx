import { useState, useEffect } from "react";
import axios from "axios";
import getUsersData from "./services/getUsersData";
import { useMutation } from "@tanstack/react-query";
import getPostsData from "./services/getPostsData";

const UserPosts = () => {
  const [userData, setUserData] = useState([]);
  const [posts, setPosts] = useState([]);

  const Posts = () => {
    console.log("posts", posts);
    return posts.map((post) => {
      return (
        <div key={post.index}>
          <div>{post.no_of_comments}</div>
        </div>
      );
    });
  };
  const handleClick = () => {
    const sortByItem = (arr, item) => {
      const length = arr.length;

      // const indexx = arr[0].indexOf(item);

      const index = arr[0].findIndex((element) => {
        return element === item;
      });
      if (index > 0) {
        for (let i = 0; i < length; i++) {
          // to shift the 0 the index element to last
          arr[i].splice(length, 1, arr[i][0]);

          //to shift the found element to o index
          arr[i].splice(0, 1, arr[i][index]);

          //to remove the element from it's origianl place
          arr[i].splice(index, 1);
        }
      }
    };
  };

  const {
    isLoading: fetchUserLoader,
    mutate: fetchUsers,
    isError: userError
  } = useMutation({
    mutationFn: getUsersData,
    onSuccess: (res) => {
      const rawData = res.data;
      setUserData(rawData);
    }
  });

  const {
    isLoading: fetchUsersPostsLoader,
    mutate: fetchPosts,
    isError: postsError
  } = useMutation({
    mutationFn: getPostsData,
    onSuccess: (res) => {
      const rawPostsData = res?.data;
      rawPostsData.map((post) => {
        const no = Math.floor(Math.random() * 50 + 1);
        post["no_of_comments"] = no;
        return post;
      });
      setPosts(rawPostsData);
    }
  });

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  if (fetchUsersPostsLoader || fetchUserLoader) return <div>loader</div>;
  if (postsError || userError) return <div>Error</div>;
  return (
    <>
      <button onClick={handleClick}> sort</button>
      {userData ? <div>{userData?.name}</div> : null}
      {posts ? <Posts /> : null}
    </>
  );
};

export default UserPosts;
