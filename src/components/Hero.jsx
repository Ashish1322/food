function Hero() {
  return (
    <div className="text-white bg-[#f26124] xl:mx-24 lg:mx-16 mx-8 rounded-lg my-4">
      <div className="xl:py-20 lg:py-12 py-8 xl:px-32 lg:px-16 px-10 md:flex justify-between items-center">
        <div className="border">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Matura_MT_Script_Capitals'] ">
            Are You Starving?
          </h1>
          <p className="py-8 md:text-xl text-base font-semibold">
            Within a few clicks, find meals that are accessible near you
          </p>
          <a href="#popularFood" className="duration-30">
            <button className="bg-blue-600 md:py-4 py-2 md:px-6 px-4 rounded hover:scale-105">
              View Menu
            </button>
          </a>
        </div>
        <div className=" md:pt-6 pt-0 border">
          <video autoPlay='autoplay' loop="loop" className="w-[20rem]">
            <source src="Preparing_Order_2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Hero;
