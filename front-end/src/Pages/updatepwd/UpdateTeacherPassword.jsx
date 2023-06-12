import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateTeacherPassword = () => {
  const [password, setPassword] = useState("");

  const user = JSON.parse(localStorage.getItem("teacher"));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request using Axios
      const response = await axios.post(
        `http://127.0.0.1:8000/api/update-password/${user.id}`,
        {
          password,
        }
      );

      // Handle the response
      console.log(response.data);
      navigate("/enseignant");
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Update Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-lg">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTeacherPassword;
