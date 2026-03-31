const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@interface': path.resolve(__dirname, 'src'),
    },
  },
};
