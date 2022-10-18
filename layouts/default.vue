<template>
    <div>
      <Header v-if="header.data"
      :header="header"/>
     <nuxt/>
      <Footer v-if="footer.data" 
      :footer="footer"/>
    </div>
  </template>
  
  <script>
  import Footer from '/components/Footer.vue';
  import Header from '/components/Header.vue';
  export default {
    components: {
      Footer,
      Header,
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
      },
      methods: {
  handleScroll () {
    let button = document.querySelector('header .button');
    let button_text = document.querySelector('header .button .btn-text');
    let header = document.querySelector('header');
      if(window.scrollY>20){
          header.style.position="fixed";
          header.style.height = "90px";
          header.style.padding ="0px";
          button.classList.add('button-green');
          button_text.classList.add('btn-text-black');
      }
      else{
          header.style.position= "absolute";
          header.style.height = "120px";
          button.classList.remove('button-green');
          button_text.classList.remove('btn-text-black');
      }
  }
},
created () {
    if (process.client) { 
        window.addEventListener('scroll', this.handleScroll);
    }
},
destroyed () {
    if (process.client) { 
        window.removeEventListener('scroll', this.handleScroll);
    }
}
  }
  
  </script>
  
  