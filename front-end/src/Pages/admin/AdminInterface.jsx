import { Outlet, useNavigate } from "react-router-dom";
import DashboardNav from "../../components/navbar/DashboardNav";
import { useEffect } from "react";

const AdminInterface = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if (!localStorage.getItem("admin_token")) {
      navigate("/login");
    }
  },[])

  return (
    <>
      <DashboardNav />

      <div className="h-screen max-w-full bg-black">
        <div className="flex h-full">
          <div className="bg-gray-800 px-5 py-40vh h-full w-1/6">
            <ul className="text-white text-center mt-5">
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/admin/classes")}
              >
                Departements
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/admin/majors")}
              >
                Filieres
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer  hover:bg-gray-700"
                onClick={() => navigate("/admin/matiere")}
              >
                Modules
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/admin/enseignant")}
              >
                Enseignants
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/admin/eleves")}
              >
                Eleves
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/admin/all")}
              >
                Admins
              </li>
            </ul>
          </div>
          <div className="h-full w-5/6 bg-gray-200 px-5 py-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInterface;
