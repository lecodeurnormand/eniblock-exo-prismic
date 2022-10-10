<template>
  <section class="section-building">
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
                <!-- <div class="container-status">
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
                </div> -->
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

