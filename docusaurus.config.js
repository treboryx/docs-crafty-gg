/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Crafty",
  tagline: "Crafty Documentation",
  url: "https://docs.crafty.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/main.png",
  organizationName: "craftygg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Crafty Docs",
      logo: {
        alt: "Crafty",
        src: "img/main.png",
      },
      // items: [
      //   {
      //     to: "docs/",
      //     activeBasePath: "docs",
      //     label: "Docs",
      //     position: "left",
      //   },
      //   { to: "blog", label: "Blog", position: "left" },
      //   {
      //     href: "https://github.com/facebook/docusaurus",
      //     label: "GitHub",
      //     position: "right",
      //   },
      // ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Bot",
              to: "/",
            },
            {
              label: "API",
              to: "/doc2/",
            },
            {
              label: "mc-stats",
              to: "/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://crafty.gg/discord",
            },
            {
              label: "Twitter",
              href: "https://crafty.gg/twitter",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "crafty.gg",
              href: "https://crafty.gg",
            },
            {
              label: "GitHub",
              href: "https://github.com/craftygg",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crafty`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "🌙",

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "\u{1F602}",

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          routeBasePath: "/", // Set this value to '/'.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
