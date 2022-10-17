<template>
  <div>
    <slice-zone type="blog" :uid="$route.params.uid" />
  </div>
</template>
  
  <script>
    import SliceZone from 'vue-slicezone'
  
    export default {
      components: {
        SliceZone,
      },
      async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("blog", params.uid)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: "Page not found" })
    }
  }
    }
  </script>