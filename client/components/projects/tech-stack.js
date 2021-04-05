import icons from '@resources/icons/tech';
import styles from '@styles/projects/TechStack.module.scss';

function TechStack({ layer, items }) {
  function renderItems() {
    return (
      <span className={styles.techContainer}>
        {items.split(',').map((techName, idx) => {
          const Icon = icons[techName];
          if (Icon !== undefined) {
            return <Icon className={styles.icon} />;
          } else {
            return <h4>{techName}</h4>;
          }
        })}
      </span>
    );
  }

  return (
    <div>
      <h2>{layer}</h2>
      {renderItems()}
    </div>
  );
}

export default TechStack;
