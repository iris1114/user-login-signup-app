import { useEffect, useState } from "react";
import { getUser } from "../../utils/api";

const useUser = (userId) => {
  const [initUser, setInitUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUser(userId.userId)
      .then((res) => {
        setInitUser(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return {
    initUser,
    loading: isLoading,
    error
  };
};

export default useUser;
