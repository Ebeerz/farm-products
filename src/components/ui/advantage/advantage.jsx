import { 
  StyledAdvantage, AdvantageImg, AdvantageType, AdvantageName, AdvantageDescription 
} from './styles';
import PropTypes from 'prop-types';


function Advantage({ type, name, about, image, isNegative }) {
  let options = !isNegative
    ? { bgColor: "#E1EDCE", typeBgColor: "#88AA4D" }
    : { bgColor: "#F8DDD7", typeBgColor: "#F75531" };
  return (
    <StyledAdvantage $bgColor = {options.bgColor}>
      <AdvantageImg
        src={image}
        width={56}
        height={56}
        alt="Картинка причины"
      />
      <AdvantageType
        $bgColor = {options.typeBgColor}
      >
        {type}
      </AdvantageType>
      <AdvantageName>{name}</AdvantageName>
      <AdvantageDescription>{about}</AdvantageDescription>
    </StyledAdvantage>
  );
}
Advantage.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.string,
  isNegative: PropTypes.bool,
}
export default Advantage;
