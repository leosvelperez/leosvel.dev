module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle',
        square: 'square',
      },
    },
  },
};
