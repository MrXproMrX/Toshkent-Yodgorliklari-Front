<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('video') }}</h2>
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

               <div class="media__video__list__item" @click="videoPlay = true">

                  <section class="media__video__img__item" :class="{active__video:videoPlay}">
                     <img class="videoItem" :src="videoGalleryBlog.imgs" :alt="videoGalleryBlog.title"/>
                     <div v-html="videoGalleryBlog.link"></div>
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

                <h3 class="media__video__title__h3">{{ videoGalleryBlog.title }}</h3>
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
import videoGalleryListApi from '~/data/videoGalleryListApi';
export default {
   data(){
      return{
         videoGalleryListApi,
         videoPlay:false
      }
   },

   computed:{
      videoGalleryBlog(){
         return videoGalleryListApi.find(videoGalleryBlog => videoGalleryBlog.id === + this.$route.params.id);
      },
   }
}
</script>
