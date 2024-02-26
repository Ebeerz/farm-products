import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <p className="about__text">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
      <img className="about__img" src="assets/about.svg" alt="logo" />
    </section>
  );
}

export default About;