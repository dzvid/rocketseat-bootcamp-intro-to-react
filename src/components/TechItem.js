import React from 'react';

import PropTypes from 'prop-types';

// Stateless component, so we can use the function format
function TechItem(props) {
  const { tech, onDelete } = props;
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = { tech: 'Oculto' };

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
