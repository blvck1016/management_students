/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

const AddEleve = ({
  showModal,
  setShowModal,
  handleAdd,
}) => {

  const [majors, setMajors] = useState([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [majorId, setmajorId] = useState("");


  useEffect(()=>{
    const getMajors  = async() =>{
      const {data} = await axios.get('http://127.0.0.1:8000/api/majors')
      setMajors(data)
    }

    getMajors()
  },[])

  const addEleve = (e) => {
    e.preventDefault();
    const newEnseignant = {
      name: nom,
      email,
      major_id : majorId
    };
    handleAdd(newEnseignant);
    setNom("");
    setEmail("");
    setmajorId("")
    setShowModal(false);
  };

  return (
    <div
      className={`fixed inset-0 z-10 ${showModal ? "" : "hidden"}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Add Class
            </h2>
            <form onSubmit={addEleve}>
              <div className="mb-4">
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="niveau"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Major
                </label>
                <select
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setmajorId(e.target.value)}
                >
                  <option value="">Choose major</option>
                  {majors?.map((s) => (
                    <option key={s.id} value={s.id} className="py-2">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEleve;
