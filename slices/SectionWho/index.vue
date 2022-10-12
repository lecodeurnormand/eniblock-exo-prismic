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
