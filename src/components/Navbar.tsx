import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="flex  justify-between items-center text-white px-4 py-3 lg:py-6 md:px-10 lg:px-20">
      <div className="text-2xl md:text-3xl">Promtcast.AI</div>
      <button onClick={() => navigate("/login")}  className="bg-white text-black font-bold py-2 px-4 rounded-full mt-2 md:mt-0 text-sm md:text-base">
        Login
      </button>
    </div>
  );
};

export default Navbar;
