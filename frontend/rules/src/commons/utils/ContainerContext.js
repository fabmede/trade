import { createContext, useState } from "react";
import { Alert, ProgressBar } from "react-bootstrap";

export const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [message, setMessage] = useState({
    visible: false,
    detail: {
      type: "success",
      message: "",
    },
  });

  const [hidden, setHidden] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const showSuccessMessage = (message) => {

    setShowAlert(true);

    setMessage({
      visible: true,
      detail: {
        type: "success",
        message: message,
      },
    });

    window.setTimeout(()=>{setShowAlert(false)},8000);

  };

  const showErrorMessage = (message) => {
    setShowAlert(true);
    setMessage({
      visible: true,
      detail: {
        type: "danger",
        message: message,
      },
    });

    window.setTimeout(()=>{setShowAlert(false)},8000);

  };

  const showLoading = () => {
    setHidden(false);
  };

  const hiddenLoading = () => {
    setHidden(true);
  };

  const showContent = () => {
    return !hidden ? "none" : "block";
  };


  return (
    <ContainerContext.Provider
      value={{
        showSuccessMessage,
        showErrorMessage,
        showLoading,
        hiddenLoading,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginLeft: "0%",
          marginRight: "0%",
        }}
        hidden={hidden}
      >
        <ProgressBar animated now={100} />
      </div>

      <div style={{ display: showContent() }}>
        {message.visible ? (
          <Alert key={message.detail.type} variant={message.detail.type}
          show={showAlert}>
            {message.detail.message}
          </Alert>
        ) : (
          ""
        )}

        {children}
        
      </div>
    </ContainerContext.Provider>
  );
};
