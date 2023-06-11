
import NavBarEle from "./NavBarEle";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const EleveInterface = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('student_token')){
      navigate("/");
    }
  },[])

  
  return (

    <div>
      <NavBarEle/>
      <Outlet />
    </div>
  );
}

export default EleveInterface;
