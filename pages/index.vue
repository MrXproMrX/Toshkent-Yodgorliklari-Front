<template>
   <section>
      <!-- slider start -->

      <div class="slider">

         <VueSlickCarousel v-bind="slic" class="slider__list">

            <div class="slider__item">
               <div class="slider__item__img">
                  <img src="../assets/foto/slick_1.png" alt="slider">
               </div>
               <section class="container">
                  <div class="slider__cart">
                     <h1 class="slider__title__h1">Kukaldosh madrasasi</h1>
                     <div class="slider__text">Lorem ipsum dolor sit amet</div>
                     <a href="#!" class="slider__link">
                        Подробнее
                        <span><i class="fas fa-chevron-right"></i></span>
                     </a>
                  </div>
               </section>
            </div>

            <div class="slider__item">
               <div class="slider__item__img">
                  <img src="../assets/foto/slick_1.png" alt="slider">
               </div>
               <section class="container">
                  <div class="slider__cart">
                     <h1 class="slider__title__h1">Lorem ipsum dolor</h1>
                     <div class="slider__text">Lorem ipsum dolor sit amet sit amet</div>
                     <a href="#!" class="slider__link">
                        Подробнее
                        <span><i class="fas fa-chevron-right"></i></span>
                     </a>
                  </div>
               </section>
            </div>

         </VueSlickCarousel>

      </div>

      <!-- slider end -->


      <!-- Toshkent xaritasi start -->

      <div class="toshkent_maps">
         <section class="container">
            <div class="toshkent_maps__cart">
               <h2 class="toshkent_maps__title__h2">{{ $t('mapTashkent') }}</h2>

               <mapsVue :listMaps="listMaps"></mapsVue>

            </div>
         </section>
      </div>

      <!-- Toshkent xaritasi end -->


      <!-- Arxiologik start -->

      <div class="arxiologik">
         <section class="container">
            <div class="arxiologik__cart">
               <div class="arxiologik__all">
                  <h2 class="toshkent_maps__title__h2">{{ $t('archeological') }}</h2>
                  <nuxt-link :to="localePath('/archeological')" class="arxiologik__all__link">
                     {{ $t('everything') }}
                     <span><i class="fas fa-chevron-right"></i></span>
                  </nuxt-link>
               </div>

               <arxiologikSlicListVue :arxiologikList="arxiologikList"></arxiologikSlicListVue>

            </div>
         </section>
      </div>

      <!-- Arxiologik end -->


      <!-- Ashyolar start -->

      <div class="ashyolar">
         <section class="container">
            <div class="arxiologik__cart">
               <div class="arxiologik__all">
                  <h2 class="toshkent_maps__title__h2">{{ $t('items') }}</h2>
                  <nuxt-link :to="localePath('/ashyolar')" class="arxiologik__all__link">
                     {{ $t('ashyolar') }}
                     <span><i class="fas fa-chevron-right"></i></span>
                  </nuxt-link>
               </div>

               <ashyolarSlicListVue :ashyolarList="ashyolarList"></ashyolarSlicListVue>

            </div>
         </section>
      </div>

      <!-- Ashyolar end -->


      <!-- videoGallery start -->

      <div class="videoGallery">
         <section class="container">
            <div class="videoGallery__cart">

               <h2 class="toshkent_maps__title__h2">{{ $t('video') }}</h2>

               <videoGallery :viteoList="viteoList"></videoGallery>

            </div>
         </section>
      </div>

      <!-- videoGallery end -->


      <!-- fotoGallery start -->

      <div class="fotoGallery">
         <section class="container">
            <div class="fotoGallery__cart">
               <h2 class="toshkent_maps__title__h2">{{ $t('foto') }}</h2>

               <fotoGalleryVue :fotoList="fotoList"></fotoGalleryVue>
            </div>
         </section>
      </div>

      <!-- fotoGallery end -->


      <!-- Olimlar start -->

      <div class="olimlar">
         <section class="container">
            <div class="olimlar__cart">

               <div class="arxiologik__all">
                  <h2 class="toshkent_maps__title__h2">{{ $t('scientists') }}</h2>
                  <nuxt-link :to="localePath('/scientists')" class="arxiologik__all__link">
                     {{ $t('ashyolar') }}
                     <span><i class="fas fa-chevron-right"></i></span>
                  </nuxt-link>
               </div>

               <olimlarSlicListVue :olimlarList="olimlarList"></olimlarSlicListVue>

            </div>
         </section>
      </div>

      <!-- Olimlar end -->


      <!-- Yangiliklar start -->

      <div class="yangiliklar">
         <section class="container">
            <div class="yangiliklar__cart">

               <div class="arxiologik__all">
                  <h2 class="toshkent_maps__title__h2">{{ $t('news') }}</h2>
                  <nuxt-link :to="localePath('/news')" class="arxiologik__all__link">
                     {{ $t('ashyolar') }}
                     <span><i class="fas fa-chevron-right"></i></span>
                  </nuxt-link>
               </div>

               <yangiliklarVue :newsList="newsList"></yangiliklarVue>

            </div>
         </section>
      </div>

      <!-- Yangiliklar end -->

   </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import mapsVue from '@/components/index/maps.vue';
import mapsApi from '@/data/mapsApi'

import arxiologikSlicListVue from '@/components/index/arxiologikSlicList.vue';
import arxiologikApi from '@/data/arxiologikApi';

import ashyolarSlicListVue from '@/components/index/ashyolarSlicList.vue';
import ashyolarApi from '@/data/ashyolarApi';

import videoGallery from '@/components/index/videoGallery.vue';
import videoGalleryApi from "@/data/videoGalleryApi";

import fotoGalleryVue from '@/components/index/fotoGallery.vue';
import fotoGalleryApi from "@/data/fotoGalleryApi";

import olimlarSlicListVue from '@/components/index/olimlarSlicList.vue';
import olimlarApi from "@/data/olimlarApi";

import yangiliklarVue from '@/components/index/yangiliklar.vue';
import yangiliklarApi from "@/data/yangiliklarApi";

export default {
  name: 'IndexPage',

   head(){
      return{
         title:'Toshkent Yodgorliklari',
         meta:[
            {
              hid: 'Toshkent Yodgorliklari',
              name:'Toshkent Yodgorliklari',
              content:'Toshkent Yodgorliklari'
            },
         ]
      }
   },

   data(){
      return{
         listMaps:mapsApi,
         arxiologikList:arxiologikApi,
         ashyolarList:ashyolarApi,
         viteoList:videoGalleryApi,
         fotoList:fotoGalleryApi,
         olimlarList:olimlarApi,
         newsList:yangiliklarApi,
         slic:{
            arrows:true,
            speed:1500,
            fade:true,
            dose:false,
            infinite:true,
            autoplay:true,
         }
      }
   },

   components:{
      VueSlickCarousel,
      mapsVue,
      arxiologikSlicListVue,
      ashyolarSlicListVue,
      videoGallery,
      fotoGalleryVue,
      olimlarSlicListVue,
      yangiliklarVue
   }
}
</script>
