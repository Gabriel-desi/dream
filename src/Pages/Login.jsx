import Button from "../Components/basic/button";
import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import findUser from "../services/checkUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const [error, SetError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  // const SpecialCharacterSymbol = /["!", "@", "#", "$", "%", "^", "&", "*"]/;

  const logindata = {
    email,
    password,
  };
  console.log(logindata);

  useEffect(() => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleForm = (e) => {
    e.preventDefault();
    // if (!SpecialCharacterSymbol.test(password)) {
    //   SetError("Password must have atleast one symbol");
    //   setTimeout(() => setTimeout(() => SetError(""), 2000));
    // }
    async function loginUser() {
      try {
        const res = await findUser(email, password);
        const user = res;
        console.log(user);
        if (user === "valid password") {
          localStorage.user = JSON.stringify(user);
          navigate("/");
        } else {
          throw new Error("Invalid password");
        }
      } catch (err) {
        SetError();
      }
    }
    loginUser();
  };
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="flex max-h-[100vh] min-h-[70vh] justify-center items-center gap-10 max-w-20rem ">
      {/* <section className="bg-white h-screen max-w-[50%]  flex flex-col justify-center md:pl-3 min-w-[%] md-w-60% text-center">
        <div>
          <span className=" min-h-50 min-w-40">
            <img
              className="object-cover w-full h-full rounded-2xl shadow-lg shadow-black md:w-[25rem]"
              src="https://i.pinimg.com/474x/8d/a3/64/8da364298f2ee0972608bd86ccaaacae.jpg"
              alt=""
            />
            </span>
            </div>
      </section> */}
      <form
        onSubmit={handleForm}
        className="w-[80vh] h-[80vh] font-semibold flex 
       space-y-4 flex-col gap-5 bg-gray-200 rounded-2xl shadow-lg  shadow-blue-600 min-w-[20rem] m max-h-[30rem] md:w-[22rem] "
      >
        <h1 className="text-2xl font-extrabold text-slate-600 text-center">
          Sign In
        </h1>
        <div className=" pt-[2.5rem] gap-5 flex flex-col ">
          <input
            className="py-5 px-7 bg-white w-[20rem] mx-auto  border-[1px] border-slate text-black min-w-20"
            type="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Your Email"
            placeholder="Enter Your Email Address"
          />

          <div className="h-16 w-[20rem] mx-auto bg-white flex outline-1 justify-between items-center cursor-pointer ">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Your Password"
              placeholder="Enter Password"
              className="w-full py-5 px-7 bg-white 
            text-black outline-none  rounded p-2"
            />
            <span
              onClick={toggleShowPassword}
              className="text-gray-400 w-[20%] flex  cursor-pointer"
            >
              {showPassword ? <GoEyeClosed /> : <FiEye />}
            </span>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 md:flex-row
         items-center"
        >
          <div className="flex gap-1 pl-2">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
            {/* <p className="cursor-pointer">Recover Password</p> */}
          </div>
          <Link to="signup">
            Don&apos;t have an account?
            <span className="text-slate-600">Signup</span>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" isDisabled={isDisabled} text="SIGN IN" />
      </form>
    </div>
  );
}
