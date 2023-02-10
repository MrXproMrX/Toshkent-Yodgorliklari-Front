<template>
   <section>
      <div class="olimlar_in__list">

         <section class="olimlar_in__item__list" v-for="item in olimlarList" :key="item.id" :class="{active:(item.open)}">
            <div class="olimlar_in__item__img">
               <img :src="item.imgs" :alt="item.title">
            </div>

            <div class="olimlar_in__item__text">
               <h3 class="olimlar_in__name">{{ item.name }}</h3>
               <h4 class="olimlar_in__title__h4">{{ item.title }}</h4>

               <div class="olimlar_in__text clearfix" v-html="item.text"></div>
            </div>

            <button class="olimlar_in__open" @click="item.open = !item.open">
               <i class="fas fa-chevron-down"></i>
            </button>
         </section>

      </div>
   </section>
</template>

<script>
export default {
   props:['olimlarList'],
}
</script>
