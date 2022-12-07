import SignUpForm from "./SignUpForm";

function SignUp({ onSignUp }) {
  return (
    <div>
      <SignUpForm onSignUp={onSignUp} />
    </div>
  );
}

export default SignUp;
