import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function MajorMangerNav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("major_manager");
    localStorage.removeItem("major_manager_token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between text-white">
      <Link to="/chef-de-filiere" className="font-bold text-xl">
        Chef De filiere
      </Link>

      <div className="flex items-center">
        <button
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300 ml-4 flex items-center"
          onClick={() => logout()}
        >
          <MdLogout className="mr-1" />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default MajorMangerNav;
