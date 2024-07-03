import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate()
  return (
    <div className="flex gap-6 bg-orange-500 py-20 px-28">
      <div className="flex items-center gap-4 ">
        <FaArrowAltCircleLeft
          onClick={() => navigate("/")}
          className="text-5xl text-white"
        />
        <img
          src="image_processing20191001-28305-gdm0ip.gif"
          alt=""
          className="w-[35rem] rounded-xl"
        />
      </div>
      <div className="p-8 bg-white w-[25rem] rounded-xl">
        <h2 className="text-3xl font-bold">Login</h2>
        <form action="" className="pt-4">
         
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
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login