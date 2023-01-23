import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export const USER_STORAGE_KEY = "user";

export const UserProviderContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useLocalStorage(USER_STORAGE_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserProviderContext.Provider>
  );
};
