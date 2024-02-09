import { ButtonGroup } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import ButtonTableEdit from "./ButtonTableEdit";
import ButtonTableDetail from "./ButtonTableDetail";
import ButtonTableDelete from "./ButtonTableDelete";

function Table(props) {
  const resolveField = (data, field) => {
    var fieldHierarchy = new String(field).split(".");
    var dataValue = data;

    if (fieldHierarchy.length > 0) {
      fieldHierarchy.forEach((element) => {
        dataValue = dataValue[element];
      });
    }

    return dataValue;
  };


  return (
    <>
      <BTable striped bordered hover size="sm">
        <thead>
          <tr key={1}>
            <th
              style={{ width: "10px", textAlign: "center" }}
              hidden={props.hideCrudTableButom}
            >
              {" "}
              Actions
            </th>
            {props.columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index_row) => (
            <tr key={index_row}>
              <td align="center" hidden={props.hideCrudTableButom}>
                <ButtonGroup size="sm">
                  <ButtonTableEdit
                    onClick={props.callBackOnClickEditButton}
                    onClickParam={data}
                    hidden={props.hideCrudTableButonEdit}
                  ></ButtonTableEdit>
                  <ButtonTableDetail
                    onClick={props.callBackOnClickDetailButton}
                    onClickParam={data}
                    hidden={props.hideCrudTableButonDetail}
                  ></ButtonTableDetail>
                  <ButtonTableDelete
                    onClick={props.callBackOnClickRemoveButton}
                    onClickParam={data}
                    hidden={props.hiddenButtonCrudDelete}
                  ></ButtonTableDelete>
                </ButtonGroup>
              </td>
              {props.columns.map((column, index_column) => (
                <td key={index_row + "" + index_column}>
                  {resolveField(data, column.field)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </BTable>
    </>
  );
}

export default Table;
