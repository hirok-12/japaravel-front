// https://v3.nuxtjs.org/api/configuration/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Japaravel',
      meta: [
        { charaset: 'utf-8' },
        {
          namae: 'viewport',
          content: 'width=device-width, user-scalable=yes,initial-scale=1.0',
        },
        // TODO:後で適切なOGP設定に修正する
        // OGP設定
        // ページのURL（絶対パス）
        { name: 'og:url', content: 'https://ja.nuxtjs.org/' },
        // ページの種類。
        // トップページなら"Website"、トップページ以外なら"Article"、
        // ブログなら"blog"を設定する
        { name: 'og:type', content: 'website' },
        // ページの名前
        { name: 'og:site_name', content: 'nuxtアプリ' },
        // ページのタイトル
        { name: 'og:title', content: '【nuxtアプリ】nuxtアプリについて' },
        // ページの説明文
        { name: 'og:description', content: 'これはnuxtアプリです' },
        // SNS上でシェアされた際に表示する画像。絶対パスで記述
        { name: 'og:image', content: 'https://res.cloudinary.com/nuxt/image/upload/w_1200,h_675,c_fill,f_auto/remote/nuxt-org/blog/case-study-livementor/main.png' },
        // twitterのogp設定
        // twitterでの表示形式を指定。
        // "summary", "summary_large_image", "app", "player card"の4種類がある。
        { name: 'twitter:card', content: 'summary' },
        //  @から始まるサイトやブログの管理者のtwitterユーザーIDを指定(省略可能)
        // { name: 'twitter:title', content: '@ユーザー名' },
        //  @から始まるコンテンツ作成者/著者のtwitterユーザーIDを指定(省略可能)
        // { name: 'twitter:creator', content: '@ユーザー名' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        },
      ],
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  runtimeConfig: {
    // public設定(サーバーサイド、クライアントサイド双方で参照可能)
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
      FIREBASE_API_ID: process.env.FIREBASE_API_ID || '',
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '',
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY || '',
    },
  },
})
