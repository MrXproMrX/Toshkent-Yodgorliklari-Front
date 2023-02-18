<template>
  <div class="fotoGallery__list">
    <div v-for="item in fotoList" :key="item.id" class="fotoGallery__item">
      <nuxt-link :to="localePath(`/media/photo/` + item.id)">
        <img :src="item.imgs" :alt="item.id">
        <span>
          <fa :icon="['fas', 'magnifying-glass']" />
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    fotoList:{
      type:Array,
      required:true,
      default:() => []
    }
  }
}
</script>
