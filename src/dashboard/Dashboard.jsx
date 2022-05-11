import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Logout from './Logout'

export default function Dashboard( ){
    const navigate=useNavigate()




return ( <div className="former"><button onClick={()=>Logout(navigate)}>LogOut</button>  </div>)


}