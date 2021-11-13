import { createContext, useContext, useState } from "react";
import Axios from "axios";
import Cookie from "cookie-universal";

export const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

export const API_URL = import.meta.env.VITE_API_URL;
export const NICKNAME = Cookie().get("nickName");
export const ACCESS_TOKEN = Cookie().get("accessToken");

const ApiProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [accessToken, setAccessToken] = useState(ACCESS_TOKEN);
  const [authUser, setAuthUser] = useState(NICKNAME);

  const handleSuccessLogin = (data) => {
    Cookie().set("accessToken", data.accessToken);
    Cookie().set("nickName", data.username);
    setAuthUser(data.username);
    setAccessToken(data.accessToken);
  };

  const AXIOS_OPT = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  const ApiAuth = {
    auth: async () => {
      return await Axios.get(API_URL + "/auth/auth", AXIOS_OPT);
    },
    login: async (data) => {
      return await Axios.post(API_URL + "/auth/login", data);
    },
    register: async (data) => {
      return await Axios.post(API_URL + "/auth/register", data);
    },
  };

  const ApiTasks = {
    readAll: async () => {
      return await Axios.get(API_URL + "/tasks", AXIOS_OPT);
    },
    delete: async (id) => {
      return await Axios.delete(API_URL + "/tasks/" + id, AXIOS_OPT);
    },
    update: async (id) => {
      return await Axios.put(API_URL + "/tasks/" + id, AXIOS_OPT);
    },
    add: async (id, data) => {
      return await Axios.post(API_URL + "/tasks/" + id, data, AXIOS_OPT);
    },
  };

  //-----------
  return (
    <ApiContext.Provider
      value={{
        authUser,
        isAuth,
        setIsAuth,
        ApiAuth,
        ApiTasks,
        handleSuccessLogin,
        AXIOS_OPT,
      }}
    >
      <>{children}</>
    </ApiContext.Provider>
  );
};

export default ApiProvider;
