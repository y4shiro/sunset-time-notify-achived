module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './out',
      url: ['/'],
      settings: {
        preset: 'desktop',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://rocky-caverns-87987.herokuapp.com',
      token: '2779a1bb-03ef-40c9-a166-16a643d0238b',
    },
  },
};
