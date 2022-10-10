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
                      <PrismicText :field="item.label_link" wrapper="a" />
                    </PrismicLink>
                    <img src="~assets/svg/arrow-right.svg" alt="fleche droite">
          </div>
        </div> 
    <!-- <div class="container-text">
      <PrismicRichText :field="slice.primary.title_2" />
            </div>
            <div class="container-icons">
                <div class="blockchains">
                    <div class="content-white">
                      <PrismicText :field="slice.primary.title_small" wrapper="h6" />
                    </div>
                </div>
            <div class="container-status">
                <div class="container-img">
                    <img src="~assets/svg/tezos.svg" alt="logo tezos">
                </div>
                <div class="container-live">
                    <p>live now</p>
                </div>
            </div>
                <div class="container-status">
                    <div class="container-img">
                        <img src="~assets/svg/ethereum.svg" alt="logo ethereum">
                    </div>
                    <div class="container-soon">
                        <p>coming soon</p>
                    </div>
                </div>
                <div class="container-status">
                    <div class="container-img">
                    <img src="~assets/svg/solana.svg" alt="logo solana">
                </div>
                        <div class="container-soon">
                            <p>coming soon</p>
                        </div>
                </div>
                <div class="container-status">
                    <div class="container-img">
                    <img src="~assets/svg/polygon.svg" alt="logo polygon">
                </div>
                        <div class="container-soon">
                            <p>coming soon</p>
                        </div>
                </div>
        </div> -->
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

