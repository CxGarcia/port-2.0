import Image from 'next/image';

import styles from '@styles/projects/ProjectHeading.module.scss';

function ProjectHeading({ name, coverImg }) {
  return (
    <div className={styles.container}>
      <img
        src={coverImg}
        className={styles.coverImg}
        alt={`Image for project by the name of ${name}`}
      />

      <h1 className={styles.heading}>{name}</h1>
    </div>
  );
}

export default ProjectHeading;
