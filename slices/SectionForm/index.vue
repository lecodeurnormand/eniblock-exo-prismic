<template>
<section class="section-form">
    <div class="wrapper">
        <div class="container-form">
            <div class="container-svg">
              <PrismicImage :field="slice.primary.img" />
            </div>
            <div class="container-touch">
                <h2>
                  <PrismicRichText :field="slice.primary.title" />
                        <div class="separate-bar"></div>
                </h2>
                <form action="" method="">
                    <input type="text" placeholder="Your name" name="name" id="name">
                    <input type="email" placeholder="Your work email" name="email" id="email">
                    <textarea placeholder="Your message" name="message" id="message"></textarea>
                    <button type="submit" name="submit" id="submit"><PrismicText :field="slice.primary.button" wrapper="span" /></button>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionForm",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.section-form{
    margin: 100px 0 px 0;
    .wrapper{
        width: 100vw;
        margin: auto;
    }
    .container-form{
        display: flex;
        justify-content: center;
        gap:150px;
        height: 558px;
        background-color: $greyscale_black;
    }
    .container-svg{
        display: flex;
        align-items: center;
    }
    .container-touch{
        align-self: center;
        h2{
            @include styleH('h2',$font:$font_1_light);
            margin-bottom: 40px;
            color:$main_white;
        }
    }
    .separate-bar{
        position: absolute;
        right: 285px;
        height: 8px;
        width: 40px;
        background: $primary_color_purple;
    }
    .font-thin{
        font-family: $font_1_light;
    }
    strong{
        font-family: $font_1_bold;
    }
    form{
        display: flex;
        flex-direction: column;
        font-family: $font_2_regular;
        margin-top: 40px;
        input, textarea{
            background: #1C1C1C;
            border: none;
            width: 376px;
            height: 40px;
            padding:11px 11px 11px 16px;
            margin-bottom: 8px;
            border-radius: 4px;
            color: $greyscale_grey;
            outline: none;
            &:focus{
                border: 0.5px solid $main_white;
            }
        }

    #message{
        font-family: $font_2_regular;
        height: 100px;
        resize: none;
    }
    button{
        font-family: $font_1_bold;
        align-self: flex-end;
        background-color: $primary_color_green;
        border: none;
        border-radius: 4px;
        width: 82px;
        height: 40px;
        margin-top: 8px;
        padding: 11px 16px;
        font-size: 14px;
        color: $greyscale_black;
        &:hover{
            @include hover($bg:transparent,$border:1px $greyscale_light solid);
            color: $main_white;
        }
        }
    }
}
</style>