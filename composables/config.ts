export function useConfig() {
  const config = useState('config', () => ({
    // seo
    siteUrl: 'https://localhost',
    siteLogo: '/images/logo.jpeg',
    github: 'https://github.com/Hazel-lin',
    description: '1',
    image: '1',
    article: '1',
    summary: '1',
    schemaOrgJSONLD: {},
    author: 'Hazel',
    title: 'Hazel',
    // headerMenu
    menu: [{
      label: 'Articles',
      icon: '/images/nav-blog.png',
      url: '/articles',
    }, {
      label: 'Projects',
      icon: '/images/nav-dos.png',
      url: '/projects',
    }, {
      label: 'About me',
      icon: '/images/nav-floppy.png',
      url: '/about',
    }],
    // rightMenu
    socialMenu: [
      {
        label: 'Github',
        icon: '/images/nav-github.png',
        url: 'https://github.com/Hazel-lin',
      },
    ],
    // Whether to enable theme color switch
    enableThemeSwitch: true,
    // Number of latest articles on home page
    latestNum: 10,
    // Number of highlight articles on article page
    highlightNum: 10,
  }))

  return {
    config,

  }
}
