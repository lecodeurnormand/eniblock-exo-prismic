<template>
<section class="section-happening">
    <div class="wrapper">
        <div class="container-happening">
            <div class="container-title">
                  <PrismicRichText :field="slice.primary.title" />
                    <div class="separate-bar"></div>
            </div>
            <div class="container-cards">
                
            <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
                <div class="container-card">
                    <div class="container-first-svg">
                      <PrismicImage :field="item.img" />
                    </div>
                    <span class="button"><PrismicRichText :field="item.span_button" /></span>
                        <h5><PrismicRichText :field="item.title" /></h5>
                        <div class="container-text">
                          <PrismicRichText :field="item.para" />
                        </div>
                        <PrismicLink :field="item.link"><PrismicRichText :field="item.label" /><img src="~assets/svg/arrow-right-black.svg" alt="arrow black"></PrismicLink>
                </div>
              </div>

                 <!-- <div class="container-card">
                    <div class="container-first-svg">
                        <img src="~assets/svg/happening-img2.svg" alt="processor img">
                    </div>
                        <span>Press release</span>
                            <h5>Turpis amet eget nullam maecenas leo, consequat.</h5>
                                <div class="container-text">
                                    <p>Quis turpis feugiat eu nibh duis quis viverra. Gravida blandit mi proin sit egestas rhoncus</p>
                            </div>
                                    <a href="#">Read more <img src="~assets/svg/arrow-right-black.svg" alt="arrow black"></a>
                </div>
             
                 <div class="container-card">
                    <div class="container-first-svg">
                        <img src="~assets/svg/happening-img3.svg" alt="processor img">
                    </div>
                    <span>Press release</span>
                        <h5>Nunc, interdum nulla non urna, odio mauris id. Id pellentesque ut nam.</h5>
                            <div class="container-text">
                                 <p>Quis turpis feugiat eu nibh duis quis viverra. Gravida blandit mi proin sit egestas rhoncus</p>
                            </div>
                                <a href="#">Read more <img src="~assets/svg/arrow-right-black.svg" alt="arrow black"></a>
                </div> -->
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionHappening",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
