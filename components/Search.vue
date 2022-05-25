<script setup lang='ts'>
import { computed, defineComponent, ref } from "vue";

const searchIcon = "/nav-search.png";
</script>

<template>
    <div>
        <div className="search-bar">
            <input
                ref="searchRef"
                id="search"
                type="search"
                className="search-input"
                placeholder="Begin typing to search..."
            />
            <img className="search-icon" :src="searchIcon" alt="Search" />
        </div>

        <section>
            <!-- <Posts data="{results}" showYears query="{query}" />
            <p style="margintop: 2rem">Sorry, nothing matched that search.</p>
            <Posts data="{data}" showYears /> -->
        </section>
    </div>
</template>

<style lang='scss' scoped>
</style>
