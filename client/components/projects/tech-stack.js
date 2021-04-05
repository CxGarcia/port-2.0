import links from '@resources/links';
import icons from '@resources/icons/tech';
import styles from '@styles/projects/TechStack.module.scss';

function TechStack({ layer, items }) {
  function renderItems() {
    return (
      <span className={styles.techContainer}>
        {items.split(',').map((name, idx) => {
          const link = links[name];
          const Icon = icons[name];
          if (Icon !== undefined) {
            return (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon className={styles.icon} />
              </a>
            );
          } else return null;
        })}
      </span>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.layer}>{layer}</h2>
      {renderItems()}
    </div>
  );
}

export default TechStack;
