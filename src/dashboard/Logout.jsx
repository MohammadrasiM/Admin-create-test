import React from 'react';


export default function Logout(navigate){
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,"Authorization": "Bearer ZDk1NTBmMmQtM2U3ZS00M2YxLWIyZTgtNzA3OTcyZGE4YWY1"},
        body: JSON.stringify({
            "sessionId":JSON.parse(localStorage.getItem('token')) 
      })
    };
    fetch("https://api.m3o.com/v1/user/Logout", requestOptions)
.then(response => response.json())
.then(data =>{

  if(data.code==500){ console.log(data,'failed')
  localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/")}
  else if(data?.session){
    
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/")
    console.log(data.session,'SUCcess')}else{localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/")
    console.log(data.session,'SUCcess')}
 }
  
  
 )
}