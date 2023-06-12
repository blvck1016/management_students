import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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

      if (data.user.role_id === 1) {
        localStorage.setItem("admin", JSON.stringify(data.user));
        localStorage.setItem("admin_token", JSON.stringify(data.token));
        navigate("/admin");
      } else if (data.user.role_id === 2) {
        localStorage.setItem("teacher", JSON.stringify(data.user));
        localStorage.setItem("teacher_token", JSON.stringify(data.token));
        if(password === 'password'){
          navigate("/enseignant-update-password");
        }else{
          navigate("/enseignant");
        }
      } else if (data.user.role_id === 3) {
        localStorage.setItem("student", JSON.stringify(data.user));
        localStorage.setItem("student_token", JSON.stringify(data.token));
         if (password === "password") {
           navigate("/etudiant-update-password");
         } else {
           navigate("/etudiant");
         }
      } else if(data.user.role_id === 4) {
         localStorage.setItem(
           "major_departement",
           JSON.stringify(data.user)
         );
         localStorage.setItem(
           "major_departement_token",
           JSON.stringify(data.token)
         );
          if (password === "password") {
            navigate("/chef-departement-update-password");
          } else {
            navigate("/chef-de-departement");
          }
      }else if(data.user.role_id === 5){
        localStorage.setItem("major_manager", JSON.stringify(data.user));
        localStorage.setItem("major_manager_token", JSON.stringify(data.token));
         if (password === "password") {
           navigate("/chef-filiere-update-password");
         } else {
           navigate("/chef-de-filiere");
         }
      }else{
        navigate('/')
      }

      
    } catch (error) {
      console.log(error)
      alert('uncorrect email or password')
      setEmail("")
      setPassword("")
    }
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-purple-700 to-indigo-800">
        <Link to="/" className="p-5 text-bold text-white">
          Home
        </Link>
      </div>
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
    </>
  );
}

export default Login;
