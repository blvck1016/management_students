import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Eleve = () => {
  const [eleves, setEleves] = useState([]);

  useEffect(() => {
    const getEleves = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/students");
      setEleves(response.data);
    };

    getEleves();
  }, []);

  const deleteEleve = async (eleveId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/students/${eleveId}`);
      setEleves(eleves.filter((eleve) => eleve.id !== eleveId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-3">
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/addEl" className="text-white">
            Add Student
          </Link>
        </button>
        <input
          type="text"
          placeholder="Chercher un élève..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <br />
      <div className="flex justify-end my-3">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Id
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Nom
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                filière
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {eleves?.map((element) => (
              <tr className="bg-white" key={element.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.name}
                </td>

                <td className="px-4 py-2 border-b border-gray-200">
                  {element.email}
                </td>

                <td className="px-4 py-2 border-b border-gray-200">
                  {element.major.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/EditEl/${element.id}`}>
                      <AiFillEdit className="text-lg cursor-pointer" />
                    </Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => deleteEleve(element.id)}
                  >
                    <AiFillDelete className="text-lg cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eleve;
