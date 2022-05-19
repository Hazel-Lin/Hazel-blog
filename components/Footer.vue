<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
const gatsby = '/gatsby.png'
const github = '/nav-github.png'

const links = [
  { url: 'https://taniarascia.substack.com/subscribe', label: 'Newsletter' },
  { url: 'https://ko-fi.com/taniarascia', label: 'Ko-Fi' },
  { url: 'https://patreon.com/taniarascia', label: 'Patreon' },
  { url: 'https://www.taniarascia.com/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/taniarascia', label: 'GitHub', icon: github },
]
</script>

<template>
  <footer className="footer">
    <section>
      <nav>
        <span className="desktop-only">Made by Hazel</span>
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
        </a>
      </nav>
      <nav>
        <a
          v-for="link in madeWithLinks"
          :key="link.url"
          :href="link.url"
          :title="link.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ link.label }}</span>
          <img :src="link.icon" :alt="link.label">
        </a>
      </nav>
    </section>
  </footer>
</template>

<style lang='scss' scoped>

</style>
