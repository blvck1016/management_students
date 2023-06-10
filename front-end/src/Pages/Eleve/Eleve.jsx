import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import Spinner from "../../components/loading/Spinner"
import AddEleve from "./AddEleve";

const Eleve = () => {


  const [eleves, setEleves] = useState([]);
  const [loading, setloading] = useState(true)
  const [search, setsearch] = useState('')
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getEleves = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/students");
      setEleves(response.data);
      setloading(false)
    };

    getEleves();
  }, []);

  
  const handleAdd = async (payload) => {

    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/students`,
        payload
      );
      // console.log(data)
      setEleves([...eleves,data]);
    } catch (error) {
      console.error(error);
    }
  };


  const deleteEleve = async (eleveId) => {
   if(confirm('Do you want to delete this student ?')){
     try {
       await axios.delete(`http://127.0.0.1:8000/api/students/${eleveId}`);
       setEleves(eleves.filter((eleve) => eleve.id !== eleveId));
     } catch (error) {
       console.log(error);
     }
   }
  };

  if (loading) return <Spinner />



  return (
    <div>
      <div className="flex justify-between my-3">
        <button
        onClick={()=>setShowModal(true)}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

          Add Student
        </button>
        <input
          type="text"
          placeholder="Chercher un élève..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <AddEleve
        showModal={showModal}
        setShowModal={setShowModal}
        handleAdd={handleAdd}
      />

      <br />
      <div className="flex justify-end my-3">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
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
            {eleves
              ?.filter((e) =>
                e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              )
              .map((element) => (
                <tr className="bg-white" key={element.id}>
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
