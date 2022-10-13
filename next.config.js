const withTM = require('next-transpile-modules')(['react-syntax-highlighter']); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
});
