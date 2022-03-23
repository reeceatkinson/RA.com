// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reece Atkinson',
  tagline: 'I am a frontend developer that focuses on the users experience of design and speed. ',
  url: 'https://reece.ml',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'reeceatkinson', // Usually your GitHub org/user name.
  projectName: 'reeceatkinson.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  noIndex: false, // Defaults to `false`

   

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/reeceatkinson/reeceatkinson.github.io',
        },
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-5EV3R68GS3',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'R',
          src: 'img/reece.png',
        },
        items: [
         /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'My Snippets',
          },*/
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: 'Contact Me', position: 'left'},
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {to: '/websitemake', label: 'Want a website?', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Reece Atkinson.`,
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `Welcome to my new website! I am actively working on it so somethings aren't fully finished yet!`,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `Support Ukraine 🇺🇦 <a href="https://opensource.facebook.com/support-ukraine" target="_blank" rel="noopener noreferrer">Help Provide Humanitarian Aid to Ukraine.</a>`,
      },
      announcementBar: {
        id: 'announcementBar-4', // Increment on change
        content: `I just published my thoughts on the new Mac Studio and Studio Display 🥳. You can read more about it <a href="/blog/macstudio" target="_blank" rel="noopener noreferrer">here.</a>`,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'R6R818NO8K',

        placeholder: 'Search...',
  
        // Public API key: it is safe to commit it
        apiKey: 'b7b43981d7cc831dee9fd2b5735764c4',
  
        indexName: 'reeceatkinson',
    
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;