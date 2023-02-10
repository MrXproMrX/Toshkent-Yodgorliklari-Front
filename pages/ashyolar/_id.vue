<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('items') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->

      <!-- ashyolar_content start -->

      <div class="ashyolar_content">
         <section class="container">
            <div class="ashyolar_content__cart">
               <h2 class="toshkent_maps__title__h2">{{ ashyolarBlog.title }}</h2>

               <div class="ashyolar_content__imgs">
                  <img :src="ashyolarBlog.imgs" :alt="ashyolarBlog.title">
               </div>

               <div class="ashyolar_content__text clearfix" v-html="ashyolarBlog.text"></div>

               <div class="memoriy_video__list__item" @click="videoPlay = true" v-if="ashyolarBlog.link">
                  <section class="memoriy_video__img__item" :class="{active__video:videoPlay}">
                     <img class="videoItem" :src="ashyolarBlog.imgs" :alt="ashyolarBlog.title"/>
                     <div v-html="ashyolarBlog.link"></div>
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

      <!-- ashyolar_content end -->

   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import ashyolarApi from '~/data/ashyolarApi';
export default {

   head(){
      return{
         title:this.ashyolarBlog.title,
         meta:[
            {
               hid: this.ashyolarBlog.text,
               name:this.ashyolarBlog.title,
               content:this.ashyolarBlog.text
            },
         ]
      }
   },

   data(){
      return{
         ashyolarApi,
         videoPlay:false
      }
   },
   computed:{
      ashyolarBlog(){
         return ashyolarApi.find(ashyolarBlog => ashyolarBlog.id === + this.$route.params.id);
      },
   }
}
</script>
