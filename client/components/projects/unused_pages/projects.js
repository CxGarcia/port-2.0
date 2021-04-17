import { ProjectCard } from '@components/molecules';

import styles from '@styles/Projects.module.scss';

function Projects() {
  const projectList = ['synthesis', 'plantopi'];

  function renderProjects() {
    return projectList.map((project) => {
      return <ProjectCard name={project} />;
    });
  }

  return <div className={styles.container}>{renderProjects()}</div>;
}

export default Projects;
