module.exports = {
  client: {
    includes: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    tagName: 'gql',
    service: {
      name: 'blog-backend',
      url: process.env.NEXT_PUBLIC_END_POINT,
    },
  },
};
