import ProjectHeading from '@components/projects/project-heading';
import TechStack from '@components/projects/tech-stack';

import { getPath, getFileContent } from '@utils/getPosts';
import { markdownToHTML } from '@utils/markdownToHTML';

export default function Synthesis({ project, content }) {
  const { name, tech } = project;

  return (
    <>
      <ProjectHeading name={name} />
      {renderTech(tech)}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
