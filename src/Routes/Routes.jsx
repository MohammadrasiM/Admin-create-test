import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Error404 from "./Error404";
import AdminCreate from "../Admin/AdminCreate";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/create" exact element={<AdminCreate />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
