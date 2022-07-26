import SignUpForm from "./SignUpForm";

function SignUp({ onSignUp }) {
  return (
    <div className="singup-form">
      <SignUpForm onSignUp={onSignUp} />
    </div>
  );
}

export default SignUp;
