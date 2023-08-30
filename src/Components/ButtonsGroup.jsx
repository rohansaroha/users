import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { usePostData } from "../hooks/usePostsData";

export default function DisableElevation() {
  const { posts, setPosts } = usePostData();
  const [sort, setSort] = useState("aesc");
  const [sortDate, setSortDate] = useState("aesc");
  const handleNoOfComments = () => {
    const duplicatePosts = JSON.parse(JSON.stringify(posts));
    let sortedArr;
    if (sort == "aesc") {
      sortedArr = duplicatePosts.sort(
        (a, b) => a.no_of_comments - b.no_of_comments
      );
      setSort("desc");
    } else {
      sortedArr = duplicatePosts.sort(
        (a, b) => b.no_of_comments - a.no_of_comments
      );
      setSort("aesc");
    }

    setPosts(sortedArr);
  };

  const handleByDate = () => {
    const duplicatePosts = JSON.parse(JSON.stringify(posts));
    let sortedArr;
    if (sortDate == "aesc") {
      sortedArr = duplicatePosts.sort(
        (a, b) => new Date(a.date_created) - new Date(b.date_created)
      );
      setSortDate("desc");
    } else {
      sortedArr = duplicatePosts.sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      );
      setSortDate("aesc");
    }

    setPosts(sortedArr);
  };
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      sx={{ gap: "1rem", padding: "1rem" }}
    >
      <Button onClick={handleNoOfComments}>Sort By {sort}</Button>
      <Button onClick={handleByDate}>Sort By {sortDate} Date</Button>
    </ButtonGroup>
  );
}
