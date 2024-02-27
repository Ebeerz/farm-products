import { Text, StyledLogo } from "./styles";


function Logo() {
  return (
    <StyledLogo href="/">
      <img alt="logo" src="../../../../public/assets/logo.svg" />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;