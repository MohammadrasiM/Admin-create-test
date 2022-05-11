import React from 'react';


export default function Login(name,password,navigate,warningNotify,SuccessNotify){
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,"Authorization": "Bearer ZDk1NTBmMmQtM2U3ZS00M2YxLWIyZTgtNzA3OTcyZGE4YWY1"},
        body: JSON.stringify({
          "email":name,
          "password": password
      })
    };
    fetch("https://api.m3o.com/v1/user/Login", requestOptions)
.then(response => response.json())
.then(data =>{
 if(data?.session){
    
    localStorage.setItem("token",JSON.stringify(data?.session?.id))
    localStorage.setItem("userId",JSON.stringify(data?.session?.userId))
    SuccessNotify(data?.session?.userId)
    navigate("/dashboard")
    console.log(data.session,'SUCcess')}else{
      console.log(data,'failed')
      warningNotify()
    }
 }
  
  
 )
}