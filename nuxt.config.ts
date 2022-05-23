import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '~/modules/markdown',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  components: {
    dirs: [
      './components',
    ],
    transform: {
      include: [/\.vue$/, /\.md$/],
    },
  },
  autoImports: {
    transform: {
      include: [/\.vue$/, /\.md$/],
    },
  },
  extensions: [
    '.vue',
    '.md',
  ],
  // 以下配置会直接传递给vite
  vite: {
    // @ts-expect-error any
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
  },
})
