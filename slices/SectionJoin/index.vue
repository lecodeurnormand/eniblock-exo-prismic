<template>
<section class="section-join">
    <div class="wrapper">
        <div class="container-partners">
            <div class="partners">
              <PrismicRichText :field="slice.primary.title" />
            </div>
            <div class="logos-footer">
              <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
                <PrismicImage :field="item.img" />
              </div>  
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionJoin",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
