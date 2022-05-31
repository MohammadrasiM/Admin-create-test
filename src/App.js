import "./App.css";
import Routes from "./Routes/Routes";
import LoginRoute from "./Routes/LoginRoute";
import React, { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout, Menu } from "antd";
function App() {
  const { Header, Content, Footer } = Layout;
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(
        `${location.pathname === "/" ? "/dashboard" : location.pathname}`
      );
    } else {
      navigate("/");
    }
  }, []);

  let links = [
    { name: "dashboard", path: "dashboard" },
    { name: "Admin panel", path: "create" },
  ];

  return (
    <div className="App">
      {localStorage.getItem("token") ? (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={
                location.pathname === "/dashboard"
                  ? "dashboard"
                  : location.pathname == "/create"
                  ? "Admin panel"
                  : null
              }
            >
              {" "}
              {links?.map((index) => {
                const key = index.name;
                return (
                  <Menu.Item key={key}>
                    <Link to={index.path}>{key}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Routes />
          </Content>
          <Footer style={{ textAlign: "center" }}>Smrm's test project</Footer>
        </Layout>
      ) : (
        <LoginRoute />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
