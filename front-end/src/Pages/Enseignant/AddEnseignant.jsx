import axios from "axios";
import { useState } from "react";

const AddEnseignantModal = ({ showModal, setShowModal, setEnseignants }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateDeNaissance, setDateDeNaissance] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");

  const addEnseignant = async (e) => {
    e.preventDefault();

    const newEnseignant = {
      nom,
      prenom,
      date_de_naissance: dateDeNaissance,
      adresse,
      telephone,
    };

    try {
      await axios.post("http://127.0.0.1:8000/api/enseignants", newEnseignant);
      setEnseignants((prevEnseignants) => [...prevEnseignants, newEnseignant]);
      setShowModal(false);
      // Reset the form fields
      setNom("");
      setPrenom("");
      setDateDeNaissance("");
      setAdresse("");
      setTelephone("");
    } catch (error) {
      console.log(error);
    }
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
            <form onSubmit={addEnseignant}>
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
                  Prenom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="niveau"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Date de naissance
                </label>
                <input
                  type="date"
                  id="prenom"
                  name="prenom"
                  value={dateDeNaissance}
                  onChange={(event) => setDateDeNaissance(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="niveau"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={adresse}
                  onChange={(event) => setAdresse(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="niveau"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Telephone
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={telephone}
                  onChange={(event) => setTelephone(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
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

export default AddEnseignantModal;
