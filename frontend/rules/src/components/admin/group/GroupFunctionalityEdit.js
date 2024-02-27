import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import Table from "../../commons/Table";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function GroupFunctionalityEdit(props) {
  const routeLink = "/admin/group/search";
  const tradeGroupsApi = "http://localhost:8090/tradegroups/";
  const tradeFunctionalityApi = "http://localhost:8090/tradefunctionalities/";
  const tradeRolesApi = "http://localhost:8090/traderoles/";
  const currentTradeGroup = props.tradeGroup;

  const [tradeFunctionalitiesRoles, setTradeFunctionalitiesRoles] = useState();
  const [tradeFunctionalities, setTradeFunctionalities] = useState();
  const [tradeRoles, setTradeRoles] = useState([]);
  const [functionalitySelected, setFunctionalitySelected] = useState();
  const [roleSelected, setRoleSelected] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);
  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadTradeGroupTradeRolesFunctionaliesRoles();
    loadTradeFunctionalities();
    loadTradeRoles();
  }, []);

  const loadTradeGroupTradeRolesFunctionaliesRoles = () => {
    console.log("currentTradeGroup", currentTradeGroup);
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

  const loadTradeFunctionalities = () => {
    axiosHttp
      .get(tradeFunctionalityApi)
      .then((res) => {
        setTradeFunctionalities(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeFunctionalityApi, err);
      })
      .finally(() => {
        console.debug("Finally call " + tradeFunctionalityApi);
      });
  };

  const loadTradeRoles = () => {
    axiosHttp
      .get(tradeRolesApi)
      .then((res) => {
        setTradeRoles(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeRolesApi, err);
      })
      .finally(() => {});
  };

  const columns = [
    { header: "Functionality", field: "tradeFunctionalityDto.name" },
    { header: "Role", field: "tradeRoleDto.name" },
  ];

  const onClickSaveTradeFunctionalitiesRoles = () => {
    var tradeGroupTradeRoleFuncDto = {
      tradeGroupDto: {
        id: currentTradeGroup.id,
      },
      tradeFunctionalityDto: {
        id: functionalitySelected.id,
      },
      tradeRoleDto: {
        id: roleSelected.id,
      },
    };

    axiosHttp
      .put(
        tradeGroupsApi + currentTradeGroup.id + "/tradeGroupTradeRoleFuncs",
        tradeGroupTradeRoleFuncDto
      )
      .then((res) => {
        tradeFunctionalitiesRoles.push(res.data);
        setShowSaveConfirm(false);
      })
      .catch((err) => {
        console.error("Error save", err);
      })
      .finally(() => {
        console.log("Finally save");
      });
  };

  const onClickRemoveTradeFunctionalitiesRoles = (pCurrentTradeGroup) => {
    axiosHttp
      .delete(
        tradeGroupsApi +
          pCurrentTradeGroup.tradeGroupDto.id +
          "/tradeGroupTradeRoleFuncs",
        { data: pCurrentTradeGroup }
      )
      .then((res) => {
        const deleteByIds = (tradeFunctionalityDtoId, tradeRoleDtoId) => {
          setTradeFunctionalitiesRoles((oldValues) => {
            return oldValues.filter(
              (element) =>
              {
                let elementId = element.tradeFunctionalityDto.id + "_" + element.tradeRoleDto.id; 
                let parameterId = tradeFunctionalityDtoId + "_" + tradeRoleDtoId; 
                return parameterId !== elementId;
              }
            );
          });
        };

        deleteByIds(
          pCurrentTradeGroup.tradeFunctionalityDto.id,
          pCurrentTradeGroup.tradeRoleDto.id
        );
      })
      .catch((err) => {
        console.error("Error delete", err);
      })
      .finally(() => {
        console.log("Finally delete");
      });
  };

  return (
    <>
      <Table
        data={tradeFunctionalitiesRoles ? tradeFunctionalitiesRoles : []}
        columns={columns}
        hideCrudTableButonDetail={true}
        hideCrudTableButonEdit={true}
        callBackOnClickRemoveButton={onClickRemoveTradeFunctionalitiesRoles}
      ></Table>
      <ButtonGroup size="sm">
        <Button variant="primary" type="link" onClick={handleSaveShow}>
          {" "}
          <BsFillPlusSquareFill /> Add Item
        </Button>{" "}
      </ButtonGroup>

      <Modal show={showSaveConfirm} onHide={handleSaveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add / Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrudEdit
            api={tradeGroupsApi}
            id={currentTradeGroup.id}
            getData={currentTradeGroup}
            routeLink={routeLink}
            hiddenButtonCrudDelete={true}
            hiddenButtonCrudBackToSearch={true}
            onClickSave={onClickSaveTradeFunctionalitiesRoles}
          >
            <Form>
              <Form.Group className="mb-3" controlId="tradeGroup.nameId">
                <Form.Label size="sm">Functionality</Form.Label>
                <Form.Select
                  aria-label="Functionality"
                  size="sm"
                  onChange={(e) => {
                    const c = tradeFunctionalities?.find(
                      (x) => String(x.id) === String(e.target.value)
                    );
                    setFunctionalitySelected(c);
                  }}
                >
                  <option>Select one Functionality</option>
                  {tradeFunctionalities
                    ? tradeFunctionalities.map((functionality, index) => (
                        <option
                          reavalue={functionality.id}
                          key={index}
                          value={functionality.id}
                        >
                          {functionality.description}
                        </option>
                      ))
                    : null}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="tradeGroup.nameId">
                <Form.Label size="sm">Role</Form.Label>
                <Form.Select
                  aria-label="Role"
                  size="sm"
                  onChange={(e) => {
                    const c = tradeRoles?.find(
                      (x) => String(x.id) === String(e.target.value)
                    );
                    setRoleSelected(c);
                  }}
                >
                  <option>Select one Role</option>
                  {tradeRoles
                    ? tradeRoles.map((role, index) => (
                        <option reavalue={role.id} key={index} value={role.id}>
                          {role.description}
                        </option>
                      ))
                    : null}
                </Form.Select>
              </Form.Group>
            </Form>
          </CrudEdit>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default GroupFunctionalityEdit;
