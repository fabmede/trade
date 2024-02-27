import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Table from "../../commons/Table";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function GroupFunctionalityDetail(props) {
  const tradeGroupsApi = "http://localhost:8090/tradegroups/";
  const currentTradeGroup = props.tradeGroup;
  const [tradeFunctionalitiesRoles, setTradeFunctionalitiesRoles] = useState();

  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadTradeGroupTradeRolesFunctionaliesRoles();
  }, []);

  const loadTradeGroupTradeRolesFunctionaliesRoles = () => {
    axiosHttp
      .get(tradeGroupsApi + currentTradeGroup.id + "/tradeGroupTradeRoleFuncs")
      .then((res) => {
        setTradeFunctionalitiesRoles(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeGroupsApi, err);
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
        data={tradeFunctionalitiesRoles ? tradeFunctionalitiesRoles : []}
        columns={columns}
        hideCrudTableButtons={true}
      ></Table>
    </>
  );
}

export default GroupFunctionalityDetail;
