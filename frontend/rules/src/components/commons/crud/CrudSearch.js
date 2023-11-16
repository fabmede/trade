import axios from "axios";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup } from "react-bootstrap";
import { BsArrowReturnLeft, BsSave2, BsTrash2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import { AppContext } from "../../../commons/utils/AppContext";

function CrudSearch(props) {

  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);
  const {getUserLooged} = useContext(AppContext);

  const headers = {
    Authorization: `Bearer ${getUserLooged().user.access_token}`,
    Accept: "application/json",
  };

  const search = () => {

    axios
      .get(props.api, {
        headers: {
          Authorization: `Bearer ${getUserLooged().user.access_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log("Success call");
        console.log(res.data);
        setFunctionalities(res.data);
      })
      .catch((err) => {
        console.log("Error call");
        console.log(err);
      });
      

  };

  return (
    <>

      {props.children}
   
    </>
  );
}

export default CrudSearch;
