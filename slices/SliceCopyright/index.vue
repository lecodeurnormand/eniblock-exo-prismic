<template>
 <div class="down">
 <div class="language">
    <a href="#" class="btn">
        <span class="btn-text">English <div class="arrow-down">
            <img src="~assets/svg/arrow-down.svg" alt="arrow down">
        </div>
        </span>
    </a>
    </div>


<div class="container-copyright">
<div class="terms">
<div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
  <PrismicLink :field="item.link">
     <PrismicRichText :field="item.label" />
  </PrismicLink>
</div>
</div>
    <!-- <div class="terms"><p>Privacy policy</p><p>Terms and conditions</p></div> -->
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
      </div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SliceCopyright",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
