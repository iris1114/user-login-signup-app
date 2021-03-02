import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";

const useUserList = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    loading: isLoading,
    error
  };
};

export default useUserList;
