import useInput from "../hooks/useInput";

function LoginInput({ valueState }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  function onSubmitHandler() {
    valueState({ email, password });
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email :</label>
      <input type="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password :</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={onSubmitHandler}>
        Login
      </button>
    </div>
  );
}

export default LoginInput;
