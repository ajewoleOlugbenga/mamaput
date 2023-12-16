import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="mamaput logo" />
        <h1>MAMA-PUT</h1>
      </div>
      <nav>
        <button> Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
