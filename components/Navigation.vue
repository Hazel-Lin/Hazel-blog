<script setup lang='ts' >
import { computed, defineComponent, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const moon = '/moon.png'
const blog = '/nav-blog.png'
const floppy = '/nav-floppy.png'
const github = '/nav-github.png'
const projects = '/nav-projects.png'
const twitter = '/nav-twitter.png'

const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/me', icon: floppy, label: 'About me' },
]
const socialNavItems = [
  { url: 'https://github.com/Hazel-Lin', icon: github, label: 'GitHub' },
  { url: 'https://twitter.com/taniarascia', icon: twitter, label: 'Twitter' },
]
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header className="navigation">
    <div className="navigation-inner">
      <nav className="brand-section">
        <NuxtLink to="/" class-name="brand">
          <span>Hazel</span>
        </NuxtLink>
      </nav>
      <div>
        <nav>
          <NuxtLink v-for="(item) in mainNavItems" :key="item.label" :to="item.url" active-class-name="active">
            <img :src="item.icon" :alt="item.label">
            <div className="tooltip">
              {{ item.label }}
            </div>
          </NuxtLink>
        </nav>
      </div>
      <div className="toolbar-section">
        <nav className="social-nav">
          <NuxtLink v-for="(item) in socialNavItems" :key="item.label" :to="item.url" active-class-name="active">
            <img :src="item.icon" :alt="item.label">
            <div className="tooltip">
              {{ item.label }}
            </div>
          </NuxtLink>
        </nav>
        <button className="theme-switcher" @Click="toggleDark">
          <img :src="moon">
        </button>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>

</style>
