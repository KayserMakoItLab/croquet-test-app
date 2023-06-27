const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/loader.gif" alt="loader" width={"100rem"} />
      <p style={{ color: "white" }}>Loading...</p>
    </div>
  );
};

export default Loader;
