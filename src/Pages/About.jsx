// function About() {
//   return (
//     <div className=" bg-gray-100 h-screen ">
//       <header className="bg-slate-800 text-white py-12 text-center">
//         <h1 className="text-4xl font-bold">About Dream Homes</h1>
//         <p className="text-gray-300 mt-2 ">Luxury Living, Redefined</p>
//       </header>
//       <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center gap-20">
//         <div className="w-full md:w-1/2">
//           <img
//             src="/About image.jpg"
//             alt="Luxury Home"
//             className="w-full rounded-lg shadow-lg shadow-black"
//           />
//         </div>
//         <div className="w-full md:w-1/2 text-gray-700">
//           <h2 className="text-3xl  font-semibold text-slate-800 mb-4">
//             Who We Are
//           </h2>
//           <p className="text-lg mb-6">
//             Dream Homes is a premier real estate company offering exquisite
//             luxury homes in prime locations worldwide. We help you find the
//             perfect home that fits your lifestyle and aspirations.
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-800 mb-4">
//             Our Mission
//           </h2>
//           <p className="text-lg mb-6">
//             Our mission is to provide top-tier properties with unmatched
//             quality, ensuring a seamless buying experience for our clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Dream Homes</h1>
        <p className="text-gray-300 mt-2">Luxury Living, Redefined</p>
      </header>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <img
              src="/About image.jpg"
              alt="Luxury Home"
              className="w-full rounded-lg shadow-lg shadow-black"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg mb-6">
              Dream Homes is a premier real estate company offering exquisite
              luxury homes in prime locations worldwide. We help you find the
              perfect home that fits your lifestyle and aspirations.
            </p>
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg mb-6">
              Our mission is to provide top-tier properties with unmatched
              quality, ensuring a seamless buying experience for our clients.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white p-6 text-center">
        <p className="text-sm">&copy; 2025 Dream Homes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
