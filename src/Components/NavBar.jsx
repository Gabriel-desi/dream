import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-600 flex justify-between items-center px-4 py-2 relative z-50">
      <div className="object cover w-20 h-20">
        <img src="/Home.jpg" alt="" />
      </div>
      <h1 className="font-black text-white text-2xl">Dream homes</h1>

      <div
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <ul
        className={`flex flex-col md:flex-row md:static fixed top-0 right-0 h-full md:h-auto w-3/4 md:w-auto bg-slate-700 md:bg-transparent md:gap-5 gap-4 px-8 py-6 transition-all duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        {["Home", "About", "Properties", "Blog"].map((page, i) => (
          <NavLink
            key={i}
            to={page === "Home" ? "/" : `/${page}`}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-2 ${
                isActive
                  ? "bg-white text-slate-500 font-bold"
                  : "hover:bg-slate-400 text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <li>{page}</li>
          </NavLink>
        ))}

        <li
          className="bg-black text-white rounded-2xl h-[2.5rem] w-[6rem] flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <Link to="login">Login</Link>
        </li>

        <li
          className="bg-black text-white rounded-2xl h-[2.5rem] w-[6rem] flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => {
            onClick();
            setIsOpen(false);
          }}
        >
          Logout
        </li>
      </ul>

      <button
        onClick={onClick}
        className="bg-black rounded-2xl h-[2rem] w-[5rem] text-white font-bold cursor-pointer hidden md:block"
      >
        Logout
      </button>
    </div>
  );
}
