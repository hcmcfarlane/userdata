import { useState } from "react";
import "./LogoutButton.css";

const LogoutButton = () => {
  const [authStatus, setAuthStatus] = useState(true);

  const onClick = () => {
    setAuthStatus(!authStatus);
  };

  return (
    <button className="logout" onClick={onClick}>
      {authStatus ? "Logout" : "Login"}
    </button>
  );
};

export default LogoutButton;
