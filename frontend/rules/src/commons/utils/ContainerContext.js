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
          marginTop: "2%",
        }}
        hidden={hidden}
      >
        <ProgressBar animated now={100} />
      </div>

      <div style={{ display: showContent() }}>
        {message.visible ? (
          <Alert key={message.detail.type} variant={message.detail.type}>
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
