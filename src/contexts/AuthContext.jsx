import { createContext, useContext, useState } from "react";
import axios from "axios";
import cookies from "cookie-universal";

const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const URL_AUTH = import.meta.env.VITE_API_URL + "/auth";
const ACCESS_TOKEN = cookies().get("accessToken");

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(ACCESS_TOKEN);

  const headerOpt = {
    Authorization: `Bearer ${token}`,
  };

  const handleApiSuccess = (data) => {
    console.log("Success -> ", data);
  };

  const handleApiError = (error) => {
    console.log("Error -> ", error);
  };

  const ApiAuth = {
    get: async () => {
      try {
        const response = await axios.get(URL_AUTH, headerOpt);
        handleApiSuccess(response.data);
        setIsAuth(true);
        return response.status;
      } catch (err) {
        handleApiError(err.response);
        return err.response.status;
      }
    },

    login: async (body) => {
      try {
        const response = await axios.post(URL_AUTH + "/login", body);
        handleApiSuccess(response.data);
        return response.status;
      } catch (err) {
        handleApiError(err.response);
        return err.response.data;
      }
    },

    register: async (body) => {
      try {
        const response = await axios.post(URL_AUTH + "/register", body);
        handleApiSuccess(response.data);
        setIsAuth(true);
      } catch (err) {
        handleApiError(err.response);
      }
    },
  };

  // --------- //
  return (
    <AuthContext.Provider value={{ isAuth, ApiAuth }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}
