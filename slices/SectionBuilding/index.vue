<template>
  <section class="section-building">
    <div class="wrapper">
      <PrismicText :field="slice.primary.title" wrapper="h3" />
        <PrismicImage :field="slice.primary.img" />
          <div class="container-all">
            <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="container-building">   
              <div class="container-svg"><PrismicImage :field="item.img" /></div>
                <PrismicText :field="item.title" wrapper="h5" />
                  <PrismicText :field="item.para" wrapper="p" />
                    <PrismicLink :field="item.link">
                      <PrismicText :field="item.label_link" wrapper="span" />
                    </PrismicLink>
                    <img src="~assets/svg/arrow-right.svg" alt="fleche droite">
          </div>
        </div> 
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionBuilding",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

