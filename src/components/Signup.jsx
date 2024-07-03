import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-6 bg-orange-500 py-20 px-28">
      <div className="flex items-center gap-4 ">
        <FaArrowAltCircleLeft
          onClick={() => navigate("/")}
          className="text-5xl text-white"
        />
        <img
          src="425902f177e4186d5891593b9592fcf4.gif"
          alt=""
          className="w-[35rem] rounded-xl"
        />
      </div>
      <div className="p-8 bg-white w-[25rem] rounded-xl">
        <h2 className="text-3xl font-bold">Register</h2>
        <form action="" className="pt-2">
          <p className="pb-2">
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" className="border-2 mt-1 w-[100%] py-2 px-2" />
          </p>
          <p className="pb-2">
            <label htmlFor="">Email:</label>
            <br />
            <input type="email" className="border-2 mt-1 w-[100%] py-2 px-2" />
          </p>
          <p className="pb-2">
            <label htmlFor="">Password:</label>
            <br />
            <input
              type="password"
              className="border-2 mt-1 w-[100%] py-2 px-2"
            />
          </p>
          <p className="text-center py-2">
            <button
              type="submit"
              className="bg-blue-500 py-2 px-6 text-xl text-white font-semibold hover:scale-105"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
