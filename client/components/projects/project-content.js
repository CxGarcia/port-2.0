import { getFileContent, getPath } from '@utils/getPosts';
import { markdownToHTML } from '@utils/markdownToHTML';

export default function ProjectContent({ children, content }) {
  return React.cloneElement(children, content);
}

export async function getStaticProps({ projectName }) {
  const folderPath = getPath('_projects');

  const project = getFileContent(folderPath, projectName);

  const content = await markdownToHTML(project.content || '');

  return {
    props: {
      children,
      content,
    },
  };
}
