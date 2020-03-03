const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require("postcss-preset-env")({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : [])
  ]
};
