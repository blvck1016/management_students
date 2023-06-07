

const AdminIndex = () => {
   // Example data (replace with your actual data)
   const studentCount = 100;
   const teacherCount = 20;
   const moduleCount = 50;
   const departmentCount = 5;
   const totalUsers = studentCount + teacherCount;

    return (
      <div className="flex flex-wrap justify-around">
        <div className="w-64 bg-blue-500 rounded-lg p-6 m-4">
          <h3 className="text-xl text-white font-bold mb-2">Students</h3>
          <p className="text-white text-3xl">{studentCount}</p>
          <p className="text-white">Total Users: {totalUsers}</p>
        </div>
        <div className="w-64 bg-green-500 rounded-lg p-6 m-4">
          <h3 className="text-xl text-white font-bold mb-2">Teachers</h3>
          <p className="text-white text-3xl">{teacherCount}</p>
          <p className="text-white">Total Users: {totalUsers}</p>
        </div>
        <div className="w-64 bg-yellow-500 rounded-lg p-6 m-4">
          <h3 className="text-xl text-white font-bold mb-2">Modules</h3>
          <p className="text-white text-3xl">{moduleCount}</p>
          <p className="text-white">Total Departments: {departmentCount}</p>
        </div>
        <div className="w-64 bg-red-500 rounded-lg p-6 m-4">
          <h3 className="text-xl text-white font-bold mb-2">Departments</h3>
          <p className="text-white text-3xl">{departmentCount}</p>
          <p className="text-white">Total Modules: {moduleCount}</p>
        </div>
      </div>
    );
};


export default AdminIndex;