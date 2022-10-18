<!-- <template>
  <div class="content">
    <slice-zone type="blog" :uid="$route.params.uid" />
  </div>
</template>
  
  <script>
    import { SliceZone } from "@prismicio/vue";
  
    export default {
      components: {
        SliceZone,
      },
    async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("blog", params.uid)
    console.log(document)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: "Page not found" })
    }
  }
    }
  </script>
  
  <style scoped>
.content{
  margin-top:500px;
}
</style> -->