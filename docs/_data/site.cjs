
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
        url: 'https://github.com/marcoswebdev/blog',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/marcoswebdev_'
      }
    ],
    gitSiteUrl: 'https://github.com/marcoswebdev/blog',
    helpUrl: 'https://github.com/marcoswebdev/blog/issues',
    logoAlt: '',
    iconColorMaskIcon: 'white',
    iconColorMsapplicationTileColor: 'black',
    iconColorThemeColor: 'black',
  };
};
