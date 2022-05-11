import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Loginer from "../Login/Login"
import Dashboard from "../dashboard/Dashboard"
import Error404 from "./Error404"
export default function AllRoutes( ){


return (<Routes>
 <Route path="/"  element={<Loginer />}  />
 <Route path="/dashboard" exact  element={<Dashboard />}  />
 <Route path="*" element={<Error404/>}/>
{/* <Route path="about" element={<About />} /> */}
</Routes>)


}