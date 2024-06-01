import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "@monaco-editor/react";
import CrudEdit from "../../commons/crud/CrudEdit";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import FormImputSelect from "../../commons/FormImputSelect";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormImputTextArea from "../../commons/FormImputTextArea";

function BusinessSourceEdit() {
  const api = "http://localhost:8090/tradebusiness/";
  const routeLink = "/registers/business/search";
  const tradeBusinessLanguagesApi = api + "tradebusinesslanguages";
  const location = useLocation();
  const id = location.state.tradeBusiness.id;
  const [sourceValue, setSourceValue] = useState(
    location.state.tradeBusiness.source
  );
  const axiosHttp = AxiosHttp();
  const { showSuccessMessage, showErrorMessage } = useContext(ContainerContext);
  const [editObject, setEditObject] = useState({});
  const [tradeBusinessLanguages, setTradeBusinessLanguages] = useState();

  //https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/

  useEffect(() => {
    loadTradeBusinessLanguages();
  }, []);

  const getData = () => {
    editObject["source"] = sourceValue;
    return editObject;
  };

  const loadTradeBusinessLanguages = () => {
    axiosHttp
      .get(tradeBusinessLanguagesApi)
      .then((res) => {
        console.log('res', res)
        setTradeBusinessLanguages(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeBusinessLanguagesApi, err);
      })
      .finally(() => {
        console.debug("Finally call " + tradeBusinessLanguagesApi);
      });
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

  const onClickCompileExecute = () => {
    axiosHttp
      .put(api + "tradebusinesssource/compileandexecute", getData())
      .then((res) => {
        let newValue = editObject;
        newValue.output = res.data;
        console.log('res.data', res.data);
        setEditObject((oldValue) => ({
          ...oldValue,
          ...newValue,
        }));
      })
      .catch((err) => {
        showErrorMessage(
          "There was an error while trying call [" + api + "tradebusinesssource/compileandexecute] !"  
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
        <Container>
          <Row>
            <Col>
              <FormImputSelect
                label="Language"
                attributeName="tradeBusinessLanguageDto"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
                objectList={tradeBusinessLanguages}
                objectListValue="name"
                objectListShow="name"
              ></FormImputSelect>

              <Editor
                width={`100%`}
                height="90vh"
                defaultLanguage="javascript"
                value={sourceValue}
                theme="vs-dark"
                onChange={setSourceValue}
              />
            </Col>
            <Col xs={4}>
              <FormImputTextArea
                disabled={true}
                rows={15}
                style={{ backgroundColor: "black", color : "white" }}
                className={".text-success"}
                label="Output"
                attributeName="output"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              />

              <FormImputTextArea
                disabled={false}
                rows={10}
                label="Input"
                attributeName="jsonStringParameter"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              />

              <hr></hr>

              <Button
                onClick={onClickCompileExecute}
                size="sm"
                style={{ textAlign: "left" }}
              >
                Compile and Execute
              </Button>
            </Col>
          </Row>
        </Container>
      </CrudEdit>
    </>
  );
}

export default BusinessSourceEdit;
