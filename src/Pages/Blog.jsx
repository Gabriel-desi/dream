function Blogs() {
  return (
    <div className="min-h-[120vh] bg-[url('/public/cool.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

      <div className="relative z-10 text-white px-6 md:px-16 py-20">
        <h1 className="text-5xl font-bold text-center mb-10">
          Dream Homes Blog
        </h1>
        <div className="space-y-12 flex flex-col sm:flex-wrap">
          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <img
              src="https://files.oaiusercontent.com/file-6chmwrVwabZCY6kPSRycQk?se=2025-03-19T17%3A36%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e46e801-0ebd-48e7-a75a-4051c9bcc3e8.webp&sig=XkitNNLTqTlv2UKoXGGdQV1VtpwJNM9UdR8E0bwXy3U%3D"
              alt="Luxury House"
              className="h-52 w-full md:w-64 object-cover rounded-lg"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                Luxury Villas by the Sea
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Discover breathtaking oceanfront villas designed for modern
                living.
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
                Read More
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <img
              src="/public/Al House.jpg"
              alt="Al house"
              className="h-52 w-full md:w-64 object-cover rounded-lg"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                The Future of Smart Homes
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Explore how AI and automation are changing luxury home
                experiences.
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
                Read More
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <img
              src="/public/Minimal.jpg"
              alt="Minimal"
              className="h-52 w-full md:w-64 object-cover rounded-lg"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                Minimalist Home Design Trends
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Learn how minimalism is shaping modern dream homes.
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
