import RobotForm from "../RobotForm/RobotForm";
import RobotsList from "../RobotsList/RobotsList";
import UserLogin from "../UserForm/UserLogin";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
      </header>

      <RobotsList />
      <RobotForm />
      <UserLogin />
    </LayoutStyled>
  );
};

export default Layout;
