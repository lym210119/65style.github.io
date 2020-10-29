// module.exports = {
//   title: '0day music',
//   description: '0day music',

//   theme: '@vuepress/theme-blog',
//   themeConfig: {
//     // Please keep looking down to see the available options.
//     nav: [
//       // 导航条相关配置
//       { text: '首页', link: '/' },
//       { text: '标签', link: '/tag/' },
//       { text: '关于 ', link: '/about/' },
//       { text: 'github ', link: 'https://github.com/gusibi/', target: '_blank' },
//     ],
//   },
// }
module.exports = {
  plugins: [
    'aplayer',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-154637963-1', // UA-00000000-0
      },
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        ad_client: "ca-pub-4971335259369317" // replace it with your ad_client
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '../assets/images',
      },
    },
  },
  title: '0day music',
  description: '0day music',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */

    // dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    // nav: [
    //   {
    //     text: 'Blog',
    //     link: '/',
    //   },
    //   {
    //     text: 'Tags',
    //     link: '/tag/',
    //   },
    //   {
    //     text: 'Location',
    //     link: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      //   contact: [
      //     {
      //       type: 'codepen',
      //       link: '/',
      //     },
      //     {
      //       type: 'codesandbox',
      //       link: '/',
      //     },
      //     {
      //       type: 'facebook',
      //       link: '/',
      //     },
      //     {
      //       type: 'github',
      //       link: 'https://github.com/vuepressjs/vuepress-theme-blog',
      //     },
      //     {
      //       type: 'gitlab',
      //       link: '/',
      //     },
      //     {
      //       type: 'instagram',
      //       link: '/',
      //     },
      //     {
      //       type: 'linkedin',
      //       link: '/',
      //     },
      //     {
      //       type: 'mail',
      //       link: '/',
      //     },
      //     {
      //       type: 'messenger',
      //       link: '/',
      //     },
      //     {
      //       type:'music',
      //       link:'/'
      //     },
      //     {
      //       type: 'phone',
      //       link: '/',
      //     },
      //     {
      //       type: 'twitter',
      //       link: 'https://twitter.com/vuepressjs',
      //     },
      //     {
      //       type:'video',
      //       link:'/'
      //     },
      //     {
      //       type: 'web',
      //       link: '/',
      //     },
      //     {
      //       type: 'youtube',
      //       link: '/'
      //     }
      //   ],
      copyright: [
        {
          text: 'Powered by VuePress',
          link: 'https://vuepress.vuejs.org/',
        },
        {
          text: 'Copyright © 2020-present',
          link: '#',
        },
      ],
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    // directories:[
    //   {
    //     id: 'post',
    //     dirname: '_posts',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    //   {
    //     id: 'writing',
    //     dirname: '_writings',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tag', 'tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://blog.65style.com/',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: '65style',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */
    newsletter: {
      endpoint:
        'https://65style.us2.list-manage.com/subscribe/post?u=4f3e6e952220cb3517cb77de4&amp;id=759e393024',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    feed: {
      canonical_base: 'https://blog.65style.com',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    summary: false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true,
  },
}
