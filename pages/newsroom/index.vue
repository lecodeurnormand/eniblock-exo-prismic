<template>
  <main class="home">
    <slice-zone :components="components" :slices="newsroom.data.slices" />
  </main>
</template>

<script>

import { components } from '~/slices' 
export default {
  data: function(){
      return {components}
  },
  // ALL 
  async asyncData({ $prismic, error }) {
  const newsroom = await $prismic.api.getSingle('newsroom')
  if (newsroom) {
    return { newsroom }
  } else {
    error({ statusCode: 404, message: 'Page not found' })
  }
}
}
</script>