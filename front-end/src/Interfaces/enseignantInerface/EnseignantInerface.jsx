
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBarEnsie from "./NavBarEnsie";

const EnseignantInerface = () => {

  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem("teacher_token")) {
      navigate("/login");
    }
  }, []);




  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarEnsie />

      <Outlet />
    </div>
  );
};

export default EnseignantInerface;
