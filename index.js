if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-query-devtools.production.min.js')
} else {
  module.exports = require('./dist/src/react-query-devtools.development.js')
}
