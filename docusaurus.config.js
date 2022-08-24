const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//import Tabs from '@theme/Tabs';
//import TabItem from '@theme/TabItem';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Botlhale NLP Toolkit Documentation',
  tagline: "Let's get started! 🚀",
  url: 'https://docs.botlhale.xyz',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'botlhale-AI', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://botlhale-ai.github.io/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://botlhale-ai.github.io/documentation/',
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
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Botlhale AI Logo',
          src: 'img/logo.svg',
        },
        items: [          
          {
            type: 'doc',
            docId: 'bot-builder/Bot Creation',
            position: 'left',
            label: 'Platform',
          },
          {
            type: 'doc',
            docId: 'API/Quickstart',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'Tutorials/Platform Tutorials',
            position: 'right',
            label: 'Tutorials',
          },
          {to: '/blog', label: 'Blog', position: 'right'},

          {
            href: 'https://github.com/Botlhale-AI',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Platform Doc',
            items: [
              {
                label: 'Bot Builder',
                to: 'docs/bot-builder/Bot%20Creation',
              },    
              {
                label: 'Live Bots',
                to: '/docs/live-bots/Deployments',
              },                   
              {
                label: 'Help Desk',
                to: '/docs/help-desk/Live%20Chats',
              },    
                 
              {
                label: 'Settings',
                to: '/docs/settings/General%20Settings',
              }, 
              {
                label: 'Tutorials',
                to: '/docs/Tutorials/Platform%20Tutorials',
              },                   
            ],
          },
          {
            title: 'API',
            items: [
              {
                label: 'Quickstart',
                to: 'docs/API/Quickstart',
              },                   
              {
                label: 'Authentication',
                to: 'docs/API/Authentication',
              },    
                 
              {
                label: 'Response Codes',
                to: 'docs/API/Errors',
              },       
            ],
          },
          {
            title: 'Speech APIs',
            items: [                                
              {
                label: 'ASR',
                to: 'docs/API/Speech APIs/ASR',
              },    
                 
              {
                label: 'TTS',
                to: 'docs/API/Speech APIs/TTS',
              },   
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/18812768/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/botlhaleAI',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/botlhaleai',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://botlhale.ai/2021/07/13/9-reasons-your-business-needs-a-chatbot/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/botlhale-ai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botlhale AI Pty Ltd, All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },  
      // algolia: {
      //   contextualSearch: true,
      // },
    }),
});
