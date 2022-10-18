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

<style lang="scss" scoped>
.section-join{
    .container-partners{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        border-bottom: 1px solid $greyscale_light;
        padding: 54px 0;
    }
    .partners{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .partners h5{
        @include styleH('h5');
    }
    .logos-footer{
        display: flex;
        width: 960px;
        align-items: center;
        justify-content: space-around;
        img{
            width: 110px;
            height: 110px;
            padding: 27px;
        }
    }
}
</style>