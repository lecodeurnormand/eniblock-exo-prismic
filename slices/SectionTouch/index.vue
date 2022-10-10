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
            <PrismicText :field="slice.primary.subtitle" wrapper="h5" class="font-thin" />
               <!-- <span class="font-thin">Want to build your own custom app?</span> <br/> -->
                  <!-- <PrismicText :field="slice.primary.title" wrapper="h5" class="font-bold" /> -->
                    <!-- <span class="font-bold">Get in touch with us!</span> -->
                  <PrismicLink :field="slice.primary.link" class="btn">
                  <PrismicText :field="slice.primary.label" class="btn-text" wrapper="p" />
                    <!-- <span class="btn-text"> Get in Touch</span> -->
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