<template>
   <VueSlickArxiologik v-bind="slikAshyolar" class="arxiologik__list">
      <section v-for="items in ashyolarList" :key="items.id">
         <div class="arxiologik__item">
            <div class="arxiologik__img">
               <img :src="items.imgs" :alt="items.title">
            </div>
            <h3 class="arxiologik__title__h3">
               {{ items.title }}
            </h3>
            <nuxt-link :to="localePath(`/ashyolar/` + items.id)" class="arxiologik__item__link">
               {{ $t('everything') }}
            </nuxt-link>
         </div>
      </section>
   </VueSlickArxiologik>
</template>

<script>
import VueSlickArxiologik from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
   props:['ashyolarList'],
   data(){
      return{
         slikAshyolar:{
            infinite:false,
            arrows:false,
            dots:true,
            speed:1500,
            slidesToShow:4,
            slidesToScroll:1,
            responsive:[
               {
               breakpoint: 1250,
               settings: {
                  slidesToShow: 4,
                  dots: false
               }
               },

               {
                  breakpoint: 1000,
                  settings: {
                     slidesToShow: 3,
                  }
               },
               {
                  breakpoint: 900,
                  settings: {
                     slidesToShow: 2,
                  }
               },
              {
                  breakpoint: 600,
                  settings: {
                     slidesToShow: 1,
                  }
               },
            ]
         }
      }
   },
   components:{
      VueSlickArxiologik
   }
}
</script>
