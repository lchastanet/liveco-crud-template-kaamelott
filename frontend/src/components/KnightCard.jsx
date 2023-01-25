import React from "react";
import PropTypes from "prop-types";

function KnightCard({ name, age }) {
  return (
    <li>
      {name}, {age} ans
    </li>
  );
}

KnightCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default KnightCard;
