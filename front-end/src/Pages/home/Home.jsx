import { Link } from "react-router-dom";

import backgroundImage from "../../../public/background.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height:'100%'
      }}
    >
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-purple-500 text-3xl font-bold">School App</h1>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <section className="flex-grow bg-opacity-75 text-white flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8">Welcome to School App</h2>
        <p className="text-lg mb-12">
          Start your educational journey with School App. Access a wide range of
          features and resources to enhance your learning experience.
        </p>
   
        <Link
          to="/login"
          className="my-8 bg-white hover:bg-purple-200 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* Card Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Admin Card */}
          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Admin</h2>
            <p className="text-gray-600 mt-2">Manage the school system</p>
          </div>

          {/* Teacher Card */}
          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Teacher</h2>
            <p className="text-gray-600 mt-2">Teach and engage with students</p>
          </div>

          {/* Student Card */}
          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Student</h2>
            <p className="text-gray-600 mt-2">Learn and grow academically</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 px-8 text-white text-center">
        <p>&copy; 2023 School App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
