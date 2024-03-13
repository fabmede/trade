import "bootstrap/dist/css/bootstrap.min.css";
import {  useEffect, useState } from "react";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import Table from "../../commons/Table";
import { useLocation } from "react-router-dom";

function BusinessSourceDetail() {
  const location = useLocation();
  const api = "http://localhost:8090/tradebusiness/";
  const id = location.state.tradeBusiness.id;
  const [tradeBusinessHist, setTradeBusinessHist] = useState();

  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadTradeBusinessHist();
  }, []);

  const loadTradeBusinessHist = () => {
    axiosHttp
      .get(api + id + "/tradebusinesssource")
      .then((res) => {
        setTradeBusinessHist(res.data);
      })
      .catch((err) => {
        console.error("Error call " + api, err);
      })
      .finally(() => {});
  };

  const columns = [
    { header: "Date", field: "date" },
    { header: "Source", field: "tradeBusinessDto.source" }
  ];

  return (
    <>
      <Table
        data={tradeBusinessHist ? tradeBusinessHist : []}
        columns={columns}
        hideCrudTableButtons={true}
      ></Table>
    </>
  );
}

export default BusinessSourceDetail;
