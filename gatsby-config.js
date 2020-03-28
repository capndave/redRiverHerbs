require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Red River Herbs',
    author: 'Dave Thompson'
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
      }
    },
    'gatsby-transformer-sharp',
  ]
}
