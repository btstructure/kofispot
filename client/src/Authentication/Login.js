import LoginForm from "./LoginForm";

function Login({ onLogin }) {
  return (
      <div>
        <div>
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    
  );
}

export default Login;
