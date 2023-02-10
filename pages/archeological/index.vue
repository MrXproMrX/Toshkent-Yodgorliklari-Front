<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('archeological') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- Arxiologik start -->

      <div class="ashyolar_in">
         <section class="container">
            <div class="ashyolar_in__cart">
               <arxiologikListVue :arxiologikList="arxiologikList"></arxiologikListVue>
            </div>
         </section>
      </div>

      <!-- Arxiologik end -->
   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import arxiologikListVue from '~/components/arxiologik/arxiologikList.vue';
import arxiologikApi from '~/data/arxiologikApi';
export default {
   data(){
      return{
         arxiologikList:arxiologikApi
      }
   },
   components:{
      arxiologikListVue
   }
}
</script>
