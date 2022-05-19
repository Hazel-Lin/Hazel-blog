<script setup lang='ts' >
import { computed, defineComponent, ref } from 'vue'
const github = '/nav-github.png'
const looking = '/me.jpg'
const articles = []
</script>

<template>
  <article className="hero">
    <header>
      <div className="container">
        <div className="flex-content">
          <div>
            <h1>Hey, I'm Hazel.</h1>
            <p className="subtitle small">
              I'm a software engineer in China. I love building
              open-source
              <NuxtLink to="/projects">
                projects
              </NuxtLink>
              and
              <NuxtLink to="/blog">
                writing
              </NuxtLink> about what I learn. This
              website is my digital garden—a compendium of the things I've
              learned and created over the years.
            </p>
          </div>
          <img :src="looking" alt="Me" className="main-image">
        </div>
      </div>
    </header>
    <div className="container">
      <div>
        <h2 className="main-header">
          <span>Latest Articles</span>
          <NuxtLink to="/blog">
            View All
          </NuxtLink>
        </h2>
      </div>
      <h2 className="main-header">
        <span>Highlights</span> <NuxtLink to="/blog">
          View All
        </NuxtLink>
      </h2>
    </div>
  </article>
</template>

<style lang='scss' scoped>

</style>
