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

<style lang="scss" scoped>
.section-newsroom{
    display: flex;
    // margin-top: 100px;
.wrapper{
    width: 1208px;
}
    .container-newsroom{
        display: flex;
        position: relative;
        justify-content: center;
        background-color: $greyscale_black;
        margin: auto;
        width: 100vw;
        padding-top: 120px;
        padding-bottom: 120px;
        .container-left{
            img{
                position: absolute;
                width: 390px;
                left:-50px;
                top:-200px;
            
            }
        }
        .container-right{
            img{
                position: absolute;
                width: 390px;
                right: -50px;
                top:-200px;
            }
        }
        .container-text{
            width: 1100px;
            h1{
                text-align: center;
                @include styleH('h1',$main_white,$font:$font_1_bold);
                margin-bottom: 16px;
            }
            p{
                text-align: center;
                margin: auto;
                @include parag;
                color: $greyscale_light;
                margin-bottom: 30.5px;
                width: 584px;
            }
            .container-btn{
                display: flex;
                justify-content: center;
                gap:16px;
                .btn{
                    width: auto;
                    height: max-content;
                    background: $primary_color_green;
                    border-radius: 4px;
                    padding: 14.5px 31.5px;
                }
                .btn-text{
                    font-family: $font_2_bold;
                    color: $greyscale_black;
                }
                .btn:nth-child(2){
                    width: auto;
                    height: max-content;
                    background: $greyscale_black;
                    border: 1px $main_white solid;
                    padding: 14.5px 31.5px;
                    color:$main_white;
                }
            }
        }
    }
}
</style>