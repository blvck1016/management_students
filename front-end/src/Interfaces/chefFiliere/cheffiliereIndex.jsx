import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheffiliereIndex = () => {
  const user = JSON.parse(localStorage.getItem("major_manager"));

  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[])

  // console.log(user)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Bonjour mr <span className="text-purple-500">{user?.name}</span>
      </h1>
    </div>
  );
};

export default CheffiliereIndex;
