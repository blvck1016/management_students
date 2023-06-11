import { useState, useEffect } from "react";
import axios from "axios";

const AbsencesForm = () => {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [studentNames, setStudentNames] = useState([]);
  const [moduleOptions, setModuleOptions] = useState([]);
  const [absences, setAbsences] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    // Fetch student names
    axios.get("http://127.0.0.1:8000/api/students").then((response) => {
      setStudentNames(response.data);
    });

    // Fetch module options
    axios.get("http://127.0.0.1:8000/api/modules").then((response) => {
      setModuleOptions(response.data);
    });
    // absences
    axios.get(`http://127.0.0.1:8000/api/attendance`).then((response) => {
      setAbsences(response.data);
    });
    setloading(false)

  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleModuleChange = (e) => {
    setModule(e.target.value);
  };

  const handleAddAbsence = async () => {
    const newAbsence = {
      id: absences.length + 1,
      student_id: name,
      module_id: module,
      date : new Date().toLocaleDateString(),
      present: false,
    };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/attendance`,
      newAbsence
    );

    setAbsences([...absences, data]);
    setName("");
    setModule("");
  };

  console.log(absences)

  if (loading) return <h1 className="mt-5 text-center"></h1>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Add Absence :</h1>
      <div className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold">
            Student Name:
          </label>
          <select
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Student</option>
            {studentNames.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="module" className="text-lg font-semibold">
            Select Module:
          </label>
          <select
            id="module"
            value={module}
            onChange={handleModuleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Choose Module</option>
            {moduleOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddAbsence}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Mark Absent
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-8">Absences : </h2>
      <table className="w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Student</th>
            <th className="py-2 px-4 border-b">Module</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {absences.map((absence) => (
            <tr key={absence.id}>
              <td className="py-2 px-4 border-b text-center">{absence.id}</td>
              <td className="py-2 px-4 border-b text-center">
                {absence.student.name}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {absence.module.name}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {new Date(absence.date).toDateString()}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {absence.present ? (
                  <span className="text-green-500 font-semibold">Present</span>
                ) : (
                  <span className="text-red-500 font-semibold">Absent</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbsencesForm;
