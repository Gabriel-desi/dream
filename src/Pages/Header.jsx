function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-500 min-h-[140vh] flex flex-col items-center max-h-[170vh]">
      <div className="flex flex-wrap items-center justify-center w-full p-8">
        <div className="max-w-[90%] text-center md:text-left">
          <h1 className="text-white font-bold text-4xl md:text-5xl pt-16">
            Gateway to
          </h1>
          <h1 className="text-white text-[2.5rem] font-black pt-3">
            Dream Home
          </h1>
          <p className="text-white text-sm mt-5">
            Discover a curated collection of dream homes at your fingertips,
            simplified and personalized.
          </p>
          <button className="bg-black text-white rounded-2xl px-5 py-2 text-sm font-bold mt-5 hover:bg-white hover:text-black hover:scale-105 transition duration-700 shadow">
            Discover Now
          </button>
        </div>

        <div className="mt-8 md:ml-16">
          <img
            src="https://i.pinimg.com/474x/cf/9f/c2/cf9fc2e5cd6fbfecb034ab38bb4688d4.jpg"
            className="h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] object-cover rounded-xl shadow"
          />
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/NrwWPIzd164?si=MpM41DawwKDb8Ffn"
          title="YouTube video player"
          frameBorder=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl shadow-lg md:w-[35rem] md:h-[20rem]  sm:w-[13rem] sm:h-[20rem]"
        ></iframe>
      </div>
    </header>
  );
}

export default Header;

// https://i.pinimg.com/474x/cf/9f/c2/cf9fc2e5cd6fbfecb034ab38bb4688d4.jpg
