<template>
  <footer>
        <div class="logo-footer">
                <PrismicImage :field="footer.data.logo" />
            </div>

            <slice-zone :components="components" :slices="footer.data.slices" class="container-eniblock" />



        <div class="language">
            <a href="#" class="btn">
                <span class="btn-text">English <div class="arrow-down">
                    <img src="~assets/svg/arrow-down.svg" alt="arrow down">
                </div>
               </span>
            </a>
            </div>



        <div class="container-copyright">
            <div class="terms"><p>Privacy policy</p><p>Terms and conditions</p></div>
                <div class="copyright">© 2022 Eniblock. All rights reserved. Made by Bruno</div>
                    <div class="language">
                        <p>Contact ou Team</p>
                        <a href="#" class="btn">
                            <span class="btn-text">English <div class="arrow-down">
                                <img src="~assets/svg/arrow-down.svg" alt="arrow down">
                            </div>
                           </span>
                        </a>
                        </div>
                </div>
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