import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: '../../dist/apps/website',
  site: 'https://leosvel.dev',
  integrations: [partytown(), sitemap(), tailwind()],
  markdown: {
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'css-variables',
    },
    rehypePlugins: [
      'rehype-slug',
      [
        'rehype-autolink-headings',
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
        'rehype-external-links',
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
