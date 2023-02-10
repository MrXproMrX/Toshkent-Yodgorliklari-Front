<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('foto') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- media start -->

      <div class="media">
         <section class="container">
            <div class="media__cart">

               <ul class="media__menu">
                  <li class="active">
                     <nuxt-link :to="localePath('/media/photo')" class="media__menu__link">{{ $t('foto') }}</nuxt-link>
                  </li>

                  <li>
                     <nuxt-link :to="localePath('/media/video')" class="media__menu__link">{{ $t('video') }}</nuxt-link>
                  </li>
               </ul>

               <div class="fotogalereya_in" v-if="fotoGallerBlog.photoGallery">
                  <section class="container">
                     <div class="fotogalereya_in__cart">
                        <VueSlickCarousel class="fotogalereya_in__list1" :arrows="true" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">

                           <div class="fotogalereya_in__item1" v-for="(item,i) in fotoGallerBlog.photoGallery" :key="i">
                              <img :src="item.imgs" :alt="fotoGallerBlog.title">
                              <h3 class="fotogalereya_in__title__h3">{{ fotoGallerBlog.title }}</h3>
                           </div>

                        </VueSlickCarousel>

                        <VueSlickCarousel class="fotogalereya_in__list2" ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="slikMemoriy">

                           <section v-for="(item,i) in fotoGallerBlog.photoGallery" :key="i">
                              <div class="fotogalereya_in__item2">
                                 <img :src="item.imgs" :alt="fotoGallerBlog.title">
                              </div>
                           </section>

                        </VueSlickCarousel>
                     </div>
                  </section>
               </div>

            </div>
         </section>
      </div>

      <!-- media end -->
   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import fotoGalleryApi from '~/data/fotoGalleryApi'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
   data(){
      return{
         fotoGalleryApi,
         c1: undefined,
         c2: undefined,
         slikMemoriy: {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                  {
                  breakpoint: 1200,
                  settings: {
                     slidesToShow: 5,
                     slidesToScroll: 1,
                  }
                },
                 {
                  breakpoint: 1100,
                  settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                  }
                 },
                 {
                  breakpoint: 900,
                  settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                  }
                 },
                 {
                  breakpoint: 550,
                  settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                  }
                 },
               ]
         },
      }
   },

   mounted() {
      this.c1 = this.$refs.c1;
      this.c2 = this.$refs.c2;
   },

   components:{
      VueSlickCarousel
   },

   computed:{
      fotoGallerBlog(){
         return fotoGalleryApi.find(fotoGallerBlog => fotoGallerBlog.id === + this.$route.params.id);
      },
   }
}
</script>
