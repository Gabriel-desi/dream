import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import findUser from "../services/checkUser";
import createUser from "../services/createUser";
export default function Signup() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  // const SpecialCharacterSymbol = /["!", "@", "#", "$", "%", "^", "&", "*"]/;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConPasswordChange = (e) => {
    setConPassword(e.target.value);
  };

  useEffect(() => {
    if (password.trim() !== "" && conPassword.trim() !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password, conPassword]);
  // const handleForm = (e) => {
  //   e.preventDefault();

  //   setIsLoading(true);
  //   setIsDisabled(true);

  // password validation
  // const validatePassword = validatePassword(password);

  // if (validatePassword.isShort) {
  //   handleError(validPassword.message, setError, setIsDisabled, setIsLoading);
  //   return;
  // }

  // if (validPassword.isWeak) {
  //   handleError(validPassword.message, setError, setIsDisabled, setIsLoading);
  //   return;
  // }

  // const isMatch = matchPassword(password, conPassword);

  // if (!isMatch) {
  //   handleError(
  //     "Passwords do not match",
  //     setError,
  //     setIsDisabled,
  //     setIsLoading
  //   );
  //   return;
  // }
  const handleForm = (e) => {
    e.preventDefault();
    //conditional statement
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else if (!SpecialCharacterSymbol.test(password)) {
      setError("Passwords must have at least one symbol");
      setTimeout(() => {
        setError(null);
      }, 1000);
    } else if (password !== conPassword) {
      setError("Passwords do not match!❌");
      setTimeout(() => {}, 1000);
      setError(null);
    } else {
      setError("");
      alert("Passwords match! ✅");
      localStorage.user = success;
      navigate("/");
      return;
    }
    (async function () {
      const res = await findUser(email);
      console.log("res:", res);

      switch (res) {
        case "found user":
          handleError(
            "Email already exists",
            setError,
            setIsDisabled,
            setIsLoading
          );
          break;
        case "user not found":
          try {
            const userData = await createUser(email, password);
            if (userData) {
              localStorage.user = userData;

              // clear form inputs
              setEmail("");
              setPassword("");
              setConPassword("");

              navigate("/");
            }
          } catch (err) {
            handleError(
              "Failed to create user",
              setError,
              setIsDisabled,
              setIsLoading
            );
            console.error(err);
          }
          break;
        default:
          handleError("An error occurred");
          break;
      }
    })();
    setIsLoading(false);
    setIsDisabled(false);
  };
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <form onSubmit={handleForm} className="space-y-4 flex flex-col">
      {/* <div className="p-4 max-w-md mx-auto bg-white shadow-black shadow-lg rounded-lg"> */}
      <h2 className="text-2xl font-semibold flex justify-center">Sign Up</h2>
      <label htmlFor=""> Your Email</label>
      <input
        className="border-[1px] py-5  p-2"
        type="email"
        placeholder="Enter your email"
        // value={email}
      />
      <label htmlFor=""> Your Password</label>
      <div className="flex outline-1">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 py-5 rounded outline-none"
        />
        <span
          onClick={toggleShowPassword}
          className="text-gray-400 w-[20%] flex items-center justify-center cursor-pointer"
        >
          {showPassword ? <GoEyeClosed /> : <FiEye />}
        </span>
      </div>

      <label htmlFor="">Confirm Password</label>
      <div className=" h-16 bg-white flex justify-between items-center outline-1">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={conPassword}
          onChange={handleConPasswordChange}
          className="w-[80%] p-2 py-3 px-7 h-full rounded outline-none"
        />
        <span
          onClick={toggleShowPassword}
          className="text-gray-400 w-[20%] flex items-center justify-center cursor-pointer"
        >
          {showPassword ? <GoEyeClosed /> : <FiEye />}
        </span>
      </div>
      {error && <p className="text-red-700 font-bold">{error}</p>}
      <button
        type="submit"
        isDisabled={isDisabled}
        className={`rounded-2xl font-bold mx-20 py-2
            ${
              isDisabled
                ? "bg-slate-300 not"
                : "bg-slate-600 cursor-pointer text-white hover: scale-105 duration-300 transition-all "
            }`}
      >
        Sign Up
      </button>
      <Link to={"/auth"}>
        <p>Already have an account Sign In</p>
      </Link>
      {/* <SwitchAuthRoute question="Already have an account?" link="signin" /> */}
      {/* </div> */}
    </form>
  );
}
// w-full bg-blue-500 text-white p-2 rounded

// import { useEffect, useState } from "react";
// import { FiEye } from "react-icons/fi";
// import { GoEyeClosed } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import findUser from "../services/checkUser";
// import createuser from "../services/createUser";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [conPassword, setConPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isDisabled, setIsDisabled] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const SpecialCharacterSymbol = /[!"@#$%^&*]/;

//   useEffect(() => {
//     setIsDisabled(!(email && password && conPassword));
//   }, [email, password, conPassword]);

//   const handleForm = async (e) => {
//     e.preventDefault();

//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long");
//     } else if (!SpecialCharacterSymbol.test(password)) {
//       setError("Passwords must have at least one symbol");
//     } else if (password !== conPassword) {
//       setError("Passwords do not match!❌");
//     } else {
//       setError("");
//       try {
//         const res = await findUser(email);
//         console.log("res:", res);

//         if (res === "found user") {
//           setError("Email already exists");
//         } else if (res === "User not found") {
//           const userData = await createuser(email, password);
//           if (userData) {
//             localStorage.setItem("users", JSON.stringify(userData));
//             setEmail("");
//             setPassword("");
//             setConPassword("");
//             navigate("/", { replace: true });
//             // Navigate home
//           } else {
//             setError("Failed to create user");
//           }
//         } else {
//           setError("An error occurred");
//         }
//       } catch (err) {
//         setError("Failed to create user");
//         console.error("Error creating user:", err);
//       }
//     }

//     setTimeout(() => setError(""), 2000);
//   };

//   return (
//     <form onSubmit={handleForm} className="space-y-4 flex flex-col">
//       <h2 className="text-2xl font-semibold flex justify-center">Sign Up</h2>

//       <label>Your Email</label>
//       <input
//         className="border-[1px] py-2 p-2"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <label>Password</label>
//       <div className="relative">
//         <input
//           className="border-[1px] py-2 p-2 w-full"
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="button"
//           className="absolute right-2 top-3"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <GoEyeClosed /> : <FiEye />}
//         </button>
//       </div>

//       <label>Confirm Password</label>
//       <input
//         className="border-[1px] py-2 p-2"
//         type="password"
//         placeholder="Confirm your password"
//         value={conPassword}
//         onChange={(e) => setConPassword(e.target.value)}
//         required
//       />

//       {error && <p className="text-red-500">{error}</p>}

//       <button
//         type="submit"
//         className={`bg-blue-500 text-white p-2 rounded ${
//           isDisabled ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         disabled={isDisabled}
//       >
//         Sign Up
//       </button>

//       <p className="text-center">
//         Already have an account?
//         <Link to="/auth" className="text-blue-500">
//           Login
//         </Link>
//       </p>
//     </form>
//   );
// }
