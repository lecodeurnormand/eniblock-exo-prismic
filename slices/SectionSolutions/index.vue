<template>
    <section class="section-solutions">
        <div class="wrapper">
            <div class="container-discover">
              <PrismicText :field="slice.primary.title" wrapper="h2"/>
                <div class="separate-bar"></div>
            </div>
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">  
            <div v-if="i%2 === 0 " class="container-solutions">  
                <div class="container-articles">
                    <div class="container-title">
                        <PrismicText :field="item.title" wrapper="h3" />
                        <PrismicRichText :field="item.para" />
                    </div>
                <ul>
                    <li>
                        <div class="icn">
                            <PrismicImage :field="item.img1" />
                        </div>
                        <div class="text txt1">
                            <PrismicRichText :field="item.para_1" />
                        </div>
                    </li>
                </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img2" />
                    </div>
                    <div class="text txt2">
                        <PrismicRichText :field="item.para_2" />
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img3" />
                    </div>
                    <div class="text">
                        <PrismicRichText :field="item.para_3" />
                    </div>
                </li>
            </ul>
            <PrismicLink :field="item.link">
                <PrismicRichText :field="item.label" />
                    <img src="~assets/svg/arrow-right-black.svg" alt="">
            </PrismicLink>
        </div>
            <div class="container-img">
                <PrismicImage :field="item.img_big" />
            </div>   
    </div>
    <div v-else class="container-solutions even">
        <div class="container-articles">
                    <div class="container-title">
                        <PrismicText :field="item.title" wrapper="h3" />
                        <PrismicRichText :field="item.para" />
                    </div>
                <ul>
                    <li>
                        <div class="icn">
                            <PrismicImage :field="item.img1" />
                        </div>
                        <div class="text txt1">
                            <PrismicRichText :field="item.para_1" />
                        </div>
                    </li>
                </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img2" />
                    </div>
                    <div class="text txt2">
                        <PrismicRichText :field="item.para_2" />
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img3" />
                    </div>
                    <div class="text">
                        <PrismicRichText :field="item.para_3" />
                    </div>
                </li>
            </ul>
            <PrismicLink :field="item.link">
                <PrismicRichText :field="item.label" />
                    <img src="~assets/svg/arrow-right-black.svg" alt="">
            </PrismicLink>
        </div>
            <div class="container-img">
                <PrismicImage :field="item.img_big" />
            </div>       </div>
  </div>
</div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionSolutions",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.section-solutions{
    margin-bottom: 150px;
    .wrapper{
        width: 1208px;
        margin: auto;
    }
    .container-discover{
        margin-top: 150px;
        text-align: center;
        h2{
            @include styleH('h2');
            font-family: $font_1_light;
        }
        strong{
            font-family: $font_1_bold;
        }
        .separate-bar{
            width: 40px;
            border: 4px solid $primary_color_purple;
            margin: 40px auto;
        }
    }
    .container-solutions{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 80px;
        &.even{
            flex-direction: row-reverse;
        }
        .text{
            @include parag($size:16px,$fw:0);
        }
        strong{
            font-family: $font_2_bold;
        }
        .container-articles{
            display: flex;
            flex-direction: column;
            width: 400px;
            ul{
                margin-top: 16px;
            }
            li{
                display: flex;
                margin-top: -10px;
                gap:16px;
            }
        }
        .container-title{
            font-family: $font_1_regular;
            color: $greyscale_black;
            h3{
                @include styleH('h3');
                margin-bottom: 16px;
            }
            p{
                @include parag;
                margin-bottom: 25px ;
            }
        }
        .txt1, .txt2{
            padding-bottom:21px;
            border-bottom: 0.5px solid $greyscale_light; 
        }
        a{
            position: relative;
            display:flex;
            font-family: $font_2_bold;
            margin-top: 16px;
            color: $greyscale_black;
            &::after{
                content: '';
                position: absolute;
                bottom: -1px;
                left: 87px;
                width: 8px;
                height: 2px;
                transform: scaleX(0);
                transition: transform 0.3s ease;
                background: $greyscale_black;
            }
            &:hover::after{
                width: 8px;
                transform: scaleX(1);
                transition: transform 0.3s ease;
               }
        }   img{
            padding-left: 5px;
        }
    }
}
</style>