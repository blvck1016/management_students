import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBarEnsie from "./NavBarEnsie";

const EnseignantInerface = () => {


  const [module, setModule] = useState({});
  const [loading, setloading] = useState(true)

  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(user.id)

  useEffect(() => {
    // Fetch the modules data for the teacher from the API
    const fetchModules = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/teacher/modules/${user?.id}`
        );
        console.log('return',data)
        setModule(data);
        setloading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchModules();
  }, []);


  if (loading) return <h1>loading..</h1>

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarEnsie />

      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Hello, Professor <span className="text-green-500">{user.name}</span>
        </h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Vos Modules :</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{module?.name}</h3>
              <p className="text-gray-600 mb-2">
                Semester: {module?.semester?.name}
              </p>
              <p className="text-gray-600 mb-2">
                Filière: {module?.semester?.major?.name}
              </p>
              <div className="flex justify-end">
                <Link
                  to={`/modules/${module.id}/students`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Students
                </Link>
              </div>
            </div>
            {/* Add more module cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnseignantInerface;
