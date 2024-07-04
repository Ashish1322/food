import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="md:flex items-center block bg-red-500 my-4 py-12 md:mx-10 lg:mx-12 xl:mx-16 mx-6 md:px-8 xl:px-12"
      >
        <div className="md:grow md:px-0 lg:pl-10 px-6 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-white font-['Mv_Boli'] ">
            Are You Starving?
          </h1>
          <p className="text-white md:text-lg text-sm py-4 lg:py-6">
            Within a few clicks, find meals that are accessible near you
          </p>
          <a href="#popularFood" className="py-6 duation-200">
            <button className="bg-blue-500 text-white md:py-2 py-1 px-4 rounded-lg hover:scale-105 hover:bg-blue-600">
              View Menu
            </button>
          </a>
        </div>
        <div className="border rounded-lg xl:w-[20rem] lg:w-[18rem] md:w-[15rem] w-[230px] mx-auto md:mt-0 mt-8">
          <video autoplay="autoplay" loop="loop" className="w-full">
            <source src="Preparing_Order_2.mp4" type="video/mp4 " />
          </video>
        </div>
      </motion.div>
    </>
  );
}
export default Hero;
