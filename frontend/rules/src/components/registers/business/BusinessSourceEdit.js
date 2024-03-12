import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "@monaco-editor/react";
import CrudEdit from "../../commons/crud/CrudEdit";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function BusinessSourceEdit() {
  const api = "http://localhost:8090/tradebusiness/";
  const routeLink = "/registers/business/search";
  const location = useLocation();
  const id = location.state.tradeBusiness.id;
  const [editObject, setEditObject] = useState(location.state.tradeBusiness);
  
  const getData = () => {
    return editObject;
  };

  const callBackEditSuccess = (callBackEditSuccess) => {
    console.log("Calling callBackEditSuccess");
  };

const onclickGetValue = (editor) => {
  console.log('Editor.getValue();', editor); 
}
  return (
    <>
      <CrudEdit
        api={api}
        id={id}
        getData={getData}
        routeLink={routeLink}
        callBackEditSuccess={callBackEditSuccess}
        hiddenButtonCrudBackToSearch={true}
        hiddenButtonCrudBackToRemove={true}
      >
        <button onClick={onclickGetValue}> Get Value</button>
        <Editor
          height="90vh"
          defaultLanguage="java"
          defaultValue="  import java.util.Map; 

                        public class Rule1{
                            public Map<String,Object> execute(Map<String,Object> paramns ){
                                Map<String,Object>  returnMap = new HashMap(); 
                                // TODO Implemet
                                return returnMap; 
                            }
                        }"
          theme="vs-dark"
          onChange={onclickGetValue(this)}
        />
      </CrudEdit>
    </>
  );
}

export default BusinessSourceEdit;
