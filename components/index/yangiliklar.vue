<template>
   <div class="yangiliklar__list">

      <template v-for="(item,i) in newsList">
         <div class="yangiliklar__item" v-if="i < 3" :key="item.id">
            <nuxt-link :to="localePath(`/news/` + item.id)">
               <div class="yangiliklar__img">
                  <img :src="item.imgs" :alt="item.title">
               </div>

               <h4 class="yangiliklar__data">{{item.data}}</h4>

               <h3 class="arxiologik__title__h3">
                  {{ item.title }}
               </h3>

               <div class="yangiliklar__text" v-html="item.text"></div>
            </nuxt-link>
         </div>
      </template>

   </div>
</template>

<script>
export default {
   props:['newsList']
}
</script>
