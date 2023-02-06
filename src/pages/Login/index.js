import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

import "./login.css";
function Login() {
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const hendleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowLoading(true);
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }, 1000);
  };
  return (
    <div className="loginContainer">
      <form className="formLogin">
        <h1>Login</h1>
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Senha..." />
        <abbr title="🚪">
          <button onClick={hendleLogin}>Entrar</button>
        </abbr>
      </form>
      {showLoading && <Loading />}
    </div>
  );
}

export default Login;
