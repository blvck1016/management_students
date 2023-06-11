const EnseiProfile = () => {
  const user = JSON.parse(localStorage.getItem("teacher"));
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Vos Informations:</h2>
        <div className="text-gray-600">
          <p className="mb-2">
            <span className="font-bold">Nom:</span> {user.name}
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnseiProfile;
