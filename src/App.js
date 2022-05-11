
import './App.css';
import Routes from "./Routes/Routes"
import React,{useEffect} from 'react'
import { useNavigate,useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
function App() {
  const navigate=useNavigate()
  const location=useLocation()
useEffect(()=>{
console.log(location,'useLocation')
if(localStorage.getItem('token')){

  navigate(`${location.pathname=='/'?'/dashboard':location.pathname}`)
}else{ navigate("/") }


},[])



  return (
    <div className="App">
    <Routes/>
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
