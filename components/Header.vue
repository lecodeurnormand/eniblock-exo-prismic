<template>
    <header>
    <div class="wrapper">
        <div class="container-logo">
                <div class="logo-eniblock">
                    <nuxt-link to="/">
                    <PrismicImage :field="header.data.logo" />
                    </nuxt-link>
                </div>
            
            <div class="container-burger">
                <div class="line-1"></div>
                <div class="line-2"></div>
            </div>
        </div>
     
    <div class="container-nav">
            <ul>
                <li v-for="item in header.data.links"
                    :key="$prismic.asText(item.label)">
                <PrismicLink :field="item.link">
                    {{ $prismic.asText(item.label) }}
                </PrismicLink>
                    <div class="arrow-down"><img src="~assets/svg/arrow-down.svg" alt=" arrow down"></div>
                </li>
            </ul>
    <div class="container-cta" v-for="item in header.data.cta"
            :key="$prismic.asText(item.label)">
                    <PrismicLink :field="item.link">
                        {{ $prismic.asText(item.label) }}
                    </PrismicLink>
                    <div class="arrow-right">
                        <img src="~assets/svg/arrow-right.svg" alt="fleche droite">
                    </div> 
                <div class="button" v-for="item in header.data.cta_button"
                :key="$prismic.asText(item.label)">
                    
                <!-- <a href="#" class="btn"> -->
                    <!-- <PrismicLink :field="item.link"> -->
                    <span class="btn-text">
                        {{ $prismic.asText(item.label) }}</span>
                <!-- </PrismicLink> -->
                <!-- </a> -->
                </div>
            </div>
        </div>
    </div>
</header>
</template>


<script>
    export default {
      data() {
        return {
          header: {}
        }
      },
      async fetch() {
        this.header = await this.$prismic.api.getSingle('header')
      }
    }
    </script>