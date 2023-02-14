<template>
  <div class="fotoGallery__list">
    <section v-for="items in photoGallery" :key="items.id" class="media__cart__item">
      <div class="fotoGallery__item">
        <nuxt-link :to="localePath(`/media/photo/` + items.id)">
          <img :src="items.imgs" :alt="items.title">
          <span>
            <i class="fas fa-search" />
          </span>
        </nuxt-link>
      </div>
      <h3 class="media__title__video">
        {{ items.title }}
      </h3>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    photoGallery:{
      type:Array,
      required:true,
      default:() => []
    }
  }
}
</script>
