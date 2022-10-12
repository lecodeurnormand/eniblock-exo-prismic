<template>
  <div>
    <slice-zone :components="components" :slices="document.data.slices" />
</div>
</template>

<script>

import { components } from '~/slices' 
export default {
    data: function(){
        return {components}
    },
    name: "IndexPage",

    // ALL 
    async asyncData({ $prismic, error }) {
    const document = await $prismic.api.getSingle('page')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>