import React from 'react';
import PropTypes from 'prop-types';

function OptionCard({ columnName }) {
  return (
    <option value={ columnName }>
      { `${columnName}` }
    </option>
  );
}

OptionCard.propTypes = {
  columnName: PropTypes.string.isRequired,
};

export default OptionCard;
