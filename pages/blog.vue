<script setup lang='ts'>
import { isSearching, query, searchResult } from '~/composables/search'
import { articlesList } from '~/data/guides'
</script>

<template>
  <div>
    <article class="blog-page">
      <header>
        <div class="container">
          <h1>Articles</h1>
          <p class="description">
            Tutorials, technical articles, snippets, reference materials, and
            all development-related resources I've written.
          </p>
        </div>
      </header>

      <section>
        <div class="container">
          <section>
            <template>
              <template v-for="v in articlesList" :key="v.title">
                <h2 class="main-header">
                  <span>{{ v.year }}</span>
                </h2>
                <Posts
                  v-for="item in v.list" :key="item.name"
                  :node="item"
                  time-type="post"
                />
              </template>
            </template>
          </section>
        </div>
      </section>
    </article>
  </div>
</template>
