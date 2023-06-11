import { Link, useNavigate } from "react-router-dom"

const NavBarEle = () => {

  const navigate = useNavigate()


  const logout = () =>{
    localStorage.removeItem('student')
    localStorage.removeItem('student_token')
    navigate("/");
  }

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/etudiant"
                className="flex-shrink-0 text-white font-bold"
              >
                Etudiant
              </Link>
            </div>
            <div className="flex">
              <Link
                to="/etudiant/absences"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Vos absences
              </Link>

              <button
                onClick={() => logout()}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarEle
