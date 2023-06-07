/* eslint-disable react/prop-types */
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import UpdateClassModal from './UpdateClassModal';
import { useState } from "react";
import axios from "axios";


const DepartementItem = ({ element, deletClass }) => {

    // console.log(object)

    const [showModal, setShowModal] = useState(false);


    const handleEdit = async (updated) => {
     

      const payload = { 'name' :  updated.name }
      const { data } = await axios.put(`http://127.0.0.1:8000/api/departments/${updated.id}`,payload);
      console.log(data)
    };


  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{element.id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{element.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {new Date(element.created_at).toDateString()}
      </td>

      <td className="px-6 py-4 whitespace-nowrap flex gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          <AiFillEdit className="text-lg cursor-pointer" />
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => deletClass(element.id)}
        >
          <AiFillDelete className="text-lg cursor-pointer" />
        </button>

        <UpdateClassModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleEdit={handleEdit}
          departement={element}
        />
      </td>
    </tr>
  );
};

export default DepartementItem