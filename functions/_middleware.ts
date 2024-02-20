import proxyflare from '@flaregun-net/proxyflare-for-pages'

const routes: Route[] = [
  {
    from: {
      pattern: 'vue3-demo-project.pages.dev/api/*',
    },
    to: {
      url: 'https://opendata.cwa.gov.tw/api',
    },
  },

]

// `PagesFunction` is from @cloudflare/workers-types
export const onRequest: PagesFunction[] = [
  context =>
    proxyflare({
      config: {
        global: { debug: true },
        routes,
      },
    })(context),
  // other Pages plugins and middleware
]
