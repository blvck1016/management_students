/* eslint-disable react/prop-types */

import { useState } from "react"

const EditMatiere = ({
  showAddModal,
  setShowAddModal,
  handleEdit,
  element,
  semsteres,
}) => {
  const [nom, setNom] = useState(element?.name);
  const [semesterId, setsemesterId] = useState(element?.semester_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: element.id,
      name: nom,
      semester_id: semesterId,
    };
    handleEdit(payload);
    setShowAddModal(false)
  };

  return (
    <div
      className={`fixed inset-0 z-10 ${showAddModal ? "" : "hidden"}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Add module
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom de module
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
              <div>
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Major
                </label>
                <select
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setsemesterId(e.target.value)}
             
                >
                  <option value={semesterId}>{element?.semester.name}</option>
                  {semsteres?.filter((s)=> s.id != semesterId)
                  .map((s) => (
                    <option key={s.id} value={s.id} className="py-2">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
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

export default EditMatiere
