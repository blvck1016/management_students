import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function DashboardNav() {
  const navigate = useNavigate();

  const logout  = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between text-white">
      <Link to="/admin" className="font-bold text-xl">
        Dashboard
      </Link>

      <div className="flex items-center">
        <button
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          onClick={() => navigate("/admin/profile")}
        >
          Profile
        </button>

        <button
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300 ml-4 flex items-center"
          onClick={() => logout("/")}
        >
          <MdLogout className="mr-1" />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default DashboardNav;
