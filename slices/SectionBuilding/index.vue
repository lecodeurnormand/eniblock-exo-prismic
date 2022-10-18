<template>
  <section class="section-building">
    <div class="wrapper">
      <PrismicText :field="slice.primary.title" wrapper="h3" />
        <PrismicImage :field="slice.primary.img" />
          <div class="container-all">
            <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="container-building">   
              <div class="container-svg"><PrismicImage :field="item.img" /></div>
                <PrismicText :field="item.title" wrapper="h5" />
                  <PrismicText :field="item.para" wrapper="p" />
                    <PrismicLink :field="item.link">
                      <PrismicText :field="item.label_link" wrapper="span" />
                    </PrismicLink>
                    <img src="~assets/svg/arrow-right.svg" alt="fleche droite">
          </div>
        </div> 
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionBuilding",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" unscoped>
.section-building{
    .wrapper{
        width: 1208px;
        margin: auto;
    }
        img:nth-child(2){
            width: 100%;
            display: block;
            margin: auto;
        }
    background-color: $greyscale_black;
    display: flex;
    flex-direction: column;
    color: $main_white;
    font-family: $font_2_regular;
    text-align: center;
    padding-bottom: 100px;
    h3{
        @include styleH('h3',$main_white);
    }
    h5,a{
        font-family: $font_1_regular;
    }
    p{
        display: block;
        height: 96px;
        color:$greyscale_grey;
    }
    .container-all{
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 72px;
    }
    .container-building{
        height: 336px;
        width: 282px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        .container-svg{
            margin: auto;
            width: 64px;
            height: 64px;
        }
        h5{
            margin-top: 24px;
            font-weight: 400;
            @include styleH('h4',$main_white);
            margin-bottom: 12px ;
        }
        p{
            margin-bottom: 16px ;
        }
        a{
            position: relative;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: $main_white;
            &::after{
                content: '';
                position: absolute;
                bottom: -5px;
                left: 89px;
                width: 8px;
                height: 2px;
                transform: scaleX(0);
                transition: transform 0.3s ease;
                background: $main_white;
            }
            &:hover::after{
                width: 8px;
                transform: scaleX(1);
                transition: transform 0.3s ease;
               }
        }
    }
}
</style>