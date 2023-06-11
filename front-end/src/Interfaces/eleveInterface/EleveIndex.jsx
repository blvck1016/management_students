import { useEffect, useState } from "react";
import axios from "axios";

const EleveIndex = () => {

  const user = JSON.parse(localStorage.getItem("student"));

  const [student, setstudent] = useState({})
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    const getStudent = async () =>{
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/students/${user.id}`
        );

        setstudent(data)
        setloading(false)
    }

    getStudent()
  },[])

  console.log(student)

  if (loading) return <h1 className="text-center mt-5">Loading..</h1>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Bonjour <span className="text-blue-500">{student[0].name}</span>
        </h1>
        <div className="text-gray-600">
          <p className="mb-2">
            Email : <span className="font-semibold">{student[0].email}</span>
          </p>
          <p className="mb-2">
            Majeur :{" "}
            <span className="font-semibold">{student[0].major.name}</span>
          </p>
          <p className="mb-2">
            Semestre :{" "}
            <span className="font-semibold">
              {student[0].major.department.name}
            </span>
          </p>
          {/* Add additional student information here */}
        </div>
      </div>
    </div>
  );
};

export default EleveIndex;
