<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
</script>

<template>
  <div>
    <h3>
      {title.slice(0, highlightStart)}
      <strong className="highlighted">
        {title.slice(highlightStart, highlightEnd)}
      </strong>
      {title.slice(highlightEnd)}
    </h3>
    <Link
      key="{node.id}/`" to="{prefix" ? ${prefix}${node.slug}` :
      node.slug}
      class-name="{isNew" ? 'post new' : 'post'}
    >
      <span className="flex" style="{{" alignItems: 'center' }}>
        <Img
          fixed="{node.thumbnail}"
          style="{{" marginRight: '1rem', minWidth: '25px' }}
        />
        )}
        {getTitle(node.title, query)}
        <span className="new-badge">{isNew && 'New!'}</span>
      </span>
      <div>
        {formattedDate && !hideDate && (
        <time>{yearOnly ? formattedYear : formattedDate}</time>
        )}
      </div>
    </Link>
  </div>
</template>

<style lang='scss' scoped>
</style>
