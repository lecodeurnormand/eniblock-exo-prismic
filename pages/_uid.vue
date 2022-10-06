<template>
    <slice-zone type="page" :uid="$route.params.uid" />
  </template>
  
  <script>
    import SliceZone from 'vue-slicezone'
  
    export default {
      components: {
        SliceZone,
      },
      async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.uid)

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
    }
  </script>