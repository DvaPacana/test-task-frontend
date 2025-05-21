export default {
  plugins: {
    'postcss-nested': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      stage: 3,
      features: {
        'nesting-rules': true
      }
    },
    'autoprefixer': {},
  }
}
