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

      <!-- ashyolar start -->

      <div class="ashyolar_in">
         <section class="container">
            <div class="ashyolar_in__cart">
               <ashyolarListVue :ashyolarList="ashyolarList"></ashyolarListVue>
            </div>
         </section>
      </div>

      <!-- ashyolar end -->
   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
import ashyolarListVue from '~/components/ashyolar/ashyolarList.vue';
import ashyolarApi from '~/data/ashyolarApi';
export default {
   data(){
      return{
         ashyolarList:ashyolarApi
      }
   },

   components:{
      ashyolarListVue
   }
}
</script>
