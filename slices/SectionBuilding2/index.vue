<template>
  <section class="section-building-two">
    <div class="wrapper">
    <div class="container-text">
      <PrismicText :field="slice.primary.title2" wrapper="h6" />
            </div>
            <div class="container-icons">
                <div class="blockchains">
                    <div class="content-white">
                      <PrismicText :field="slice.primary.title_small" wrapper="h6" />
                    </div>
                </div>

                <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    

            <div class="container-status">
                <div class="container-img">
                  <PrismicImage :field="item.img" />
                </div>
                <div v-if="item.select === 'Green'" class="container-live">
                  <PrismicText :field="item.status" wrapper="p" />
                </div>
                <div v-else class="container-soon">
                  <PrismicText :field="item.status" wrapper="p" />
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
  name: "SectionBuilding2",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" unscoped>
.section-building-two{
    background-color: $greyscale_black;
    display: flex;
    flex-direction: column;
    color: $main_white;
    font-family: $font_2_regular;
    text-align: center;
    padding-bottom: 100px;
    .wrapper{
        width: 1208px;
        margin: auto;
    }
    .container-text{
        margin: auto;
        margin-top: 72px;
        margin-bottom:85px ;
        width: 664px;
        h6{
            font-weight: 400;
            @include styleH('h6',$main_white,$font:$font_1_regular);
        }
    }
    .container-icons{
        display: flex;
        justify-content: space-evenly;
        align-items:center;
        margin-bottom: 100px;
    }
    .blockchains h6{
        position: absolute;
        @include styleH('h6');
    }
    .content-white{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: $main_white;
        width: 101px;
        height: 23px;
        margin-bottom: 30px;
        box-shadow: 10.4494px 10.4494px 0px rgba(255, 255, 255, 0.1);
        h6{
            @include styleH('h6');
        }
    }
    .container-status {
        .container-live {
        margin: auto;
        background-color: $primary_color_green;
        border-radius:4px;
        width: 50px;
        height: 14px;
        box-shadow: 4.38558px 4.38558px 0px rgba(255, 255, 255, 0.1);
        p{
            @include parag($size:11px);
            color: $greyscale_black;
        }
        }
        .container-soon {
            margin: auto;
            background-color: $primary_color_purple;
            border-radius:4px;
            width: 70px;
            height: 14px;
            box-shadow: 4.38558px 4.38558px 0px rgba(255, 255, 255, 0.1);
            p{
                @include parag($size:11px);
                color: $main_white;
            }
        }
        .container-img{
            width: 120px;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 120px;
            }
        }
    }
}
</style>