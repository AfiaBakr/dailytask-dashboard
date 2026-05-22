import { createContext, useContext, useEffect, useState } from "react";
import { setUser as saveUser } from "../utils/AuthProf";
import { fetchUser } from "../config/auth";

// Bug fix: renamed context to avoid collision with the provider component export
const profileContext = createContext();

// Bug fix: AuthContext was named same as the context variable — renamed provider to AuthProvider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const userLoad = async () => {
    try {
      const res = await fetchUser();
      if (res) {
        saveUser(res);
        setUser(res);
      }
    } catch (error) {
      console.log("Error fetching user:", error);
      setUser(null);
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
