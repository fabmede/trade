import axios from "axios";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { ContainerContext } from "./ContainerContext";

function AxiosHttp() {
  const { getUserLooged } = useContext(AppContext);
  const { showErrorMessage, showLoading, hiddenLoading } =
    useContext(ContainerContext);

  const axiosHttp = axios.create({});

  axiosHttp.interceptors.request.use(
    (config) => {
      showLoading();
      config.headers["Authorization"] =
        "Bearer " + getUserLooged().user.access_token;
      config.headers["Accept"] = "application/json";
      return config;
    },
    (error) => {
      hiddenLoading();
      console.error("Error on proctcess reques", error);
      Promise.reject(error);
      throw error;
    }
  );

  axiosHttp.interceptors.response.use(
    (response) => {
      hiddenLoading();
      return response;
    },
    (error) => {
      hiddenLoading();
      if (error.response.status === 401) {
        showErrorMessage("Session Expired, please login again!");
      } else {
        showErrorMessage("Error on proccess request");
      }
      throw error;
    }
  );

  return axiosHttp;
}
export default AxiosHttp;
