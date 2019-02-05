module.exports = { 
  siteMetadata: {
    title: 'EICON',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-antd',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133877666-1",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'EICON CLINICAL IMAGING CLOUD',
        short_name: 'EICON',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/eicon_favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      headers: {
        "/*.js": [
          'cache-control: public, max-age=31536000, immutable'
        ],
        "/*.css": [
          'cache-control: public, max-age=31536000, immutable'
        ],
        "/sw.js": [
          'cache-control: public, max-age=0, must-revalidate'
        ],
      }
    }
  ],
}
