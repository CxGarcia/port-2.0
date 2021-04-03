import styles from '@styles/projects/ProjectContainer.module.scss';

function ProjectContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ProjectContainer;
