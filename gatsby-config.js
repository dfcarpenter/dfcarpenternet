module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description: 'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-remark-code-repls',
      options: {
        // Optional default link text.
        // Defaults to "REPL".
        // eg <a href="...">Click here</a>
        defaultText: 'Click here',
    
        // Optional runtime dependencies to load from NPM.
        // This option only applies to REPLs that support it (eg CodeSandbox).
        // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
        dependencies: ['react', 'react-dom'],
    
        // Example code links are relative to this dir.
        // eg examples/path/to/file.js
        directory: `${__dirname}/examples/`,
    
        // Optional externals to load from a CDN.
        // This option only applies to REPLs that support it (eg Codepen).
        // eg '//unpkg.com/react/umd/react.development.js'
        externals: [],
    
        // Optional HTML contents to inject into REPL.
        // Defaults to `<div id="root"></div>`.
        // This option only applies to REPLs that support it (eg Codepen, CodeSandbox).
        // eg '<div id="root"></div>'
        html: '',
    
        // Optional path to a custom redirect template.
        // The redirect page is only shown briefly,
        // But you can use this setting to override its CSS styling.
        redirectTemplate: `${__dirname}/src/templates/redirect-template.js`,
    
        // Optional link target.
        // Note that if a target is specified, "noreferrer" will also be added.
        // eg <a href="..." target="_blank" rel="noreferrer">...</a>
        target: '_blank',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
