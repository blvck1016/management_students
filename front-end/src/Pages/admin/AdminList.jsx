import axios from "axios";
import { useEffect, useState } from "react";

const AdminList = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/users`);
        setAdmin(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAdmin();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center py-2">Les admins de ce site : </h2>

      <div className="grid grid-cols-2 gap-4">
        {admin
        .filter((e) => e.role_id === 1)
        .map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center"
          >
            <p className="text-lg font-semibold">{e.name}</p>
            <p className="text-gray-600">{e.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminList;
