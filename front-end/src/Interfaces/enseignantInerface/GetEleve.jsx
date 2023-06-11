import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const GetEleve = () => {
  const [eleve, setEleve] = useState([]);
  const [loading, setloading] = useState(true)
  const { id } = useParams();

  console.log('hi')

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/major/${id}/students`
        );
        setEleve(data);
        setloading(false)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudent();
  }, [id]);

  if (loading) {
    return <h1 className="mt-5 text-center">Loading...</h1>;
  }

  return (
  
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-gray-50">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {eleve?.map((e) => (
            <tr key={e.id}>
              <td className="px-6 py-4 whitespace-nowrap">{e.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{e.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

  );
}

export default GetEleve;
