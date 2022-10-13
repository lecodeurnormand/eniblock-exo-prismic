<template>
<section class="section-about">
    <div class="wrapper">
        <div class="container-about">
            <div class="container-left">
              <PrismicText :field="slice.primary.title" wrapper="h2"/>
                    <div class="separate-bar"></div>
                    <PrismicRichText :field="slice.primary.para" />
            </div>
            <div class="container-center">
              <PrismicImage :field="slice.primary.image" />
            </div>
            <div class="container-right">
              <PrismicRichText :field="slice.primary.para2" />
                <PrismicLink :field="slice.primary.link">
                  <PrismicText :field="slice.primary.label" wrapper="span" />
                  <img src="~assets/svg/arrow-right-black.svg" alt="arrow right">
                    </PrismicLink>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionAbout",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

