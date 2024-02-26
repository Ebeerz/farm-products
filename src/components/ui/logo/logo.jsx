import "./style.css";

function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={"assets/logo.svg"} alt="logo" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;