import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Profile from "./components/Profile";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";

function App() {
  const [count, setCount] = useState(0);
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("current user : ", user);
  return (
    <>
      <div>
        <Profile />
      </div>
      <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
    </>
  );
}

export default App;
