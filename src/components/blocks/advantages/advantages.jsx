import Title from "./../../ui/title/title";
import { StyledAdvantages, AdvantagesList, AdvantagesButton } from "./styles";
import { Li } from '../../styled';
import Advantage from "../../ui/advantage/advantage";
import advantagesList from "../../../mocks/advantages";

function Advantages() {
  return (
    <StyledAdvantages className="advantages">
      {advantagesList?.length ? (
        <>
          <Title as="h2" $marginBottom="64">Почему фермерские продукты лучше?</Title>
          <AdvantagesList>
            {advantagesList.map((advantage) => (
              <Li key={advantage.id}>
                <Advantage {...advantage} />
              </Li>
            ))}
          </AdvantagesList>
        </>
      ) : null}
      <AdvantagesButton>Купить</AdvantagesButton>
    </StyledAdvantages>
  );
}

export default Advantages;