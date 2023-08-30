import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import getUsersData from "../services/getUsersData";

export const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const {
    isLoading: fetchUserLoader,
    mutate: fetchUsers,
    isError: userError,
  } = useMutation({
    mutationFn: getUsersData,
    onSuccess: (res) => {
      const rawData = res.data;
      setUserData(rawData);
    },
  });
  return { fetchUsers, fetchUserLoader, userError, userData, setUserData };
};
