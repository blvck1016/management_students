import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AddEnseignantModal from "./AddEnseignant";

const Enseignant = () => {
  const [enseignants, setEnseignants] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getEnseignants = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/teachers");
      setEnseignants(response.data);
    };

    getEnseignants();
  }, []);

  const deleteEnseignant = async (enseignantId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/enseignants/${enseignantId}`);
      setEnseignants(enseignants.filter((enseignant) => enseignant.id !== enseignantId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between my-3">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Ajouter enseignant
        </button>
        <input
          type="text"
          placeholder="Chercher un enseignant..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <AddEnseignantModal
        showModal={showModal}
        setShowModal={setShowModal}
        setEnseignants={setEnseignants}
      />

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Departement</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {enseignants.map((element, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{element.id}</td>
              <td className="border px-4 py-2">{element.name}</td>
              <td className="border px-4 py-2">{element.email}</td>
              <td className="border px-4 py-2">{element.department.name}</td>

              <td className="px-4 py-2 flex items-center gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to={`/EditEl/${element.id}`}>
                    <AiFillEdit className="text-lg cursor-pointer" />
                  </Link>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => deleteEnseignant(element.id)}
                >
                  <AiFillDelete className="text-lg cursor-pointer" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enseignant;
