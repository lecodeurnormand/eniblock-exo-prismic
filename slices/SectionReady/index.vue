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
              <PrismicRichText :field="slice.primary.para"/>
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

<style lang="scss" scoped>
.section-ready{
    background-color: $primary_color_green;
    .wrapper{
        width: 100vw ;
        margin: auto;
    }
    .container-ready{
        position: relative;
        height: 350px;
        margin: auto;
        text-align: center;
    }
    .container-svg-left, .container-svg-right {
        img{
            position: absolute;
            height: 250px;
            height: max-content;
        }
    }
    .container-svg-left img{
        left:0;
    }
    .container-svg-right img{
        right:0;
    }
    .container-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 446px;
        margin: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        color: $greyscale_black;
        h2{
            @include styleH('h2',$font:$font_1_light);
            margin-top:76px;
        }
        strong{
            font-family: $font_1_bold;
        }
        p{
            @include parag($size:18px);
            margin:16px auto 16px auto;
        }
    }
    a.btn{
        display: block;
        background-color: $greyscale_black;
        border: none;
        border-radius: 4px;
        padding: 0px 24px 0px 24px;
        &:hover{
            @include hover($border:$greyscale_black 1px solid);
            color:$greyscale_black;
        }
        .btn-text {
            @include button;
            
        }
    }
}
</style>