module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prices`,
        path: `${__dirname}/src/assets/prices/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos-kids`,
        path: `${__dirname}/src/assets/photos/kids/`,
      },
    },    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos-wait`,
        path: `${__dirname}/src/assets/photos/wait/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos-family`,
        path: `${__dirname}/src/assets/photos/family/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/assets/about/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [`album`],
        queryLimit: 1000,
      },
    },
  ],
}
