import { Outlet, useNavigate } from "react-router-dom";
import MajorMangerNav from "../../components/navbar/MajorMangerNav";
import { useEffect } from "react";

const ChefFiliereInterface = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("major_manager_token"))) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <MajorMangerNav />

      <div className="h-screen max-w-full bg-black">
        <div className="flex h-full">
          <div className="bg-gray-800 px-5 py-40vh h-full w-1/6">
            <ul className="text-white text-center mt-5">
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/chef-de-filiere/majors")}
              >
                Majors
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer  hover:bg-gray-700"
                onClick={() => navigate("/chef-de-filiere/matiere")}
              >
                Modules
              </li>
              <li
                className="transition-all duration-200 rounded-md py-4 text-bold cursor-pointer hover:bg-gray-700"
                onClick={() => navigate("/chef-de-filiere/enseignant")}
              >
                Enseignants
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

export default ChefFiliereInterface;
