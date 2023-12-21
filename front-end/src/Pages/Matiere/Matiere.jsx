/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react"
import AddMatiere from "./AddMatiere";
import MatiereItem from "./MatiereItem";
import Spinner from "../../components/loading/Spinner";


const Matiere = () => {
  
  const [matieres,setMatieres] =useState([]);

  const [search , setSearch] = useState('');

  const [semsteres, setsemsteres] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [loading, setloading] = useState(true)

  useEffect(()=>{
    const getMatiere =async ()=>{
    const {data}= await axios.get("http://127.0.0.1:8000/api/modules")
      setMatieres(data)
      setloading(false)
      // console.log(data)
    }
    async function Load() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/semesters");
      setsemsteres(data);
    }
    getMatiere();
    Load();
  },[])





  const addModule = async(payload) =>{

    // console.log(payload);

    try{
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/modules",
          payload
        );
        setMatieres([...matieres, data]);
    }catch(e){
      console.log(e)
    }

  }


  const deleteMatiere = async (matiere)=>{

    if(confirm('do you want to delete this module')){
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/modules/${matiere}`
      );
      console.log(data)
      setMatieres(matieres.filter((e) => e.id !== matiere));
    }

      

  }


  const handleEdit = async (updated) => {
    try {
      const { data } = await axios.put(
        `http://127.0.0.1:8000/api/modules/${updated.id}`,
        updated
      );
      console.log(data);
      setMatieres((prevRents) =>
        prevRents.map((m) => {
          if (m.id === updated.id) {
            return data; // Replace the whole object with the new one
          }
          return m; // Return unchanged objects
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <Spinner />


  return (
    <div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Ajouter Module
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
                Nom
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                semestre
              </th>

              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {matieres &&
              matieres
                ?.filter((e) =>
                  e.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((element) => (
                  <MatiereItem
                    key={element.id}
                    element={element}
                    deleteMatiere={deleteMatiere}
                    semsteres={semsteres}
                    handleEdit={handleEdit}
                  />
                ))}
          </tbody>
        </table>

        <AddMatiere
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          addModule={addModule}
          semsteres={semsteres}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Matiere
