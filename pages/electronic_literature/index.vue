<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('electronicliterature') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- Electronic literature start -->

      <div class="electronic">
         <section class="container">
            <div class="electronic__cart">
               <electronicListVue :electronicList="electronicList"></electronicListVue>
            </div>
         </section>
      </div>

      <!-- Electronic literature end -->

   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import electronicListVue from '~/components/electronic/electronicList.vue';
import electronicApi from '~/data/electronicApi';
export default {
   data(){
      return{
         electronicList:electronicApi
      }
   },

   components:{
      electronicListVue
   }
}
</script>
