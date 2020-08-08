module.exports = {
  siteMetadata: {
    title: `Joe's Digital Garden`,
    author: `Joe Hallenbeck`,
    description: `A digital garden, or attempt at a public zattelkasten covering diverse topics in computer science, nature, philosophy, and politics`,
    baseUrl: `https://garden.joehallenbeck.com`,
    siteUrl: `https://garden.joehallenbeck.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@aengusm/gatsby-theme-brain`,
      options: {
        notesDirectory: "container/",
        rootPath: "container",
        rootNote: "brain",
      },
    },
  ],
}
