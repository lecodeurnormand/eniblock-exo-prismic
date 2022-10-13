<template>
    <slice-zone :components="components" :slices="home.data.slices" />
</template>

<script>

import { components } from '~/slices' 
export default {
    data: function(){
        return {components}
    },
    // name: "IndexPage",

    // ALL 
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