<template>
  <div>
    <!-- SLICE ZONE -->
    <slice-zone :components="components" :slices="document.data.slices" />
    <!-- END OF SLICE ZONE -->

<!-- <?php include('common-devtools.php') ?> -->
<!--


<section class="section-who">
    <div class="wrapper">
        <div class="container-who">
            <div class="container-who-left">
                <h2>
                    <span class="font-thin">Who's Building<br/></span>
                    <span class="font-bold">on Eniblock?</span>
                </h2>
                    <div class="container-text">
                        <p>We aim to provide the platform and the tools needed to empower entrepreneurs and innovative businesses to build great applications that tap into the blockchain revolution.</p>
                        <a href="#" class="btn">
                            <span class="btn-text">View more</span>
                        </a>
                </div>
            </div>
            <div class="container-who-right">
                 
                <div class="container-card">
                    <div class="bg-color1">
                        <div class="container-img">
                            <img src="~assets/svg/cards-building.svg" alt="">
                    </div>
                    <div class="container-tag">
                        <a href="#" class="btn">
                            <span class="btn-text">#nfts</span>
                        </a>
                    </div>
                </div>
                    <h4>Fanlive Cards</h4>
                    <p>Quis turpis feugiat eu nibh duis quis viverra. Gravida blandit mi proin sit egestas rhoncus</p>
                    <a href="#" class="btn">
                        <span class="btn-text">
                            Discover <img src="~assets/svg/arrow-right.svg" alt="">
                        </span>
                    </a>
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
<section class="section-about">
    <div class="wrapper">
        <div class="container-about">
            <div class="container-left">
                <h2>
                    <span class="font-thin">About</span>
                    <span class="font-bold">Us</span>
                </h2>
                    <div class="separate-bar"></div>
                        <p>Eniblock is a blockchain technology provider on a mission to democratize Web3, making it as simple and fast as possible for any entrepreneurs and innovative businesses to kick-start their Web3 journey and make real-world impact.</p>
            </div>
            <div class="container-center">
                <img src="~assets/svg/about-img.svg" alt="center image">
            </div>
            <div class="container-right">
                <p>We are a subsidiary of The Blockchain Group, who joined forces with a French Institute for Technological Research, IRT System X, back in 2018 with the ambition to create a leading european blockchain technology company.<a href="#"> More <img src="~assets/svg/arrow-right-black.svg" alt="arrow right"></a></p>
            </div>
        </div>
    </div>
</section>

<section class="section-happening">
    <div class="wrapper">
        <div class="container-happening">
            <div class="container-title">
                <h2>
                    <span class="font-bold">What's happening</span>
                    <span class="font-thin">at Eniblock?</span>
                    <div class="separate-bar"></div>
                </h2>
            </div>
            <div class="container-cards">
                
                <div class="container-card">
                    <div class="container-first-svg">
                        <img src="~assets/svg/happening-img1.svg" alt="processor img">
                    </div>
                    <span class="button">Blogpost</span>
                        <h5>Mattis nam leo nunc nunc tempor mauris sed accumsan, lectus.</h5>
                        <div class="container-text">
                            <p>Quis turpis feugiat eu nibh duis quis viverra. Gravida blandit mi proin sit egestas rhoncus</p>
                        </div>
                                <a href="#">Read more <img src="~assets/svg/arrow-right-black.svg" alt="arrow black"></a>
                </div>
               
                 <div class="container-card">
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
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-form">
    <div class="wrapper">
        <div class="container-form">
            <div class="container-svg">
                <img src="~assets/svg/form-img.svg" alt="form image">
            </div>
            <div class="container-touch">
                <h2>
                    <span class="font-bold">Get in</span>
                    <span class="font-thin">touch</span>
                        <div class="separate-bar"></div>
                </h2>
                <form action="" method="">
                    <input type="text" placeholder="Your name" name="name" id="name">
                    <input type="email" placeholder="Your work email" name="email" id="email">
                    <textarea placeholder="Your message" name="message" id="message"></textarea>
                    <button type="submit" name="submit" id="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="section-join">
    <div class="wrapper">
        <div class="container-partners">
            <div class="partners">
                <h5>Join our partners</h5>
            </div>
            <div class="logos-footer">
                <img src="~assets/svg/edf.svg" alt="logo edf">
                <img src="~assets/svg/matmut.svg" alt="logo matmut">
                <img src="~assets/svg/cdd-black.svg" alt="logo caisse des dépots">
                <img src="~assets/svg/wakam-black.svg" alt="loog wakam">
                <img src="~assets/svg/snipfeed.svg" alt="logo snipfeed">    
        </div>
</div>
    </div>
</section>
</main> -->
</div>
</template>

<script>

import { components } from '~/slices' 
export default {
    data: function(){
        return {components}
    },
    name: "IndexPage",

    // ALL 
    async asyncData({ $prismic, error }) {
    const document = await $prismic.api.getSingle('page')
    console.log(document)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>