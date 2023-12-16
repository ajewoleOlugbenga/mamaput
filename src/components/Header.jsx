import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="mamaput logo" />
        <h1>MAMA-PUT</h1>
      </div>
      <nav>
        <Button textOnly={true}> Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
