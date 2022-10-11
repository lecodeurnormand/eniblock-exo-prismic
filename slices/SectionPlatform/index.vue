<template>
     <section class="section-platform">
        <div class="wrapper">
            <div class="container-text">
                <PrismicRichText :field="slice.primary.title"/>
                    <div class="separate-bar"></div>
                    <PrismicText :field="slice.primary.para" wrapper="p" />
                    </div>
            </div>
        <div class="container-cards">
          <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">   
            <div class="container-card">               
                <PrismicText :field="item.subtitle" wrapper="h6" />
                <div class="circle">
                  <div class="container-tool">
                    <PrismicImage :field="item.img" />
                  </div>
                </div>
                <PrismicText :field="item.title" wrapper="h5" />
                <PrismicText :field="item.para" wrapper="p" />
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionPlatform",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

