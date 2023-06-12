/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/loading/Spinner";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AddFiliere from "./AddFiliere";

const Filieres = () => {
  const [majors, setmajors] = useState([]);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [loading, setloading] = useState(true);

  const [departements, setdepartements] = useState([])

  useEffect(() => {
     const getDepartements = async () => {
       const { data } = await axios.get(
         "http://127.0.0.1:8000/api/departments"
       );
       setdepartements(data);
       // console.log(data)
     };
    
    const getFilieres = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/majors");
      setmajors(data);
      setloading(false);
      // console.log(data)
    };

    getFilieres();
    getDepartements()
  }, []);

  const addModule = async (payload) => {

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/majors",
        payload
      );
    //   console.log('returned',data)
      setmajors([...majors, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMatiere = async (matiere) => {
    if (confirm("do you want to delete this module")) {
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/majors/${matiere}`
      );
    //   console.log(data);
      setmajors(majors.filter((e) => e.id !== matiere));
    }
  };



  if (loading) return <Spinner />;

  return (
    <div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Ajouter filière
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Chercher une filière..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br />
      <div className="flex justify-end ">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Nom filere
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Departement
              </th>

              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {majors
              ?.filter((e) =>
                e.name.toLowerCase().includes(search.toLowerCase())
              )
              ?.map((element) => (
                <tr className="bg-white" key={element?.id}>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {element.name}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {element?.department.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap mx-auto">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => deleteMatiere(element.id)}
                    >
                      <AiFillDelete className="text-lg cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <AddFiliere
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          addModule={addModule}
          departements={departements}
        />
      </div>
    </div>
  );
};

export default Filieres;
