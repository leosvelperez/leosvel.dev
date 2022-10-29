const {
  createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'zoom-in': {
          '0%': {
            opacity: 0.5,
            transform: 'scale(0.7)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 300ms ease-in-out',
        'zoom-in': 'zoom-in 192ms ease-in-out',
        'zoom-in-slow': 'zoom-in 300ms ease-in-out',
      },
      listStyleType: {
        circle: 'circle',
        square: 'square',
      },
    },
  },
};
