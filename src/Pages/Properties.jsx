import { motion } from "framer-motion";

function Properties() {
  return (
    <div className="min-h-[100vh] bg-[url('/secondB.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg"></div>

      <div className="relative z-10 text-white px-6 md:px-16 py-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-600">
            Dream homes properties
          </h1>
          <p className="text-slate-600 mt-2">
            Find your perfect luxury home today!
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition min-h-[23rem] w-full duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src="https://i.pinimg.com/474x/c1/25/ce/c125ce34b1ec78a6aa991395a0edc9a7.jpg"
              alt="Luxury Beachfront Villa"
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                Luxury Beachfront Villa
              </h2>
              <p className="text-gray-600 mt-2">Miami, FL</p>
              <p className="text-lg font-bold text-slate-500 mt-2">
                price: $2,500,000
              </p>
              <button className="mt-4 w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                View Details
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition min-h-[23rem] w-full duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src="/modernglasshouse.jpg"
              alt="Modern Glass House"
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                Modern Glass House
              </h2>
              <p className="text-gray-600 mt-2">Miami, FL</p>
              <p className="text-lg font-bold text-slate-500 mt-2">
                price: $1,800,000
              </p>
              <button className="mt-4 w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                View Details
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition min-h-[23rem] w-full duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src="https://i.pinimg.com/474x/00/88/95/008895732ecb1097b1513152a7fb9c84.jpg"
              alt="Classic Mansion"
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                Classic Mansion
              </h2>
              <p className="text-gray-600 mt-2">Miami, FL</p>
              <p className="text-lg font-bold text-slate-500 mt-2">
                price: $3,200,000
              </p>
              <button className="mt-4 w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
