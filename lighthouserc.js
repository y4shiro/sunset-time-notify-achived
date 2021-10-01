module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './out',
      url: ['/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
