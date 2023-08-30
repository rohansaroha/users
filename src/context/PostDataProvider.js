import { useState } from "react";
import PostDataContext from "./PostsDataContext";

const PostDataProvider = (props) => {
  const [postsData, setPostsData] = useState([]);
  const setPosts = (posts) => {
    setPostsData(posts);
  };
  return (
    <PostDataContext.Provider value={{ postsData, setPosts }}>
      {props.children}
    </PostDataContext.Provider>
  );
};

export default PostDataProvider;
