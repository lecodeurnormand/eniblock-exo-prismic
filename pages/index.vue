<template>
    <main class="home">
      <slice-zone :components="components" :slices="home.data.slices" />
    </main>
</template>

<script>

import { components } from '~/slices' 
export default {
    data: function(){
        return {components}
    },
    async asyncData({ $prismic, error }) {
    const home = await $prismic.api.getSingle('page')
    if (home) {
      return { home }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>