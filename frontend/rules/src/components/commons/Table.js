import { Button, ButtonGroup } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { BsBrushFill } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";

function Table(props) {
  return (
    <>
      <BTable striped bordered hover size="sm">
        <thead>
          <tr key={1}>
            <th style={{ width: "10px", textAlign: "center" }}> Actions</th>
            {props.columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((data) => (
            <tr key={data.id}>
              <td align="center">
                <ButtonGroup size="sm">
                  <Button
                    variant="link"
                    onClick={() => {
                      props.callBackOnClickEditButton(data);
                    }}
                  >
                    <BsBrushFill />
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => {
                      props.callBackOnClickDetailButton(data);
                    }}
                  >
                    <BsChatLeftText />
                  </Button>
                </ButtonGroup>
              </td>
              {props.columns.map((column, index) => (
                <td key={index}>{data[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </BTable>
    </>
  );
}

export default Table;
