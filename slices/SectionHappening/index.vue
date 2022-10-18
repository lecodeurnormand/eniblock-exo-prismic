<template>
<section class="section-happening">
    <div class="wrapper">
        <div class="container-happening">
            <div class="container-title">
                  <PrismicRichText :field="slice.primary.title" />
                    <div class="separate-bar"></div>
            </div>
            <div class="container-cards">
                
            <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
                <div class="container-card">
                    <div class="container-first-svg">
                      <PrismicImage :field="item.img" />
                    </div>
                    <span class="button"><PrismicRichText :field="item.span_button" /></span>
                        <h5><PrismicRichText :field="item.title" /></h5>
                        <div class="container-text">
                          <PrismicRichText :field="item.para" />
                        </div>
                        <PrismicLink :field="item.link"><PrismicRichText :field="item.label" /><img src="~assets/svg/arrow-right-black.svg" alt="arrow black"></PrismicLink>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionHappening",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.section-happening{
    margin: 100px 0 100px 0;
    .wrapper{
        width: 1208px;
        margin: auto;
    }
    .container-title{
        position: relative;
        display: block;
        margin: auto;
        text-align: center;
        margin-top: 152px;
        margin-bottom: 72px;
        h2{
        display: none;
        @include styleH('h2',$font:$font_1_light);
        strong{
            font-family: $font_1_bold;
        }
    }
    }
    .separate-bar{
        position: absolute;
        right: 255px;
        height: 8px;
        width: 40px;
        background: $primary_color_purple;
    }
    .container-cards{
        display: flex;
        justify-content: center;
        gap:40px;
        &:first-of-type{
            box-shadow: 21.5908px 21.5908px 0px rgba(24, 24, 24, 0.1);
        }
    }
    .container-card{
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 312px;
        height: 415px;
        padding: 32px;
        border: 0.5px solid $greyscale_black;
        border-radius: 4px;
        font-family: $font_2_regular;
        span{
            border: 1px solid $greyscale_black;
            border-radius: 4px;
            width: max-content;
            text-align: center;
            padding: 2px 4px 2px 4px;
            margin-bottom: 29px;
        }
        h5{
            font-weight: 400;
            @include styleH('h5');
            margin-bottom: 40px;
            height: 1px;
        }
        a{
            display: flex;
            font-family: $font_1_bold;
            color: $greyscale_black;
            img{
                padding-left: 5px;
            }
        }
    }
    .container-first-svg {
        width:80px;
        height: auto;
        margin-bottom: 21px;
    }
    .button{
        box-shadow: 10.4494px 10.4494px 0px rgba(24, 24, 24, 0.1);
    }
    .container-text{
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 45px;
        margin-bottom: 21.6px;
    }
}
</style>