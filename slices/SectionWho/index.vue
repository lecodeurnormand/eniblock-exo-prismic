<template>
<section class="section-who">
    <div class="wrapper">
        <div class="container-who">
            <div class="container-who-left">
              <PrismicRichText :field="slice.primary.title" />
                    <div class="container-text">
                      <PrismicRichText :field="slice.primary.para" />
                          <PrismicLink :field="slice.primary.link" class="btn">
                          <PrismicRichText :field="slice.primary.label" class="btn-text" />
                        </PrismicLink>
                </div>
            </div>
            <div class="container-who-right">
              <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
                <div class="container-card">
                    <div class="bg-color1">
                        <div class="container-img">
                          <PrismicImage :field="item.img" />
                        </div>
                    <div class="container-tag">
                          <PrismicLink :field="item.link_tag" class="btn">
                            <PrismicText :field="item.label" class="btn-text" />
                          </PrismicLink>
                    </div>
                </div>
                <PrismicRichText :field="item.title" />
                <PrismicRichText :field="item.para" />
                      <PrismicLink :field="item.link" class="btn">
                        <PrismicText :field="item.label_link" class="btn-text" />
                        <img src="~assets/svg/arrow-right.svg" alt="">
                      </PrismicLink>
                </div>
              </div>                



                <div class="container-card">
                    <div class="bg-color2">
                        <div class="container-img2">
                            <img src="~assets/svg/game-building.svg" alt="">
                    </div>
                    <div class="container-tag2">
                        <a href="#" class="btn">
                            <span class="btn-text">#wallet</span>
                        </a>
                    </div>
                </div>
                    <h4>The Sandbox</h4>
                    <p>The Sandbox and Eniblock have joined forces to launch M3TASERVE, the first Web3 bootcamp in France</p>
                    <a href="#" class="btn btn2">
                        <span class="btn-text">
                            Discover <img src="~assets/svg/arrow-right.svg" alt="">
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionWho",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.section-who {
    .wrapper{
        width: 100vw;
        margin: auto;
    }
    .container-who{
        display: flex;
        height: 729px;
        background-color: $primary_color_purple;
        gap: 144px;
        color:$main_white;
    }
    .container-who-left{
        display: flex;
        flex-direction: column;
        margin-left: 200px;
        align-items: flex-start;
    }
    .container-who-right{
        display: flex;
        justify-content: space-around;
        align-items: center; 
    }
    h2{
        max-width: 350px;
        @include styleH('h2',$main_white,$font:$font_1_light);
        margin-top: 200px;
        strong{
            font-family: $font_1_bold;
        }
    }
    .container-text{
        display: block;
        .btn{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $main_white;
            border-radius: 4px;
            width: 131px;
            height: 50px;
            text-align: center;
        }
        .btn-text{
            p{
                font-family:  $font_1_bold;
                opacity: 1;
            }
        }
    }
    p{
        opacity: 0.7;
        @include parag($size:18px);
        padding-top: 20px;
        margin:24px auto 45px auto;
    }
    .container-card{
        display: flex;
        flex-direction: column;
        position:relative;
        width: 376px;
        height: 489px;
        background: $greyscale_black;
        box-shadow: 10.4494px 10.4494px 0px rgba(24, 24, 24, 0.1);
        border-radius: 4px;
        padding:30px 30px 30px 30px;
        &:nth-child(2){
            display: flex;
            margin-left: 24px;
            flex-direction: column;
            align-self: center;
            position:relative;
            width: 330px;
            height: 428px;
            background: $greyscale_black;
            box-shadow: 10.4494px 10.4494px 0px rgba(24, 24, 24, 0.1);
            border-radius: 4px;
            padding:25px 25px 25px 25px;
            opacity: 0.6;
            p{
                opacity: 0.7;
                @include parag($size:14px);
                margin:24px auto 12px auto;
            }
        }
        .btn-text{
            @include button($fw:900);
            color: $main_white;
        }
        .bg-color1{
            width: 316px;
            height: 240px;
            left: 30px;
            top: 30px;
            background: linear-gradient(113.26deg,  $primary_color_purple 19.6%, #FFB313 86.33%);
            border-radius: 4px;
        }
        .bg-color2{
            width: 277px;
            min-height: 210px;
            left: 30px;
            top: 30px;
            background: linear-gradient(113.26deg, #F957EF 13.78%, #EC3CDE 33.16%, #7E43E5 51.84%, #8057F3 80.53%,  $primary_color_purple 99.06%);
            border-radius: 3.5092px;
        }
        .container-img{
            display: flex;
            margin: auto;
            justify-content: center;
            align-content: center;
            padding:32px 0px 32px 0px ;
        }
        .container-img2{
            display: flex;
            margin: auto;
            justify-content: center;
            align-content: center;
            margin-top: 20px;
        }
        .container-tag{
            position: absolute;
            right: 44px;
            top:228px;
            background: $greyscale_black;
            border: 0.522471px solid $greyscale_black;
            box-shadow: 10.4494px 10.4494px 0px rgba(24, 24, 24, 0.1);
            border-radius: 4px;
            width: 48px;
            height: 27px;
            padding:3px 4px 3px 4px;
            .btn-text{
                @include button;
                text-align: center;
            }
        }
        .container-tag2{
            position: absolute;
            right: 43px;
            top:190px;
            background: $greyscale_black;
            border: 0.522471px solid $greyscale_black;
            box-shadow: 10.4494px 10.4494px 0px rgba(24, 24, 24, 0.1);
            border-radius: 4px;
            width: 70px;
            height: 27px;
            padding:3px 4px 3px 4px;
        }
        h4{
            font-weight: 400;
            @include styleH('h4');
            margin-top: 24px;
            color:$main_white;
        }
        p{
            @include parag($size:16px);
            color: $greyscale_medium;
        }
        a:nth-child(4){
            display: flex;
            img{
                padding-left: 5px;
            }
        }   
    }
}
</style>