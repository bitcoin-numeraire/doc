import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  introSidebar: [
    "introduction",
    "account/index",
    "swissknife/index",
    "developers/index",
    "glossary",
    {
      type: "link",
      label: "Contact Us",
      href: "https://numeraire.tech/contact",
    },
  ],
  accountSidebar: [
    "account/index",
    "account/register",
    {
      type: "link",
      label: "Contact Us",
      href: "https://numeraire.tech/contact",
    },
  ],
  developersSidebar: [
    "developers/index",
    "developers/api-keys",
    "developers/webhooks",
    {
      type: "link",
      label: "API Reference",
      href: "https://api.numeraire.tech/docs",
    },
    {
      type: "link",
      label: "Contact Us",
      href: "https://numeraire.tech/contact",
    },
  ],
  swissknifeSidebar: [
    "swissknife/index",
    "swissknife/getting-started",
    {
      type: "category",
      label: "Deployment",
      link: {
        type: "doc",
        id: "swissknife/deployment/index",
      },
      items: [
        "swissknife/deployment/docker",
        "swissknife/deployment/kubernetes",
        "swissknife/deployment/source",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      link: {
        type: "doc",
        id: "swissknife/configuration/index",
      },
      items: [
        "swissknife/configuration/default",
      ],
    },
    "swissknife/usage/index",
    "swissknife/architecture/index",
    "glossary",
    {
      type: "link",
      label: "API Reference",
      href: "https://api.numeraire.tech/docs",
    },
    {
      type: "link",
      label: "Contact Us",
      href: "https://numeraire.tech/contact",
    },
  ],
};

export default sidebars;
