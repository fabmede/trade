import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Table from "../../commons/Table";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function UserFunctionalityDetail(props) {


  const tradeUserApi = "http://localhost:8090/tradeusers/";
  const currentTradeUser = props.tradeUser;
  const [tradeUserFunctionalitiesRoles, setTradeUserFunctionalitiesRoles] = useState();


  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadTradeUserTradeRoleFuncs();
  }, []);

  const loadTradeUserTradeRoleFuncs = () => {
    axiosHttp
      .get(tradeUserApi + currentTradeUser.email + "/tradeUserTradeRoleFuncs")
      .then((res) => {
        setTradeUserFunctionalitiesRoles(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeUserApi, err);
      })
      .finally(() => {});
  };

 
  const columns = [
    { header: "Functionality", field: "tradeFunctionalityDto.name" },
    { header: "Role", field: "tradeRoleDto.name" },
  ];

  return (
    <>
      <Table
        data={tradeUserFunctionalitiesRoles ? tradeUserFunctionalitiesRoles : []}
        columns={columns}
        hideCrudTableButtons={true}
      ></Table>
    </>
  );
}

export default UserFunctionalityDetail;
