<template>
<section class="section-ready">
    <div class="wrapper">
        <div class="container-ready">
            <div class="container-svg-left">
                <img src="~assets/svg/ready-left.svg" alt="picture on the left">
            </div>
            <div class="container-svg-right">
                <img src="~assets/svg/ready-right.svg" alt="picture on the right">
            </div>
            <div class="container-text">
              <PrismicRichText :field="slice.primary.title" />
              <PrismicRichText :field="slice.primary.para" />
              <PrismicLink :field="slice.primary.link" class="btn">
                        <PrismicRichText :field="slice.primary.label" class="btn-text" />
              </PrismicLink>
        </div>   
    </div>
</div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionReady",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
