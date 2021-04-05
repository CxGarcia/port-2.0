import ProjectHeading from '@components/projects/project-heading';
import TechStack from '@components/projects/tech-stack';

import logos from '@resources/logos';
import { getPath, getFileContent } from '@utils/getPosts';
import { markdownToHTML } from '@utils/markdownToHTML';

import styles from '@styles/projects/Synthesis.module.scss';

export default function Synthesis({ project, content }) {
  const { name, tech } = project;
  const Logo = logos[name];

  return (
    <>
      <header>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </div>
        {/* <ProjectHeading name={name} /> */}
      </header>

      {renderTech(tech)}
      <section dangerouslySetInnerHTML={{ __html: content }}></section>
    </>
  );
}

export async function getStaticProps() {
  const folderPath = getPath('_projects');

  const { content, ...project } = getFileContent(folderPath, 'synthesis');

  const parsedContent = await markdownToHTML(content || '');

  return {
    props: {
      project,
      content: parsedContent,
    },
  };
}

//methods shared by all projects

function renderTech(tech) {
  return Object.entries(tech).map(([key, values], idx) => {
    return <TechStack layer={key} items={values} key={key + idx} />;
  });
}
