const ProfilAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Vos informations:</h2>
        <div className="text-gray-600">
          <p className="mb-2">
            <span className="font-semibold">Nom:</span> {user.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilAdmin;
