import { getFileContent, getPath } from '@utils/getPosts';
import { markdownToHTML } from '@utils/markdownToHTML';

// import styles from "./Synthesis.module.scss"

function Plantopi() {
  return <div></div>;
}

export default Plantopi;

export async function getStaticProps() {
  const folderPath = getPath('_projects');

  const project = getFileContent(folderPath, 'synthesis', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await markdownToHTML(project.content || '');

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}
