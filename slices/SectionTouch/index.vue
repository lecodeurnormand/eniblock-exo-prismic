<template>
   <section class="section-touch">
        <div class="wrapper">
            <div class="container-touch">
                <div class="container-slice-left">        
                    <img src="~assets/svg/touch-left.svg" alt="image slice">
                </div>
            <div class="container-slice-right">
                    <img src="~assets/svg/touch-right.svg" alt="image slice">
            </div>
            <div class="container-text">
              <PrismicRichText :field="slice.primary.subtitle" />
            <PrismicRichText :field="slice.primary.title"/>
            </div>
                  <PrismicLink :field="slice.primary.link" class="btn">
                  <PrismicText :field="slice.primary.label" class="btn-text" wrapper="p" />
                  </PrismicLink>
            </div>
        </div>

   </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionTouch",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>