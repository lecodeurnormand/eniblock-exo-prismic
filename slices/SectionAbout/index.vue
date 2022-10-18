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

<style lang="scss" scoped>
.section-about{
    border-bottom: 1px solid $greyscale_light;
    .wrapper{
        width: 1208px;
        margin: auto;
    }
    .container-about{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:70px;
        font-family: $font_2_regular;
        margin:100px 0 100px 0;
    }
    h2{
        @include styleH('h2');
        margin-bottom: 55px;
        strong{
            font-family: $font_1_bold;
        }
    }
    .separate-bar{
        margin-bottom: 40px;
        margin-top: 40px;
        height: 8px;
        width: 40px;
        border: none;
        background-color:  $primary_color_purple;
    }
    p{
        @include parag;
        width:230px ;
        color: $greyscale_grey;
    }
    .container-left{
        justify-content: left;
        align-self: flex-end;
    }
    .container-right {
        align-self: flex-end;
        a{
        display: flex;
        color: $greyscale_black;
        font-family: $font_2_bold;
        }
    }
}
</style>