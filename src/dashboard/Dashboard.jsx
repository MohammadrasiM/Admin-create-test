import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { PoweroffOutlined } from "@ant-design/icons";
export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="former" style={{ position: "unset" }}>
      <div
        style={{
          display: "flex",

          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <PoweroffOutlined
          style={{
            cursor: "pointer",
            fontSize: "5em",
          }}
          onClick={() => Logout(navigate)}
        />
        <h1>Logout</h1>
      </div>
      {/* <button onClick={() => Logout(navigate)}>LogOut</button>{" "} */}
    </div>
  );
}
