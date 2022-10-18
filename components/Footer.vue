<template>
  <footer>
        <div class="logo-footer">
                <PrismicImage :field="footer.data.logo" />
            </div>

            <slice-zone :components="components" :slices="footer.data.slices" class="container-eniblock" />

        </footer>
</template>

<script>
import { components } from '~/slices' 
 export default {
    props:{
        footer:{
            type:Object
        }
    },
      data: function() {
        return {
          components
        };
    },
    //   async fetch() {
    //     this.footer = await this.$prismic.api.getSingle('footer')
    //   }
    }
        </script>