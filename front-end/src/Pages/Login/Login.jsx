import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(data.user));
 

      if (data.user.role === "admin") {
        navigate("/admin");
      } else if (data.user.role === "enseignant") {
        navigate("/EnseignantInerface");
      } else if (data.user.role === "eleve") {
        navigate("/EleveInterface");
      } else {
        navigate("not role");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-800">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
