import Title, { TitleSize } from "../../ui/title/title";
import { StyledAbout, StyledAboutWrapper, Text, StyledAboutImg } from "./styles";

function About() {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </StyledAboutWrapper>
      <StyledAboutImg className="about__img" src="assets/about.svg" alt="logo" />
    </StyledAbout>
  );
}

export default About;