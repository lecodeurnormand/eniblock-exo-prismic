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
<style lang="scss" scoped>
.section-platform{
    background-color: $greyscale_black;
    .wrapper{
        width: 1208px;
        margin: auto;
    }
    .container-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: auto;
        font-family: $font_1_light;
        color: $main_white;
        h2{
            @include styleH('h2',$main_white);
            font-family: $font_1_light;
            margin-top: 72px;
        }
        strong{
            font-family: $font_1_bold;
            font-weight: 100;
        }
        p{
            @include parag($size:18px);
            margin: auto;
            color: $greyscale_medium;
            width: 790px;
        }
    }
    .separate-bar{
        margin: auto;
        margin-bottom: 40px;
        margin-top: 40px;
        height: 8px;
        width: 40px;
        border: none;
        background-color: $primary_color_purple;
    }
    .container-cards{
        display:flex;
        justify-content: center;
        width: 100%;
        margin-top: 80px;
    }
    .container-card{
        margin: auto 8px 72px 8px;
        text-align: center;
        padding: 37px 24px 0 24px;
        width: 272px;
        height: 360px;
        background-color: $primary_color_purple;
        border-radius: 8px;
        font-family: $font_2_regular;
        color:$main_white;
        .circle{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
        }
        h5,h6{
            font-family: $font_2_regular;
        }
        h5{
            @include styleH('h5',$main_white);
            padding-top: 24px;
        }
        h6{
            font-weight: 400;
            @include styleH('h6',$main_white);
            opacity: 0.7;
            padding-bottom: 28px;
        }
        p{
            opacity: 0.7;
            padding-top: 22px;
            @include parag($size:16px);
        }
    }
    .container-tool{
        position: absolute;
    }
}
</style>
