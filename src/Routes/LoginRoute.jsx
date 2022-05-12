import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginer from "../Login/Login";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<Loginer />} />
    </Routes>
  );
}
