import links from '@resources/links';
import icons from '@resources/icons/tech';
import styles from '@styles/projects/TechStack.module.scss';

function TechStack({ layer, items, fill }) {
  function renderItems() {
    return (
      <span className={styles.techContainer} key={layer}>
        {items.split(',').map((name, idx) => {
          const link = links[name];
          const Icon = icons[name];
          if (Icon !== undefined) {
            return (
              <a
                href={link}
                title={name}
                target="_blank"
                key={name + idx}
                rel="noopener noreferrer"
              >
                <Icon className={styles.icon} styles={{ fill }} />
              </a>
            );
          } else return null;
        })}
      </span>
    );
  }

  return (
    <span className={styles.container}>
      <h2 className={styles.layer}>{layer}</h2>
      {renderItems()}
    </span>
  );
}

export default TechStack;
