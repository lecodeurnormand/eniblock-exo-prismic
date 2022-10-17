<template>
  <div>
    <section class="section-newsroom">
        <div class="wrapper">
        <div class="container-newsroom">
            <div class="container-right">
                <img src="~assets/svg/newsroom-right.svg" alt="" class="svg-right">
            </div>
            <div class="container-left">
                <img src="~assets/svg/newsroom-left.svg" alt="" class="svg-left">
            </div>
            <div class="container-text">
              <PrismicText :field="slice.primary.title" wrapper="h1" />
                <PrismicText :field="slice.primary.para" wrapper="p" />
                <div class="container-btn">
                      <PrismicLink :field="slice.primary.green_button_link" class="btn">
                        <PrismicText :field="slice.primary.green_button_label" wrapper="span" class="btn-text" />
                      </PrismicLink>
                      <PrismicLink :field="slice.primary.black_button_link" class="btn">
                        <PrismicText :field="slice.primary.black_button_label" wrapper="span" class="btn-text" />
                      </PrismicLink>
                </div>
            </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionNewsroom",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

