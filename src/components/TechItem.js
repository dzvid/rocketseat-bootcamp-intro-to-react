import React from 'react';

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

export default TechItem;
