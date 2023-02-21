import useUser from "../../hooks/useUser/useUser";
import Form from "../Form/Form";
import RobotsList from "../RobotsList/RobotsList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { loginUser } = useUser();

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
      </header>
      <button
        onClick={() =>
          loginUser({ username: "Felipe", password: "felipe1234" })
        }
      >
        Login guarro
      </button>

      <RobotsList />
      <Form />
    </LayoutStyled>
  );
};

export default Layout;
