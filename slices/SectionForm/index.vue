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
                    <button type="submit" name="submit" id="submit"><PrismicRichText :field="slice.primary.button" /></button>
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

