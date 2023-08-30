import { useEffect } from "react";
import UserCard from "./UserCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Posts from "./Posts";
import { useUserData } from "../hooks/useUserData";
import { usePostData } from "../hooks/usePostsData";

const UserPosts = () => {
  const { fetchUsers, fetchUserLoader, userError, userData } = useUserData();
  const { fetchUsersPostsLoader, fetchPosts, postsError, posts } =
    usePostData();

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  if (fetchUsersPostsLoader || fetchUserLoader)
    return <CircularProgress color="inherit" />;

  if (postsError || userError) return <div>Error</div>;

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh", height: "100%" }}>
          {userData ? <UserCard data={userData} /> : null}
          {posts ? <Posts /> : null}
        </Box>
      </Container>
    </>
  );
};

export default UserPosts;
