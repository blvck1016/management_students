
const NavBarEnsie = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white font-bold">Teacher</div>
            </div>
            <div className="flex">
              <a
                href="/EnseiMatieres"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Absences
              </a>
              <a
                href="/EnseiProfile"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </a>

              <a
                href="/Logout"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarEnsie
