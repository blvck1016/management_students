import axios from "axios";
import { useEffect, useState } from "react";

const EleveAbsence = () => {

  const [absences, setAbsences] = useState([]);
  const [loading, setloading] = useState(true)

  // console.log(user.id)

  useEffect(() => {
    // Fetch student absences data from API
    const fetchAbsences = async () => {
      // const { data } = await axios.get(
      //   `http://127.0.0.1:8000/api/absences/student/${user.id}`
      // );
       const { data } = await axios.get(
         `http://127.0.0.1:8000/api/students`
       );
      // console.log(data);
      setAbsences(data)
      setloading(false)
    };

    fetchAbsences();
  }, []);

  if (loading) return <h1 className="text-center mt-5">Loading..</h1>

  return (
    <div>
      {absences.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold text-red-500 text-center my-4">Vos Absences</h1>
          <table className="min-w-full bg-white border border-gray-300 divide-x mt-5">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Module</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {absences?.map((absence) => (
                <tr key={absence.id}>
                  <td className="py-2 px-4 border-b text-center">{absence.module.name}</td>
                  <td className="py-2 px-4 border-b text-center">{absence.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1 className="text-green-500 mt-5 text-center">
          No absences pour vous.
        </h1>
      )}
    </div>
  );
};

export default EleveAbsence;
