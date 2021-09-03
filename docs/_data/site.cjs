
module.exports = async function siteConfig() {
  return {
    // analytics: 'xx',
    dir: 'ltr',
    lang: 'en',
    name: 'Marcos Gil Blog',
    description: 'Personal web development laboratory',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/marcosgilf/blog',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/marcosgilf'
      }
    ],
    gitSiteUrl: 'https://github.com/marcosgilf/blog',
    helpUrl: 'https://github.com/marcosgilf/blog/issues',
    logoAlt: 'Soccer Ball',
    iconColorMaskIcon: 'white',
    iconColorMsapplicationTileColor: 'black',
    iconColorThemeColor: 'black',
  };
};
