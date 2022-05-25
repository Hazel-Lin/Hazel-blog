<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
</script>

<template>
  <div>
     <article className="blog-page">
        <header>
          <div className="container">
            <h1>Articles</h1>
            <p className="description">
              Tutorials, technical articles, snippets, reference materials, and
              all development-related resources I've written. See
              <NuxtLink to="/notes">Notes</NuxtLink> for everything else.
            </p>
          </div>
        </header>

        <section>
          <div className="container">
            <Search />
          </div>
        </section>
      </article>
  </div>
</template>

<style lang='scss' scoped>

</style>
