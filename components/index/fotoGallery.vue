<template>
   <div class="fotoGallery__list">
      <div class="fotoGallery__item" v-for="item in fotoList" :key="item.id">
         <nuxt-link :to="localePath(`/media/photo/` + item.id)">
            <img :src="item.imgs" :alt="item.id">
            <span>
               <i class="fas fa-search"></i>
            </span>
         </nuxt-link>
      </div>
   </div>
</template>

<script>
export default {
   props:['fotoList']
}
</script>
