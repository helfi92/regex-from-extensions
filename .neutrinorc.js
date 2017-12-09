module.exports = {
  use: [
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/library',
      {
        name: 'regex-from-extension'
      }
    ],
    '@neutrinojs/jest'
  ]
};
