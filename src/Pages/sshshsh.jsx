{
  /* <Button />
      <h1 className="text-4xl font-bold text-white">Purchase quantity</h1>
      <div>
        <button
          onClick={() => {
            setState(state - 1);
          }}
          className="bg-blue-500 rounded-b-lg hover:bg-blue-800 cursor-pointer"
        >
          -1
        </button>
        <span>{state}</span>
        <button
          onClick={() => {
            setState(state + 1);
          }}
          className="p-10 font-bold bg-blue-500 rounded-b-lg hover:bg-green-700 cursor-pointer"
        >
          +1
        </button>
      </div> */
}

// function Blogs() {
//   return (
//     <div className="min-h-screen bg-[url('your-image-url.jpg')] bg-cover bg-center relative">
//       {/* Backdrop Blur Overlay */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white px-6 md:px-16 py-20">
//         <h1 className="text-5xl font-bold text-center mb-10">
//           Dream Homes Blog
//         </h1>

//         {/* Blog Posts */}
//         <div className="space-y-12">
//           {/* Blog Post 1 */}
//           <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//             <img
//               src="your-blog-image-1.jpg"
//               className="h-52 w-full md:w-64 object-cover rounded-lg"
//             />
//             <div className="md:ml-6 text-center md:text-left">
//               <h2 className="text-2xl font-semibold">
//                 Luxury Villas by the Sea
//               </h2>
//               <p className="text-gray-300 text-sm mt-2">
//                 Discover breathtaking oceanfront villas designed for modern
//                 living.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* Blog Post 2 */}
//           <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//             <img
//               src="your-blog-image-2.jpg"
//               className="h-52 w-full md:w-64 object-cover rounded-lg"
//             />
//             <div className="md:ml-6 text-center md:text-left">
//               <h2 className="text-2xl font-semibold">
//                 The Future of Smart Homes
//               </h2>
//               <p className="text-gray-300 text-sm mt-2">
//                 Explore how AI and automation are changing luxury home
//                 experiences.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* Blog Post 3 */}
//           <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//             <img
//               src="your-blog-image-3.jpg"
//               className="h-52 w-full md:w-64 object-cover rounded-lg"
//             />
//             <div className="md:ml-6 text-center md:text-left">
//               <h2 className="text-2xl font-semibold">
//                 Minimalist Home Design Trends
//               </h2>
//               <p className="text-gray-300 text-sm mt-2">
//                 Learn how minimalism is shaping modern dream homes.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Button from "../Components/basic/button";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleForm = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Left Side - Image */}
//       <section className="bg-white h-screen w-[40%] flex flex-col justify-center items-center text-center shadow-md">
//         <div className="w-60 h-60 overflow-hidden rounded-lg shadow-lg">
//           <img
//             className="object-cover w-full h-full"
//             src="https://i.pinimg.com/474x/8d/a3/64/8da364298f2ee0972608bd86ccaaacae.jpg"
//             alt="Dream Home"
//           />
//         </div>
//       </section>

//       {/* Right Side - Login Form */}
//       <form
//         onSubmit={handleForm}
//         className="w-1/2 flex flex-col gap-6 bg-white shadow-lg p-10 rounded-lg mx-auto my-auto"
//       >
//         <h1 className="text-3xl font-extrabold text-blue-600 text-center">
//           Sign In
//         </h1>

//         {/* Inputs */}
//         <div className="flex flex-col gap-4">
//           <input
//             className="py-3 px-5 bg-white border border-gray-300 rounded-lg text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email Address"
//           />

//           <input
//             className="py-3 px-5 bg-white border border-gray-300 rounded-lg text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Your Password"
//           />
//         </div>

//         {/* Remember Me & Forgot Password */}
//         <div className="flex justify-between items-center text-sm text-gray-600">
//           <div className="flex gap-2 items-center">
//             <input type="checkbox" id="remember" className="accent-blue-600" />
//             <label htmlFor="remember">Remember Me</label>
//           </div>
//           <p className="cursor-pointer text-blue-500 hover:underline">
//             Recover Password
//           </p>
//         </div>

//         {/* Submit Button */}
//         <Button type="submit" text="SIGN IN" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300" />

//         {/* Signup Link */}
//         <p className="text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

{
  /* For the Navbar*/
}

// import { Link, NavLink } from "react-router-dom";

// export default function NavBar({ onClick }) {
//   return (
//     <div className="ml-auto justify-center flex top md:gap-5 bg-slate-600 ">
//       <nav className="  flex p-2 gap-[5rem] h-[3rem] sm:gap-[2rem]">
//         <h1 className="font-black text-white pl-5 text-2xl ">Dream homes</h1>
//         <ul className="flex gap-2 font-bold  text-white  ">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `rounded-2xl px-4 p-[1px] md:px-2 ${
//                 isActive
//                   ? "bg-white text-slate-500 font-bold"
//                   : "hover:bg-slate-400"
//               }`
//             }
//           >
//             <li>Home</li>
//           </NavLink>

//           <NavLink
//             to="/About"
//             className={({ isActive }) =>
//               `rounded-2xl px-4 p-[1px] md:px-2 ${
//                 isActive
//                   ? "bg-white text-slate-500 font-bold"
//                   : "hover:bg-slate-400"
//               }`
//             }
//           >
//             <li>About</li>
//           </NavLink>

//           <NavLink
//             to="/Properties"
//             className={({ isActive }) =>
//               `rounded-2xl px-4 p-[1px] md:px-2 ${
//                 isActive
//                   ? "bg-white text-slate-500 font-bold"
//                   : "hover:bg-slate-400"
//               }`
//             }
//           >
//             <li>Properties</li>
//           </NavLink>
//           <NavLink
//             to="Blog"
//             className={({ isActive }) =>
//               `rounded-2xl px-4 p-[1px] md:px-2 ${
//                 isActive
//                   ? "bg-white text-slate-500 font-bold"
//                   : "hover:bg-slate-400"
//               }`
//             }
//           >
//             <li>Blogs</li>
//           </NavLink>
//           <li className="bg-black rounded-2xl h-[2rem] w-[5rem] pl-4 ml-4 pt-1 p-1 cursor-pointer">
//             <Link to="Login"> Login</Link>
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={onClick}
//         className="bg-black rounded-2xl h-[2rem] w-[5rem] mt-2 text-white font-bold cursor-pointer"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// // className="bg-white  rounded-2xl h-[2rem] w-[5rem] pl-4 ml-4  text-slate-500 cursor-pointer
