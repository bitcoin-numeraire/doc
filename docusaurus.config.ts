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
        '📣 <strong><a href="https://github.com/bitcoin-numeraire/swissknife/releases/tag/v0.1.0" target="blank">Numeraire SwissKnife v0.1.0</a></strong> is out!',
      backgroundColor: "#F2B81B",
      textColor: "#121212",
      isCloseable: false,
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
          href: 'https://api.numeraire.tech/docs',
          position: "left",
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
              href: '#',
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
};

export default config;
