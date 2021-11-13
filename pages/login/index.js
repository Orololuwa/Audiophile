import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import Input from "components/input";
import LoginCtx from "./styled";
import Logo from "components/logo";
import { IoMailOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { login } from "redux/Auth/actionCreator";
import { passwordValidation, emailValidation } from "utilities/validations";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordType = () => {
    setPasswordShown((prev) => !prev);
  };

  const handleLogin = async () => {
    dispatch(login());
  };

  const validateInput = () => {
    return emailValidation(state.email) || passwordValidation(state.password);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (validateInput()) {
      setError(true);
      return;
    }
    handleLogin();
  };

  return (
    <LoginCtx>
      <form onSubmit={submitFormHandler}>
        <Logo />
        <Input
          type="email"
          placeholder="Email"
          variant="outline"
          mode="dark"
          Append={IoMailOutline}
          error={error}
          name="email"
          value={state.email}
          onChange={onChangeHandler}
          onFocus={() => setError(false)}
        />
        <Input
          type={passwordShown ? "text" : "password"}
          placeholder="Password"
          variant="outline"
          mode="dark"
          error={error}
          AppendPassword={
            passwordShown ? (
              <IoEyeOffOutline
                className="append"
                size={25}
                style={{ cursor: "pointer" }}
                onClick={togglePasswordType}
              />
            ) : (
              <IoEyeOutline
                className="append"
                size={25}
                style={{ cursor: "pointer" }}
                onClick={togglePasswordType}
              />
            )
          }
          name="password"
          value={state.password}
          onChange={onChangeHandler}
          onFocus={() => setError(false)}
        />
        <Button type="submit" onClick={submitFormHandler} loading={loading}>
          Log In
        </Button>
      </form>
    </LoginCtx>
  );
};

export default Login;
