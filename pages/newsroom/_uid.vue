<template>
    <div class="content">
      <main class="articles">
        <slice-zone :components="components" :slices="blog.data.slices"/>
      </main>


      <!-- BLOG TEMPLATE -->
<section class="section-hero">
  <wrapper>
    <div class="container-hero">
      <div class="road-link">
        <a href="">Blog</a>
        <img src="s" alt="s">
        <a href="">article X</a>
      </div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sit morbi.</h1>
      <div class="container-button">
        <span>
          <a href="">Blogpost</a>
        </span>
        <span>
          <a href="">Press release</a>
        </span>
      </div>
      <div class="container-info">
        
      <div class="container-author">
        <img src="img" alt="img">
        <div class="container-text">
          <h5>Jane Cooper</h5>
          <p>Published 12/6/21</p>
          <p>2 min read</p>
        </div>
      </div>
      <div class="container-social">
        <p>Share on</p>
        <img src="~assets/svg/enveloppe.svg" alt="Enveloppe">
        <img src="~assets/svg/linkedin.svg" alt="">
        <img src="~assets/svg/twitter.svg" alt="">
        <img src="~assets/svg/whatssap.svg" alt="">
      </div>
<div class="container-img">
  <img src="~assets/img.png" alt="">
</div>
    </div>

    </div>
  </wrapper>
</section>



    </div>
  </template>
    <script>
     import { components } from '~/slices' 
export default {
    data: function(){
        return {components}
    },
      async asyncData({ $prismic, params, error }) {
      const blog = await $prismic.api.getByUID("blog", params.uid)
      if (blog) {
        return { blog }
      } else {
        error({ statusCode: 404, message: "Page not found" })
      }
    }
      }
    </script>
    <style scoped>
    .content{
      margin-top:200px;
    }
  </style>
    