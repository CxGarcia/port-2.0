import React from 'react';
// import styles from '@styles/ProjectCard.module.scss';

function TechStack({ name, items }) {
  function renderItems() {
    return items.split(',').map((item) => {
      return <h3>{item}</h3>;
    });
  }

  return (
    <div>
      <h2>name</h2>
      {renderItems()}
    </div>
  );
}

export default TechStack;
