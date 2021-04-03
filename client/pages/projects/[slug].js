import { useRouter } from 'next/router';
import ProjectContainer from '@components/projects/project-container';

import { getProjectBySlug, getAllProjects } from '@utils/getPosts';
import markdownToHTML from '@utils/markdownToHtml';
import ProjectHeading from '@components/projects/project-heading';

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { name, coverImg } = project;

  return (
    <ProjectContainer>
      <ProjectHeading name={name} coverImg={coverImg} />
    </ProjectContainer>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'name',
    'description',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImg',
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

export async function getStaticPaths() {
  const projects = getAllProjects(['slug']);

  return {
    paths: projects.map((project) => {
      console.log(project.slug);
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
