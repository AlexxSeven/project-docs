// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlexxSeven\'s project docs!',
  tagline: 'Shiny things!',
  favicon: 'ico/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.alexxseven.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlexxSeven', // Usually your GitHub org/user name.
  projectName: 'project-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'plugin-image-zoom',

    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/melodi-change-latest',
            to: '/melodi-change-v1-2-0',
          },
          {
            from: '/glassref-change-latest',
            to: '/glassref-change-v1-1',
          },
          {
            from: '/unlitst-change-latest',
            to: '/unlitst-change-v1-1',
          },
        ],
      },
    ],
  ],

  scripts: [
    'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    {
      src: '/js/kofi-widget.js',
      defer: true,
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AlexxSeven/project-docs/tree/main/',
            showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            'https://github.com/AlexxSeven/project-docs',
          */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      imageZoom: {
        selector: '.markdown img',

        options: {
          margin: 65,
          scrollOffset: '150',
          background: 'rgba(25, 18, 25, .5)',
        }
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Changelogs', position: 'left'},
          {
            href: 'https://github.com/AlexxSeven',
            'aria-label': 'GitHub',
            className: 'navbar-icon navbar-github',
            position: 'right',
          },
          {
            href: 'https://discord.alexxseven.com',
            'aria-label': 'Discord',
            className: 'navbar-icon navbar-discord',
            position: 'right',
          },
          {
            href: 'https://alexxseven.com',
            'aria-label': 'Socials',
            className: 'navbar-icon navbar-socials',
            position: 'right',
          },
        ],
      },
      footer: {
      },
      /*
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                href: 'https://discord.alexxseven.com',
                label: 'Discord',
              },
              {
                href: 'https://alexxseven.com',
                label: 'Socials',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                href: 'https://github.com/AlexxSeven',
                label: 'GitHub',
              },
            ],
          },
        ],
      },
      */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
