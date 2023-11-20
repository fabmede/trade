import axios from "axios";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function AxiosHttp() {
  const { getUserLooged } = useContext(AppContext);
  const axiosHttp = axios.create({});

  axiosHttp.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] =
        "Bearer " + getUserLooged().user.access_token;
      config.headers["Accept"] = "application/json";
      return config;
    },
    (error) => {
      console.log('Error Fabio', error);
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => response,
    error => {
      console.log('Sessão expirada', error);

      if (error.response.status === 401) {
        console.log('Sessão expirada');
      }
    });

  return axiosHttp;
}
export default AxiosHttp;
