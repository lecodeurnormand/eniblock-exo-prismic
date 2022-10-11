<template>
    <section class="section-solutions">
        <div class="wrapper">
            <div class="container-discover">
              <PrismicRichText :field="slice.primary.title"/>
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

