import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Numeraire Docs',
  tagline: 'Numeraire Documentation Portal',
  favicon: 'img/favicon.ico',
  url: 'https://docs.numeraire.tech',
  baseUrl: '/',
  organizationName: 'bitcoin-numeraire', 
  projectName: 'numeraire-docs',
  deploymentBranch: "gh-pages",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/bitcoin-numeraire/docs/edit/main/',
          path: "docs",
          routeBasePath: "/",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "announcement_bar",
      content:
        '📣 <strong><a href="https://github.com/bitcoin-numeraire/swissknife/releases/tag/v0.1.0" target="blank">Numeraire SwissKnife</a></strong> is out!',
      backgroundColor: "#F2B81B",
      textColor: "#121212",
      isCloseable: true,
    },
    image: 'img/social.png',
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/img/social.png" },
      { property: "og:image", content: "/img/social.png" },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Numeraire',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: "doc",
          docId: "account/index",
          position: "left",
          label: "Account",
        },
        {
          type: "doc",
          docId: "swissknife/index",
          position: "left",
          label: "SwissKnife",
        },
        {
          type: "doc",
          docId: "developers/index",
          position: "left",
          label: "Developers",
        },
        {
          href: 'https://api.numeraire.tech/docs',
          position: "right",
          label: "API Reference",
        },
        {
          href: 'https://app.numeraire.tech',
          position: 'right',
          label: "User Dashboard",
        },
        {
          href: 'https://github.com/bitcoin-numeraire',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: "https://twitter.com/NumeraireBTC",
          className: "header-twitter-link",
          position: "right",
          "aria-label": "Twitter",
        },
        {
          href: "https://nostr.com/npub1m8pwckdf3n5lyd2m463ad3u4kk98qmwfs9s7hrmj6knd07frenlsfr0uje",
          className: "header-nostr-link",
          position: "right",
          "aria-label": "Nostr",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Numeraire Homepage',
              href: 'https://numeraire.tech',
            },
            {
              label: 'Numeraire Dashboard',
              href: 'https://app.numeraire.tech',
            },
            {
              label: 'API Reference',
              href: 'https://api.numeraire.tech/docs',
            },
            {
              label: 'Lightning Node',
              href: 'https://amboss.space/node/02fc22cb2dd9c71b39ad246ae206259376e0127cce2192d4061abd0172b53f391b',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bitcoin-numeraire',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NumeraireBTC',
            },
            {
              label: 'Nostr',
              href: 'https://nostr.com/npub1m8pwckdf3n5lyd2m463ad3u4kk98qmwfs9s7hrmj6knd07frenlsfr0uje',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Numeraire SwissKnife',
              href: 'https://github.com/bitcoin-numeraire/swissknife',
            },
            {
              label: 'Contribute to our docs',
              href: 'https://github.com/bitcoin-numeraire/doc',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Numeraire Technologies.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
        indexBlog: false,
      },
    ],
  ],
};

export default config;
