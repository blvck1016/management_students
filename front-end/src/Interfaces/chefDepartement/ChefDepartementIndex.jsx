

const ChefDepartementIndex = () => {

    const user = JSON.parse(localStorage.getItem('major_departement'));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Bonjour mr <span className="text-purple-500">{user?.name}</span> 
        <br />
        votre departement est : <span className="text-purple-500">Informatique</span>
      </h1>
    </div>
  );
}

export default ChefDepartementIndex