import links from '@resources/links';
import icons from '@resources/icons/tech';
import styles from '@styles/projects/TechStack.module.scss';

function TechStack({ layer, items }) {
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
                rel="noopener noreferrer"
                key={name + idx}
              >
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
      <h1 className={styles.layer}>{layer}</h1>
      {renderItems()}
    </div>
  );
}

export default TechStack;
