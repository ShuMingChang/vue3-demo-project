import { createFetch } from '@vueuse/core'

const useCWBFetch = createFetch({
  // baseUrl: import.meta.env.VITE_WEATHER_BUREAU_URL,
  baseUrl: '/api',
  options: {
    async beforeFetch({ url, options }) {
      const customUrl = new URL(url, window.location.origin)
      customUrl.searchParams.append(
        'Authorization', import.meta.env.VITE_WEATHER_BUREAU_API_KEY,
      )
      return { url: customUrl, options }
    },
  },
  // fetchOptions: {
  //   mode: 'cors',
  // },
})

export default useCWBFetch
