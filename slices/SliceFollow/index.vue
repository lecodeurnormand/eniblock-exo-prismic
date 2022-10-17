<template>
<div class="subscribe">
    <div class="logos-social">
  
<div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
  <PrismicImage :field="item.img_social" />
</div>
    
    </div>
    <PrismicRichText :field="slice.primary.label" />
    <div class="email">
        <input type="text" placeholder="Your email">
            <img src="~assets/svg/input-footer.svg" alt="arrow black">
    </div>        
</div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SliceFollow",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
