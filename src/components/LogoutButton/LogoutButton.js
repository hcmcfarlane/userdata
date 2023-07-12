import { useState } from "react";

const LogoutButton = () => {
  const [authStatus, setAuthStatus] = useState(true);

  const onClick = () => {
    // console.log("You have logged out successfully");
    setAuthStatus(!authStatus);
  };

  return (
    <button className="logout" onClick={onClick}>
      {authStatus ? "Logout" : "Login"}
    </button>
  );
};

export default LogoutButton;
