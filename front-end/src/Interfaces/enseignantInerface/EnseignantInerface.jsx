
import { Outlet } from "react-router-dom";
import NavBarEnsie from "./NavBarEnsie";

const EnseignantInerface = () => {




  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarEnsie />

      <Outlet />
    </div>
  );
};

export default EnseignantInerface;
