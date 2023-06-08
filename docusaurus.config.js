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
  custom_edit_url: null,
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
        title: 'Botlhale AI Documentation',
        logo: {
          alt: 'Botlhale AI Logo',
          src: 'img/logo.svg',
        },
        items: [          
          {
            type: 'doc',
            docId: 'Platform/bot-builder/Bot Creation',
            position: 'left',
            label: 'Platform',
          },
          {
            type: 'doc',
            docId: 'APIs/Quickstart',
            position: 'left',
            label: 'APIs',
          },
          {
            type: 'doc',
            docId: 'Tutorials/Platform Tutorials',
            position: 'left',
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
                to: 'docs/Platform/bot-builder/Bot%20Creation',
              },    
              {
                label: 'Live Bots',
                to: '/docs/Platform/live-bots/Deployments',
              },                   
              {
                label: 'Help Desk',
                to: '/docs/Platform/help-desk/Live%20Chats',
              },    
                 
              {
                label: 'Settings',
                to: '/docs/Platform/settings/General%20Settings',
              }, 
              {
                label: 'Tutorials',
                to: '/docs/Platform/Tutorials/Platform%20Tutorials',
              },                   
            ],
          },
          {
            title: 'APIs',
            items: [
              {
                label: 'Quickstart',
                to: 'docs/APIs/Quickstart',
              },                   
              {
                label: 'Authentication',
                to: 'docs/APIs/Authentication',
              },    
                 
              {
                label: 'Response Codes',
                to: 'docs/APIs/Errors',
              },       
            ],
          },
          {
            title: 'Speech APIs',
            items: [                                
              {
                label: 'ASR',
                to: 'docs/APIs/Rest APIs/Speech APIs/ASR',
              },    
                 
              {
                label: 'TTS',
                to: 'docs/APIs/Rest APIs/Speech APIs/TTS',
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
