import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  outDir: '../../dist/apps/website',
  site: 'https://leosvel.dev',
  integrations: [mdx(), partytown(), sitemap(), tailwind()],
  markdown: {
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'css-variables',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['heading-link'] },
            children: [
              {
                type: 'element',
                tagName: 'img',
                properties: { src: '/assets/link.svg' },
                children: [],
              },
            ],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'element',
            tagName: 'img',
            properties: {
              src: '/assets/external-link.svg',
              alt: 'External link icon',
            },
            children: [],
          },
          contentProperties: { className: ['external-link-icon'] },
        },
      ],
    ],
  },
});
