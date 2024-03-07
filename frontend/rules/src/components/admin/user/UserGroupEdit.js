import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import Table from "../../commons/Table";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import FormImputSelect from "../../commons/FormImputSelect";

function UserGroupEdit(props) {

  const routeLink = "/admin/user/search";
  const tradeUserApi = "http://localhost:8090/tradeusers/";
  const tradeGroupApi = "http://localhost:8090/tradegroups/";
  const currentTradeUser = props.tradeUser;

  const [tradeUserGroups, setTradeUserGroups] = useState();
  const [tradeGroups, setTradeGroups] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);
  const axiosHttp = AxiosHttp();
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    loadTradeUserGroup();
    loadTradeGroups();
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

  const loadTradeGroups = () => {
    axiosHttp
      .get(tradeGroupApi)
      .then((res) => {
        setTradeGroups(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeGroupApi, err);
      })
      .finally(() => {
        console.debug("Finally call " + tradeGroupApi);
      });
  };


  return (
    <>
        Groups para incluir
    </>
  );
}

export default UserGroupEdit;
