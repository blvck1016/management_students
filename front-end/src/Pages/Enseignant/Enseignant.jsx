import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AddEnseignantModal from "./AddEnseignant";

import Spinner from "../../components/loading/Spinner"

const Enseignant = () => {
  const [enseignants, setEnseignants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setloading] = useState(true)
  const [search, setsearch] = useState('')
  const [modules, setmodules] = useState([])
  const [Departements, setDepartements] = useState([])

  useEffect(() => {
    const getEnseignants = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/teachers");
      setEnseignants(response.data);
      setloading(false)
    };    
    const getModules = async () => {
      const {data} = await axios.get("http://127.0.0.1:8000/api/modules");
      setmodules(data);

    };

    const getClasses = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/departments"
      );
      setDepartements(data);
 
    };
    getEnseignants();
    getClasses();
    getModules()
  }, []);

    const handleAdd = async (newEnseignant) => {
   
      try {
          const {data} = await axios.post("http://127.0.0.1:8000/api/teachers", newEnseignant);

          setEnseignants([...enseignants, data]);
       
      } catch (error) {
        console.error(error);
      }
    };

  const deleteEnseignant = async (enseignantId) => {
    if(confirm('Do you want to delete this teacher ?')){
      try {
        await axios.delete(`http://127.0.0.1:8000/api/teachers/${enseignantId}`);
        setEnseignants(enseignants.filter((enseignant) => enseignant.id !== enseignantId));
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) return <Spinner />

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
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <AddEnseignantModal
        showModal={showModal}
        setShowModal={setShowModal}
        setEnseignants={setEnseignants}
        modules={modules}
        Departements={Departements}
        handleAdd={handleAdd}
      />

      <table className="min-w-full mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Module</th>
            <th className="px-4 py-2">Departement</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {enseignants
            ?.filter((e) =>
              e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            .map((element, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center">{element?.name}</td>
                <td className="px-4 py-2 text-center">{element?.email}</td>
                <td className="px-4 py-2 text-center">{element?.module?.name}</td>
                <td className="px-4 py-2 text-center">
                  {element?.department?.name}
                </td>

                <td className="px-4 py-2 flex justify-center items-center gap-2">
                
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
