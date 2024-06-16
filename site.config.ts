import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e804b71727f44a74a1eb862346736e01',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "eui's blog",
  domain: 'euichan.xyz',
  author: 'eui',

  // open graph metadata (optional)
  description: "eui's blog - developer blog",

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'entrolEC',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc6c1b667-ac44-428f-bbf8-9c08bd0fb0bb%2Fc8c9fbd2-e964-4e6f-9161-10d72e25921e%2Fapple-icon-precomposed.png?table=block&id=e804b717-27f4-4a74-a1eb-862346736e01&spaceId=c6c1b667-ac44-428f-bbf8-9c08bd0fb0bb&width=250&userId=690bfdae-5d5c-446d-ade4-d2b085860745&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlAdditions: {
    '/euichans-portfolio': '074c244c6d074108b911cf3ff8ed6257'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  // navigationLinks: [
  //   {
  //     title: '블로그',
  //     pageId: 'e804b71727f44a74a1eb862346736e01',
  //     menuPage: true
  //   },
  //   {
  //     title: '블로그',
  //     pageId: 'e804b71727f44a74a1eb862346736e01',
  //   }
  // ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: false,
});
