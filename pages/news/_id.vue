<template>
  <section>
     <!-- Memoriy start -->

     <div class="memoriy">
        <section class="container">
           <div class="memoriy__cart">
              <h2 class="memoriy__title__h2">{{ $t('news') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- news start -->

      <div class="news_in" v-if="newsBlog">
         <section class="container">
            <div class="news_in__cart">
               <div class="news_in__img">
                  <img :src="newsBlog.imgs" alt="newsIn">
               </div>

               <h4 class="news_in__data">{{ newsBlog.data }}</h4>
               <h2 class="toshkent_maps__title__h2">{{ newsBlog.title }}</h2>
               <div class="news_in__text clearfix" v-html="newsBlog.text"></div>
            </div>
         </section>
      </div>

      <!-- news end -->
  </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import yangiliklarApi from '~/data/yangiliklarApi';
export default {

   head(){
      return{
         title:this.newsBlog.title,
         meta:[
            {
               hid: this.newsBlog.text,
               name:this.newsBlog.title,
               content:this.newsBlog.text
            },
         ]
      }
   },

   data(){
      return{
         yangiliklarApi
      }
   },

   computed:{
      newsBlog(){
         return yangiliklarApi.find(newsBlog => newsBlog.id === + this.$route.params.id);
      },
   }
}
</script>
