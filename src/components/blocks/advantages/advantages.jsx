import Title from "./../../ui/title/title";
import "./style.css";
import Advantage from "../../ui/advantage/advantage";
import advantagesList from "../../../mocks/advantages";
import Button from "/src/components/ui/button/button";

function Advantages() {
  return (
    <section className="advantages">
      {advantagesList?.length ? (
        <>
          <Title>Почему фермерские продукты лучше?</Title>
          <ul className="advantages__advantages-list advantages-list">
            {advantagesList.map((advantage) => (
              <li className="advantages-list__item" key={advantage.id}>
                <Advantage {...advantage} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <Button>Купить</Button>
    </section>
  );
}

export default Advantages;