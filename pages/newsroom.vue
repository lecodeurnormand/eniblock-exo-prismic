<template>
    <div>
    <slice-zone :components="components" :slices="newsroom.data.slices" />
    </div>
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
    console.log(newsroom);
    if (newsroom) {
      return { newsroom }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>