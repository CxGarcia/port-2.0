import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPath(folderName) {
  return join(process.cwd(), folderName);
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function matteralizeMarkdown(path) {
  const fileContents = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getFileContent(folderPath, project) {
  const fullPath = join(folderPath, `${project}.md`);
  const { data, content } = matteralizeMarkdown(fullPath);
  const items = {};
  const fields = [
    'name',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tech',
  ];

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = project;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostsBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return posts;
}

const sortBy = {
  dateDescending: (project1, project2) =>
    project1.date > project2.date ? '-1' : '1',
  dateAscending: (project1, project2) =>
    project1.date > project2.date ? '1' : '-1',
  nameAscending: (project1, project2) =>
    project1.title > project2.title ? '-1' : '1',
  nameDescending: (project1, project2) =>
    project1.title > project2.title ? '1' : '-1',
};
