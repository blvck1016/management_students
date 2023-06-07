
import { useState, useEffect } from 'react'
import axios from "axios";
import AddClassModal from './AddClassModal';
import DepartementItem from './DepartementItem';


const Classe = () => {

   const [classes, setClasses] = useState()
   const [showAddModal, setShowAddModal] = useState(false)

   const [search, setSearch] = useState('')

  useEffect(()=>{
    const getClasses = async ()=>{
      const { data } = await axios.get("http://127.0.0.1:8000/api/departments");
      setClasses(data)
    }

    getClasses()
  },[])

  async  function handleAddClass(name) {
    if (!name) {
      alert("fields are required");
    }

   
    const { data } = await axios.post("http://127.0.0.1:8000/api/departments", {
      name,
    });

    setClasses([...classes,data])

    console.log(data)

  }

  const deletClass = async (classe) => {
    if(confirm('Do you want to delete this departement ?')){
      try {
        const { data } = await axios.delete(
          `http://127.0.0.1:8000/api/departments/${classe}`
        );
        alert(data.message);
        //  const [classes, setClasses] = useState()
        setClasses(classes.filter((e) => e.id !== classe));
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  return (
    <div>
      <div className="flex justify-between my-3">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Ajouter departement
        </button>
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Chercher un departement..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date de creation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {classes?.filter((e)=> e.name.includes(search))
          .map((element, index) => (
            <DepartementItem
              key={index}
              element={element}
              deletClass={deletClass}
              setClasses={setClasses}
            />
          ))}
        </tbody>
      </table>

      <AddClassModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        handleSave={handleAddClass}
        setClasses={setClasses}
      />

      {/* <allerts /> */}
    </div>
  );
}

export default Classe
