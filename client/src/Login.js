import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom";


function Login({ onLogin }) {
  const navigate = useNavigate();
  
  function handleSignUp() {
    navigate("/SignUp");
  }
  
  return (
    <div className="login-form">
      <LoginForm onLogin={onLogin}/>
      <div>
        <button onClick={handleSignUp} type="submit">
          SignUp
        </button>
      </div>
    </div>
    
  );
}

export default Login;