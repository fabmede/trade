import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Table from "../../commons/Table";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function UserGroupDetail(props) {
  const tradeUserApi = "http://localhost:8090/tradeusers/";
  const currentTradeUser = props.tradeUser;
  const [tradeUserGroups, setTradeUserGroups] = useState();

  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadTradeUserGroup();
  }, []);

  const loadTradeUserGroup = () => {
    axiosHttp
      .get(tradeUserApi + currentTradeUser.email + "/tradeUserTradeGroups")
      .then((res) => {
        setTradeUserGroups(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeUserApi, err);
      })
      .finally(() => {});
  };

  const columns = [{ header: "Group", field: "tradeGroupDto.name" }];

  return (
    <>
      <Table
        data={tradeUserGroups ? tradeUserGroups : []}
        columns={columns}
        hideCrudTableButtons={true}
      ></Table>
    </>
  );
}

export default UserGroupDetail;
