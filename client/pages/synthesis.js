import ProjectHeading from '@components/projects/project-heading';
import TechStack from '@components/projects/tech-stack';

import { getPath, getFileContent } from '@utils/getPosts';
import { markdownToHTML } from '@utils/markdownToHTML';

export default function Synthesis({ project, content }) {
  const { name, tech } = project;

  return (
    <>
      <ProjectHeading name={name} />
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
