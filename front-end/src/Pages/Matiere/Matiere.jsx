import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Matiere = () => {
  const [matieres,setMatieres] =useState([]);

    useEffect(()=>{
    const getMatiere =async ()=>{
    const {data}= await axios.get("http://127.0.0.1:8000/api/modules")
      setMatieres(data)
      console.log(data)
    }
    getMatiere()
  },[])


  const deleteMatiere = async (matiere)=>{
          const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/mdoules/${matiere}`
          );
          console.log(data)
          setMatieres(matieres.filter((e) => e.id !== matiere));
          alert('this matiere is deleted successfully')

  }
  return (
    <div>
      <div className="flex justify-between my-3">
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/addEl" className="text-white">
            Ajouter filière
          </Link>
        </button>
        <input
          type="text"
          placeholder="Chercher une filière..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br />
      <div className="flex justify-end my-3">
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
            {matieres?.map((element) => (
              <tr className="bg-white" key={element.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.semester.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/EditMatiere/${element.id}`}>Edit</Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => deleteMatiere(element.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Matiere
