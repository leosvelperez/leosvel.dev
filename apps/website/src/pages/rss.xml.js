import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('../blog-posts/**/*.md');
const posts = Object.values(postImportResult).map((post) => ({
  ...post,
  slug: post.file.split('/').pop().split('.').shift(),
}));

export const get = () => rss({
  title: "Leosvel's blog",
  stylesheet: true,
  description: `My blog with articles about web development and programming in general.`,
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    link: `/blog/${post.slug}`,
    pubDate: post.frontmatter.date,
  })),
  customData: `<language>en-us</language>`,
});
