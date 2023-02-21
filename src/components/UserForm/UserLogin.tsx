import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import FormStyled from "./UserLoginStyled";

const UserLogin = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  return (
    <FormStyled className="form" onSubmit={onSubmitHandler}>
      <h2>Login</h2>
      <div className="form__section">
        <label
          htmlFor="Username"
          aria-label="username"
          className="form__username"
        >
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="form__input"
          onChange={handleUsername}
          value={username}
        />
      </div>
      <div className="form__section">
        <label
          htmlFor="Password"
          aria-label="Password"
          className="form__password"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          onChange={handlePassword}
          value={password}
        />
      </div>

      <button type="submit" className="form__button">
        Login
      </button>
    </FormStyled>
  );
};

export default UserLogin;
