import PostCard from "./PostCard";
import DisableElevation from "./ButtonsGroup";
import { usePostData } from "../hooks/usePostsData";

const Posts = () => {
  const { posts } = usePostData();
  return (
    <>
      <DisableElevation />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "1rem",
          justifyContent: "space-around",
        }}
      >
        {posts.map((post) => {
          return <PostCard key={post.name} data={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
