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

<style lang="scss" scoped>
.section-touch{
    margin-top: -120px;
    .wrapper{
        margin: auto;
        width: 1208px;
    }
    .container-touch{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1000px;
        height: 240px;
        background-color: $primary_color_green;
        margin: auto;
        border-radius: 4px;
        .container-text{
            margin-top: 20px;
            margin-bottom: 20px;
            h5{
                font-family: $font_1_regular;
                line-height: 180%;
                text-align: center;
                color: $greyscale_black;
                font-size: 20px;
                strong{
                    font-family: $font_1_bold;
                    font-size: 43px;
                }
            }
        }
    }
    .btn {
        display: inline-flex;
        height: 50px;
        padding: 0px 24px 0px 24px;
        background: $greyscale_black;
        border-radius: 4px;
        align-items: center;
        margin: 0 auto 49px auto;
        &:hover{
            @include hover($border:$greyscale_black 1px solid);
            color:$greyscale_black;
        }
        .btn-text{
            @include button;
        }
    }
    .container-slice-left{
        position: absolute;
        left:0;
    }
    .container-slice-right{
        position: absolute;
        right: 0;
    }
}
</style>