export default {
  plugins: {
    'postcss-import': {},
    'postcss-combine-duplicated-selectors': {
      removeDuplicatedProperties: true,
    },
    'postcss-combine-media-query': {},
    autoprefixer: {},
  },
};
