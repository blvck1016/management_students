/* eslint-disable react/prop-types */
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import EditMatiere from "./EditMatiere";

const MatiereItem = ({ element, deleteMatiere, semsteres, handleEdit }) => {

  


  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <tr className="bg-white" key={element?.id}>
      <td className="px-4 py-2 border-b border-gray-200">{element?.name}</td>
      <td className="px-4 py-2 border-b border-gray-200">
        {element?.semester.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap mx-auto">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAddModal(true)}
        >
          <AiFillEdit className="text-lg cursor-pointer" />
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => deleteMatiere(element.id)}
        >
          <AiFillDelete className="text-lg cursor-pointer" />
        </button>

        <EditMatiere
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          handleEdit={handleEdit}
          element={element}
          semsteres={semsteres}
        />
      </td>
    </tr>
  );
};

export default MatiereItem