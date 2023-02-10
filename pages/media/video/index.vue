<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('media') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->



      <!-- media start -->

      <div class="media">
         <section class="container">
            <div class="media__cart">
               <ul class="media__menu">
                  <li>
                     <nuxt-link :to="localePath('/media/photo')" class="media__menu__link">{{ $t('foto') }}</nuxt-link>
                  </li>

                  <li class="active">
                     <nuxt-link :to="localePath('/media/video')" class="media__menu__link">{{ $t('video') }}</nuxt-link>
                  </li>
               </ul>

               <videoGalleryListVue :videoList="videoList"></videoGalleryListVue>

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
import videoGalleryListVue from '~/components/media/videoGalleryList.vue';
import videoGalleryListApi from '~/data/videoGalleryListApi';

export default {
   data(){
      return{
         videoList:videoGalleryListApi,
      }
   },

   components:{
      videoGalleryListVue
   }
}
</script>
