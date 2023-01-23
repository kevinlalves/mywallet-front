import { createContext } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export const USER_STORAGE_KEY = "user";

export const UserProviderContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useLocalStorage(USER_STORAGE_KEY);

  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserProviderContext.Provider>
  );
};
