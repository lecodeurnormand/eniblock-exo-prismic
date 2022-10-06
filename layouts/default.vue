<template>
    <div>
      <Header v-if="header.data"
      :header="header"
      />
      <main><nuxt/></main>
      <Footer/>
    </div>
  </template>
  
  <script>
  
  import Footer from '/components/Footer.vue';
  import Header from '/components/Header.vue';
  
  export default {
    components: {
      Footer,
      Header
    },
    data() {
        return {
          header: {},
          footer: {}
        }
      },
      async fetch() {
        this.header = await this.$prismic.api.getSingle('header'),
        this.footer = await this.$prismic.api.getSingle('footer')
      }
  }
  
  </script>
  
  