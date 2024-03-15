import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "@monaco-editor/react";
import CrudEdit from "../../commons/crud/CrudEdit";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function BusinessSourceEdit() {
  const api = "http://localhost:8090/tradebusiness/";
  const routeLink = "/registers/business/search";
  const location = useLocation();
  const id = location.state.tradeBusiness.id;
  const [sourceValue, setSourceValue] = useState(location.state.tradeBusiness.source);
  const axiosHttp = AxiosHttp();
  const { showSuccessMessage, showErrorMessage } = useContext(ContainerContext);

  const getData = () => {
    let data = {
      source: sourceValue,
    };
    return data;
  };

  const onClickSave = () => {
    axiosHttp
      .put(api + id + "/tradebusinesssource", getData())
      .then((res) => {
        showSuccessMessage("Register success changed! ");
      })
      .catch((err) => {
        showErrorMessage(
          "There was an error while trying to change the register! "
        );
      });
  };

  return (
    <>
      <CrudEdit
        api={api}
        id={id}
        getData={getData}
        routeLink={routeLink}
        hiddenButtonCrudBackToSearch={true}
        hiddenButtonCrudBackToRemove={true}
        onClickSave={onClickSave}
      >
        <Editor
          height="90vh"
          defaultLanguage="java"
          value={sourceValue}
          theme="vs-dark"
          onChange={setSourceValue}
        />
      </CrudEdit>
    </>
  );
}

export default BusinessSourceEdit;
