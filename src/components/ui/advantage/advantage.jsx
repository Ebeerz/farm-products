import "./style.css";
import PropTypes from 'prop-types';


function Advantage({ type, name, about, image, isNegative }) {
  let options = !isNegative
    ? { bgColor: "#E1EDCE", typeBgColor: "#88AA4D" }
    : { bgColor: "#F8DDD7", typeBgColor: "#F75531" };
  return (
    <div className="advantage" style={{ backgroundColor: options.bgColor }}>
      <img
        src={image}
        className="advantage__img"
        width={56}
        height={56}
        alt="Картинка причины"
      />
      <span
        className="advantage__type"
        style={{ backgroundColor: options.typeBgColor }}
      >
        {type}
      </span>
      <span className="advantage__name">{name}</span>
      <p className="advantage__description">{about}</p>
    </div>
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
