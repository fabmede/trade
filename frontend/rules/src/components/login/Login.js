function Login(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <button onClick={props.loginEvent}>Sign in with Google 🚀 </button>
    </div>
  );
}

export default Login;
