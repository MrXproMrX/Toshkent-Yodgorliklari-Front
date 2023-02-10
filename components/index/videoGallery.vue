<template>
   <section>
      <div class="videoGallery__list">

         <div class="videoGallery__list__item" v-if="itemVideo.id" @click="videoPlay = true">

            <section class="videoGallery__img__item" :class="{active__video:videoPlay}">
               <img class="videoItem" :src="itemVideo.imgs" alt="video"/>
               <!-- play start -->

               <div v-html="itemVideo.link"></div>

               <div class="button__min is-play" href="#">
                  <div class="button-outer-circle has-scale-animation"></div>
                  <div class="button-outer-circle has-scale-animation has-delay-short"></div>
                  <div class="button-icon is-play">
                     <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
                  </div>
               </div>

               <!-- play end -->
            </section>

            <section class="videoGallery__item__cart">
               <h3 class="videoGallery__list__title">
                  {{ itemVideo.title }}
               </h3>
            </section>

         </div>

         <div class="videoGallery__menu__video">

            <div class="videoGallery__item__video active" v-for="(items,i) in viteoList" :key="items.id" @click="videoClick(i)">
               <div class="videoGallery__img__video">
                  <img class="videoImg" :src="items.imgs" alt="videoGallery">

                  <!-- play start -->

                  <div class="button__min is-play">
                     <div class="button-outer-circle has-scale-animation"></div>
                     <div class="button-outer-circle has-scale-animation has-delay-short"></div>
                     <div class="button-icon is-play">
                        <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
                     </div>
                  </div>

                  <!-- play end -->

               </div>

               <h3 class="videoGallery__title__h3">
                  {{ items.title }}
               </h3>
            </div>

         </div>
      </div>
   </section>
</template>

<script>
export default {
   props:['viteoList'],

   data(){
      return{
         itemVideo:this.viteoList[0],
         videoPlay:false
      }
   },

   methods:{
      videoClick(id){
         this.itemVideo = this.viteoList[id]
         this.videoPlay = false
      }
   }
}
</script>
