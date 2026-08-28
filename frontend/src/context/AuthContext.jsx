import { createContext, useContext, useEffect, useState } from "react";
import { setUser as saveUser } from "../utils/AuthProf";
import { fetchUser } from "../config/auth";

const profileContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const userLoad = async () => {
    try {
      const res = await fetchUser();
      if (res) {
        saveUser(res);
        setUser(res);
        return res;
      }
      setUser(null);
      return null;
    } catch (error) {
      console.log("Error fetching user:", error);
      setUser(null);
      return null;
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    userLoad();
  }, []);

  return (
    <profileContext.Provider value={{ user, setUser, loader, userLoad }}>
      {children}
    </profileContext.Provider>
  );
};

export const useAuthContext = () => useContext(profileContext);
