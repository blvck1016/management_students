
import { Link } from "react-router-dom";

import backgroundImage from "../../../public/background.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-purple-500 text-3xl font-bold">School App</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <section className="flex-grow bg-opacity-75 bg-purple-600 text-white flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8">Welcome to School App</h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          accumsan nisl eu justo malesuada bibendum.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-500 p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">Teachers</h3>
            <p className="text-white-800">Total Teachers: 50</p>
            <p className="text-white-800">Active Teachers: 40</p>
            <p className="text-white-800">Pending Approvals: 10</p>
          </div>
          <div className="bg-blue-500 p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">Students</h3>
            <p className="text-white-800">Total Students: 500</p>
            <p className="text-white-800">Active Students: 450</p>
            <p className="text-white-800">Pending Approvals: 50</p>
          </div>
        </div>
        <Link
          to="/login"
          className="mt-8 bg-white hover:bg-purple-200 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 px-8 text-white text-center">
        <p>&copy; 2023 School App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
