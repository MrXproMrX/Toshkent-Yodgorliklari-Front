<template>
   <section>
   <!-- Memoriy start -->

   <div class="memoriy">
      <section class="container">
         <div class="memoriy__cart">
            <h2 class="memoriy__title__h2">{{ arxiologBlog.title }}</h2>
         </div>
      </section>
   </div>

   <!-- Memoriy end -->


   <!-- memoriy_content start -->

   <div class="memoriy_content">
        <section class="container">
            <div class="memoriy_content__cart">
               <div class="memoriy_content__list clearfix">

                  <div class="memoriy_content__slider" v-if="arxiologBlog.galleryFoto">
                     <VueSlickCarousel class="memoriy_content__slider__list" :arrows="false" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                        <div class="memoriy_content__slider__img" v-for="(items,i) in arxiologBlog.galleryFoto" :key="i">
                           <img :src="items.imgs" :alt="arxiologBlog.title">
                        </div>
                     </VueSlickCarousel>
                     <VueSlickCarousel class="memoriy_content__slider__item" ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="slikMemoriy">
                           <section v-for="(items,i) in arxiologBlog.galleryFoto" :key="i">
                              <div class="memoriy_content__item__img">
                                 <img :src="items.imgs" :alt="arxiologBlog.title">
                              </div>
                           </section>
                     </VueSlickCarousel>
                  </div>


                     <section v-if="arxiologBlog.slicTextItem">
                        <div class="memoriy_content__item" v-for="(item,i) in arxiologBlog.slicTextItem" :key="i">
                           <h2 class="toshkent_maps__title__h2">{{item.title}}</h2>
                           <div class="memoriy_content__text" v-html="item.text"></div>
                        </div>
                     </section>
               </div>

               <div class="memoriy_content__cart__item">
                  <nuxt-link :to="localePath('#!')" class="memoriy_content__item__link">Arxeologik yodgorlik pasporti</nuxt-link>
               </div>
            </div>
        </section>
   </div>

   <!-- memoriy_content end -->


   <!-- memoriy_video start -->

   <div class="memoriy_video" v-if="arxiologBlog.link">
      <section class="container">
         <div class="memoriy_video__cart">

            <div class="memoriy_video__list__item" @click="videoPlay = true">

               <section class="memoriy_video__img__item" :class="{active__video:videoPlay}">
                  <img class="videoItem" :src="arxiologBlog.imgs" :alt="arxiologBlog.title"/>
                  <div v-html="arxiologBlog.link"></div>
                  <!-- play start -->

                  <div class="button__min is-play">
                     <div class="button-outer-circle has-scale-animation"></div>
                     <div class="button-outer-circle has-scale-animation has-delay-short"></div>
                     <div class="button-icon is-play">
                        <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
                     </div>
                  </div>

                  <!-- play end -->
               </section>

            </div>
         </div>
      </section>
   </div>

   <!-- memoriy_video end -->

   <!-- memoriy_carousel start -->

   <div class="memoriy_carousel" v-if="arxiologBlog.carouselFoto">
      <section class="container">
         <div class="memoriy_carousel__cart">

            <div class="memoriy_carousel__list clearfix">
               <div class="memoriy_carousel__item">
                  <h2 class="toshkent_maps__title__h2">Belgilangan davdagi yodgorlik ko'rinishi</h2>
                  <ul class="memoriy_carousel__menu">
                     <li v-for="item in arxiologBlog.carouselFoto" :key="item.id" @click="carouselId = item.id">
                        <h3 class="memoriy_carousel__link">{{ item.title }}</h3>
                     </li>
                  </ul>
               </div>

               <section class="memoriy_carousel__cart__list">
                  <section v-for="item in arxiologBlog.carouselFoto" :key="item.id">
                     <div class="memoriy_carousel__cart__item" v-if="carouselId == item.id" >
                        <img :src="item.imgs" :alt="item.title">
                     </div>
                  </section>
               </section>
            </div>

            <div class="memoriy_carousel__cart__likes">
               <button class="memoriy_carousel__botton" @click="likes" :class="{active:likesCart}">
                  <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3.219 14.4123L16 27.6667L28.781 14.4123C30.2018 12.9388 31 10.9405 31 8.85675C31 4.51758 27.608 1 23.4238 1C21.4145 1 19.4875 1.82777 18.0667 3.30118L16 5.44445L13.9333 3.30118C12.5125 1.82777 10.5855 1 8.57615 1C4.39195 1 1 4.51758 1 8.85675C1 10.9405 1.7982 12.9388 3.219 14.4123Z" stroke="#3A8DDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </button>

               <h4 class="memoriy_carousel__counter">{{ likesCounter }}</h4>
            </div>

         </div>
      </section>
   </div>

   <!-- memoriy_carousel end -->

   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import arxiologikApi from '~/data/arxiologikApi';
export default {

   head(){
      return{
         title:this.arxiologBlog.title,
         meta:[
            {
               hid: this.arxiologBlog.title,
               name:this.arxiologBlog.title,
               content:this.arxiologBlog.text
            },
         ]
      }
   },

   data(){
      return{
         arxiologikApi,
         videoPlay:false,
         likesCart:false,
         likesCounter:960,
         carouselId:1,
         c1: undefined,
         c2: undefined,
         slikMemoriy: {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                  {
                  breakpoint: 1100,
                  settings: {
                     slidesToShow: 5,
                     slidesToScroll: 1,
                  }
                },
                 {
                  breakpoint: 900,
                  settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                  }
                 },
                 {
                  breakpoint: 650,
                  settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                  }
                 },
                 {
                  breakpoint: 500,
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

   methods:{
      likes(){
         this.likesCart = !this.likesCart
         if(this.likesCart == true){
            this.likesCounter++
         }else if(this.likesCart == false){
            this.likesCounter--
         }else{
            console.log('Not liks')
         }
      }
   },

   computed:{
      arxiologBlog(){
         return arxiologikApi.find(arxiologBlog => arxiologBlog.id === + this.$route.params.id);
      },
   }
}
</script>
