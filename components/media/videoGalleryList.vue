<template>
  <div class="fotoGallery__list">
    <div v-for="items in videoList" :key="items.id" class="media__item__video">
      <nuxt-link :to="localePath('/media/video/' + items.id)">
        <div class="media__img__video">
          <img :src="items.imgs" :alt="items.title">

          <!-- play start -->

          <div class="button__min is-play">
            <div class="button-outer-circle has-scale-animation" />
            <div class="button-outer-circle has-scale-animation has-delay-short" />
            <div class="button-icon is-play">
              <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
            </div>
          </div>

          <!-- play end -->
        </div>

        <h3 class="media__title__video">
          {{ items.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['videoList']
}
</script>
