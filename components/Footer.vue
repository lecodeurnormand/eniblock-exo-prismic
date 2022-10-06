<template>
  <footer>
    <slice-zone :components="components" :slices="footer.data.slices" />
        <div class="container-eniblock">
            <div class="logo-footer">
                <PrismicImage :field="footer.data.logo" /> 
                <img src="~assets/svg/logo-footer.svg" alt="">
            </div>
<div class="nav-footer">
    <nav class="nav-footer-list">
        <!-- <h6><PrismicRichText :field="slice.primary.title" /></h6> -->

        <!-- <PrismicRichText :field="slice.primary.title" /> -->
        <h6>Products</h6>
            <ul>
                <li>
                </li>
                <!-- <li>Eniblock Platform</li>
                <li>Eniblock NFTs</li>
                <li>Eniblock Launchpad</li>
                <li>Eniblock Wallet</li> -->
            </ul>
    </nav>
    <nav class="nav-footer-list">
        <h6>Company</h6>
            <ul>
                <li>About Eniblock</li>
                <li>Newsroom & Blog</li>
                <li>Investors</li>
            </ul>
    </nav>
    <nav class="nav-footer-list">
        <h6>Docs</h6>
            <ul>
                <li>API</li>
                <li>Support</li>
            </ul>
    </nav>
</div>
<div class="subscribe">
    <div class="logos-social">
        <img src="~assets/svg/linkedin.svg" alt="logo linkedin">
        <img src="~assets/svg/twitter.svg" alt="logo twitter">     
    </div>
    <p>Susbcribe to our newsletter</p>
    <div class="email">
        <input type="text" placeholder="Your email">
            <img src="~assets/svg/input-footer.svg" alt="arrow black">
            </div>
        </div>


        <div class="language">
            <a href="#" class="btn">
                <span class="btn-text">English <div class="arrow-down">
                    <img src="~assets/svg/arrow-down.svg" alt="arrow down">
                </div>
               </span>
            </a>
            </div>


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
      data: function() {
        return {
          footer: {},
          components
        }
      },
      async fetch() {
        this.footer = await this.$prismic.api.getSingle('footer')
      }
    }
        </script>