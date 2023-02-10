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

      <div class="news">
         <section class="container">
            <div class="news__cart">

               <newsListVue :newsItem="newsItem"></newsListVue>
               <paginationVue v-model="page" :count="countProducts" :per-page="productsPerPage"></paginationVue>
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
import newsListVue from '~/components/news/newsList.vue';
import yangiliklarApi from '~/data/yangiliklarApi';
import paginationVue from '~/components/pagination/pagination.vue'
export default {
   data(){
      return{
         page:1,
         productsPerPage:12,
      }
   },

   components:{
      newsListVue,
      paginationVue
   },

   computed:{
      newsItem(){
         const offset = (this.page - 1) * this.productsPerPage;
         return yangiliklarApi.slice(offset, offset + this.productsPerPage);
      },
      countProducts(){
         return yangiliklarApi.length;
      }
   }
}
</script>
