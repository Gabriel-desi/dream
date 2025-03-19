// import { useEffect } from "react";
// import Last from "../Components/Last";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/auth");
  // };
  // useEffect(() => {
  //   const user = localStorage.user;
  //   if (!user) {
  //     localStorage.clear();
  //     navigate("/auth");
  //   }
  // }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Last /> */}
    </div>
  );
}

export default App;
