<template>
    <section class="section-solutions">
        <div class="wrapper">
            <div class="container-discover">
              <PrismicRichText :field="slice.primary.title" class="font-thin" />
                <!-- <h2>
                    <span class="font-thin">Discover our stand-alone </span>
                    <span class="font-bold">Solutions</span>
                </h2> -->
                <div class="separate-bar"></div>
            </div>
            <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">  
            <div class="container-solutions">  
        <div class="container-articles">
            <div class="container-title">
              <PrismicText :field="item.title" wrapper="h3" />
              <PrismicText :field="item.para" wrapper="p" />
            </div>
            
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img1" />
                      </div>
                    <div class="text txt1">
                        <p>
                            <span class="font-bold">Easily create, mint & drop an unlimited amount of NFTs & FTs</span> with custom metadata
                        </p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img2" />
                    </div>
                    <div class="text txt2">
                        <p>
                            <span class="font-bold">Have full control over your marketplaces:</span> define your fees and royalties, configure your preferred auction and payment methods (crypto & fiat), sell your assets individually or in bundles, allow your users to resell on a secondary marketplace
                        </p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="icn">
                      <PrismicImage :field="item.img3" />
                        <!-- <img src="~assets/svg/nfts-lazy.svg" alt="lazy nfts"> -->
                      </div>
                    <div class="text">
                        <p>
                            <span class="font-bold">Lazy mintining:</span> say goodbye to upfront gas fees
                        </p>
                    </div>
                </li>
            </ul>
            <a href="#">Learn more <img src="~assets/svg/arrow-right-black.svg" alt=""></a>
        </div>
            <div class="container-img">
                <PrismicImage :field="item.img_big" />
            </div>   
    </div>
  </div>



<!-- <div class="container-solutions">
    <div class="container-img">
        <img src="~assets/svg/nfts-image2.svg" alt="ntfs image">
    </div>
    <div class="container-articles">
        <div class="container-title">
            <h3>Eniblock Launchpad</h3>
                <p>Launch your fundraising campaign (STOs, ICOs) in just a few clicks and achieve a smooth digital investor experience with our all-inclusive digital suite of services.
                </p>
        </div>

        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-cursor-launchpad.svg" alt="cursor launchpad">
                </div>
                <div class="text txt1">
                    <p>
                        <span class="font-bold">Provide your investors with enhanced liquidity</span> with transfer rules embedded in the token design, and effortlessly manage all your compliance processes in one single place (KYC, e-signature…)
                    </p>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-provide-launch.svg" alt="provide liquidity"></div>
                <div class="text txt2">
                    <p>
                        <span class="font-bold">Benefit from inbuilt compliance</span> options thanks to a P2P marketplace
                    </p>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-tool-launchpad.svg" alt="tool launchpad"></div>
                <div class="text">
                    <p>
                        <span class="font-bold">Integrate our full digital suite of services,</span> such as real time cap table management and automated reporting
                    </p>
                </div>
            </li>
        </ul>
        <a href="#">Learn more <img src="~assets/svg/arrow-right-black.svg" alt=""></a>
    </div>  
</div>

<div class="container-solutions">
    <div class="container-articles">
        <div class="container-title">
            <h3>Eniblock Wallet</h3>
                <p>Integrate our non-custodial and multi-chain wallet into your own applications for a seamless Web3 onboarding experience.</p>
        </div>
        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-wallet.svg" alt="cursor wallet"></div>
                <div class="text txt1">
                    <p>
                        <span class="font-bold">Say goodbye to cumbersome regulatory requirements</span> associated with custodial wallets
                    </p>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-wallet2.svg" alt="sign-up wallet"></div>
                <div class="text txt2">
                    <p>
                        <span class="font-bold">Simple sign-ups</span> using Google, Twitter & Facebook
                    </p>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="icn">
                    <img src="~assets/svg/nfts-wallet3.svg" alt="no more private key wallet"></div>
                <div class="text">
                    <p>
                        <span class="font-bold">No more private keys</span> to remember or steal
                    </p>
                </div>
            </li>
        </ul>
        <a href="#">Learn more <img src="~assets/svg/arrow-right-black.svg" alt=""></a>
    </div>
        <div class="container-img">
            <img src="~assets/svg/nfts-image3.svg" alt="ntfs image">
        </div>   
</div> -->

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

