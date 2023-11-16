import { createContext, useState } from "react";
import { Alert } from "react-bootstrap";

export const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [message, setMessage] = useState({
    visible: false,
    detail: {
      type: "success",
      message: '',
    },
  });

  const showSuccessMessage = (message) => {
    setMessage({
      visible: true,
      detail: {
        type: "success",
        message: message,
      },
    });
  };


  const showErrorMessage = (message) => {
    setMessage({
      visible: true,
      detail: {
        type: "danger",
        message: message,
      },
    });
  };

  return (
    <ContainerContext.Provider value={{ showSuccessMessage, showErrorMessage }}>
      {message.visible ? (
        <Alert key={message.detail.type} variant={message.detail.type}>
          {message.detail.message}
        </Alert>
      ) : (
        ""
      )}

      {children}
    </ContainerContext.Provider>
  );
};
