<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('scientists') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- Olimlar start -->

      <div class="olimlar_in">
         <section class="container">
            <div class="olimlar_in__cart">
               <olimlarListVue :olimlarList="olimlarList"></olimlarListVue>
            </div>
         </section>
      </div>

      <!-- Olimlar end -->

   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import olimlarListVue from '~/components/olimlar/olimlarList.vue';
import olimlarApi from '~/data/olimlarApi';
export default {
   data(){
      return{
         olimlarList:olimlarApi
      }
   },

   components:{
      olimlarListVue
   }
}
</script>
