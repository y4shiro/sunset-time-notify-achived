module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './out',
      url: ['/'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://gentle-eyrie-01072.herokuapp.com',
      token: 'e8ad80d2-c424-4f96-9211-337d1b10ef44',
    },
  },
};
